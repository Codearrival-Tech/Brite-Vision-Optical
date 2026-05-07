/**
 * Sheety Connection Debugging Utility
 * Use this to test and debug your Sheety API connection
 */

import axiosInstance, { API } from "../api/axios";

export const debugSheety = async () => {
  const results = {
    baseUrl: import.meta.env.VITE_BASE_URL,
    endpoints: {
      contact: API.CONTACT,
      eyeTest: API.EYE_TEST,
      bookFrame: API.BOOK_FRAME,
      feedback: API.FEEDBACK,
    },
    tests: {} as Record<string, any>,
  };

  console.group("🔍 Sheety Connection Debug");
  console.log("Base URL:", results.baseUrl);
  console.log("Endpoints:", results.endpoints);

  // Test each endpoint
  const endpoints = [
    { name: "Contact", url: API.CONTACT },
    { name: "Eye Test", url: API.EYE_TEST },
    { name: "Book Frame", url: API.BOOK_FRAME },
    { name: "Feedback", url: API.FEEDBACK },
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\n📡 Testing ${endpoint.name} endpoint...`);
      const response = await axiosInstance.get(endpoint.url);
      results.tests[endpoint.name] = {
        status: "✅ Success",
        statusCode: response.status,
        dataKeys: Object.keys(response.data),
      };
      console.log(`✅ ${endpoint.name} endpoint is working!`);
      console.log("Response:", response.data);
    } catch (error: any) {
      const errorInfo = {
        status: "❌ Failed",
        statusCode: error.response?.status,
        message: error.message,
        responseData: error.response?.data,
      };
      results.tests[endpoint.name] = errorInfo;
      console.error(`❌ ${endpoint.name} endpoint failed:`, errorInfo);
    }
  }

  // Test POST with sample data
  console.log("\n📨 Testing POST request...");
  try {
    const testData = {
      contact: {
        name: "Test User",
        email: "test@example.com",
        phone: "+1234567890",
        message: "This is a test submission",
      },
    };
    const response = await axiosInstance.post(API.CONTACT, testData);
    results.tests["POST Test"] = {
      status: "✅ Success",
      statusCode: response.status,
    };
    console.log("✅ POST request successful:", response.data);
  } catch (error: any) {
    results.tests["POST Test"] = {
      status: "❌ Failed",
      statusCode: error.response?.status,
      message: error.message,
    };
    console.error("❌ POST request failed:", {
      statusCode: error.response?.status,
      message: error.message,
      data: error.response?.data,
    });

    if (error.response?.status === 403) {
      console.warn(
        "⚠️  Access Denied (403): Check Sheety dashboard POST permissions"
      );
    } else if (error.response?.status === 404) {
      console.warn("⚠️  Endpoint not found (404): Check sheet tab names");
    }
  }

  console.groupEnd();
  return results;
};

/**
 * Run this in browser console to debug:
 * import { debugSheety } from './utils/sheety-debug'
 * debugSheety()
 */
