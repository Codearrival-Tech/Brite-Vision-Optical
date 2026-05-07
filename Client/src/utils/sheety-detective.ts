/**
 * Sheety Sheet Detective
 * Helps identify the correct sheet tab names and endpoints
 */

import axiosInstance from '../api/axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Common sheet name variations
const SHEET_VARIATIONS = [
  // Singular
  'contact', 'eyeTest', 'bookFrame', 'feedback',
  // Plural
  'contacts', 'eyeTests', 'bookFrames', 'feedbacks',
  // With spaces converted
  'contactForm', 'contactForms',
  'eyeTestBooking', 'eyeTestBookings',
  'bookFrameReservation', 'bookFrameReservations',
  'testimonial', 'testimonials',
  // Other variations
  'form', 'forms', 'submission', 'submissions',
];

export const detectSheetNames = async () => {
  console.clear();
  console.group('🔎 Detecting Sheety Sheet Names...');
  
  const foundSheets: Record<string, { url: string; status: string; rowCount?: number }> = {};
  
  for (const sheetName of SHEET_VARIATIONS) {
    const url = `${BASE_URL}/${sheetName}`;
    try {
      console.log(`🔍 Testing: /${sheetName}...`);
      const response = await axiosInstance.get(url);
      
      // Count rows
      const data = response.data;
      const dataKey = Object.keys(data)[0];
      const rowCount = Array.isArray(data[dataKey]) ? data[dataKey].length : 0;
      
      foundSheets[sheetName] = {
        url,
        status: '✅ FOUND',
        rowCount,
      };
      
      console.log(`✅ Found! Rows: ${rowCount}`);
      console.log('   Data sample:', data[dataKey]?.[0] || data);
      
    } catch (error: any) {
      if (error.response?.status === 404) {
        // Sheet doesn't exist - don't log
      } else if (error.response?.status === 500) {
        foundSheets[sheetName] = {
          url,
          status: '⚠️ 500 Error (sheet might exist but has issues)',
        };
        console.warn(`⚠️ ${sheetName}: 500 Error`);
      } else {
        console.log(`❌ ${sheetName}: ${error.response?.status || error.message}`);
      }
    }
  }
  
  console.groupEnd();
  
  console.group('📊 Results');
  if (Object.keys(foundSheets).length === 0) {
    console.error('❌ No sheets found!');
    console.log('Possible causes:');
    console.log('1. Sheety project URL is wrong');
    console.log('2. Sheet names are completely different');
    console.log('3. Sheety API is down');
  } else {
    console.table(foundSheets);
    console.log('\n📋 Update your axios.ts API endpoints to:');
    Object.entries(foundSheets).forEach(([name]) => {
      console.log(`  ${name}: \`\${BASE_URL}/${name}\``);
    });
  }
  console.groupEnd();
  
  return foundSheets;
};

export const testPostRequest = async (sheetName: string, data: any) => {
  console.group(`📨 Testing POST to /${sheetName}`);
  
  try {
    // Try with root key = sheet name (singular form)
    const rootKey = sheetName.endsWith('s') 
      ? sheetName.slice(0, -1) // Remove trailing 's' for singular form
      : sheetName;
    
    const payload = {
      [rootKey]: data,
    };
    
    console.log('Payload:', payload);
    
    const response = await axiosInstance.post(`${BASE_URL}/${sheetName}`, payload);
    
    console.log('✅ POST Success:', response.data);
    console.groupEnd();
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('❌ POST Failed:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    console.groupEnd();
    return { success: false, error };
  }
};

/**
 * Usage in browser console:
 * 
 * Step 1: Detect all sheets
 * import { detectSheetNames } from '@/utils/sheety-detective'
 * detectSheetNames()
 * 
 * Step 2: Test POST to a specific sheet
 * import { testPostRequest } from '@/utils/sheety-detective'
 * testPostRequest('contact', { 
 *   name: 'Test User', 
 *   email: 'test@test.com',
 *   phone: '123456',
 *   message: 'Test message'
 * })
 */
