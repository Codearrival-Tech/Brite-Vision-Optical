# 🔧 Sheety API Setup Guide

## Step 1: Verify Your Sheety Project

1. Open your Sheety project dashboard
2. Go to **API** section and note the exact sheet tab names
3. Check that POST is **enabled** for each sheet

## Step 2: Expected Sheet Tab Names

For the connection to work, your Sheety project should have these exact tab names:

| Form Type | Sheet Tab Name | API Endpoint | Payload Key |
|-----------|---|---|---|
| Contact | `Contacts` | `/contacts` | `contact` |
| Eye Test | `Eye Tests` | `/eyeTests` | `eyeTest` |
| Book Frames | `Book Frames` | `/bookFrames` | `bookFrame` |
| Feedback | `Feedbacks` | `/feedbacks` | `feedback` |

> **Note**: Sheety converts sheet names to camelCase in the API. 
> - "Contact Forms" → `/contactForms`
> - "Eye Test Bookings" → `/eyeTestBookings`

## Step 3: Enable POST Permissions

1. In Sheety Dashboard
2. Click on your project
3. For each sheet tab, ensure:
   - ✅ **GET** is enabled (to read data)
   - ✅ **POST** is enabled (to write data)
   - ✅ Visibility set to public or with auth

## Step 4: Test the Connection

### Method 1: Browser Console Test
```javascript
// Open DevTools (F12) → Console tab → paste this:

// Test if the API is accessible
fetch("https://api.sheety.co/17y7mYtdRGPYzWxyqxEaxpdK2mqaXII_q7n9DQ_Dt3Lg/briteVisionOpticalLeadGeneration/contacts")
  .then(r => r.json())
  .then(d => console.log("✅ Contacts accessible:", d))
  .catch(e => console.error("❌ Error:", e));

// Test POST request
fetch("https://api.sheety.co/17y7mYtdRGPYzWxyqxEaxpdK2mqaXII_q7n9DQ_Dt3Lg/briteVisionOpticalLeadGeneration/contacts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ contact: { name: "Test", email: "test@test.com", phone: "123", message: "test" } })
})
  .then(r => r.json())
  .then(d => console.log("✅ POST Success:", d))
  .catch(e => console.error("❌ POST Failed:", e));
```

### Method 2: Network Tab Inspection
1. Open DevTools (F12)
2. Go to **Network** tab
3. Fill out and submit the contact form
4. Look for the failed request
5. Click on it to see:
   - Request URL
   - Request Headers
   - Request Body
   - Response Status
   - Response Body

## Common Issues & Fixes

### ❌ Error 404: Not Found
**Cause**: Sheet tab doesn't exist or wrong endpoint name

**Solution**:
1. Check exact sheet tab names in Sheety
2. Update endpoint names in `src/api/axios.ts`
3. Example: If your tab is "Contact Forms" → use `/contactForms`

### ❌ Error 403: Forbidden
**Cause**: POST permissions not enabled

**Solution**:
1. Go to Sheety Dashboard
2. Click project settings
3. Enable POST for all sheets
4. Save and try again

### ❌ CORS Error (in console)
**Cause**: Browser blocking cross-origin request

**Solution**:
- This is usually handled by Sheety automatically
- Check that your sheet is set to public access
- Try from a different browser or clear cache

### ❌ Timeout Error
**Cause**: Request taking too long

**Solution**:
1. Check your internet connection
2. Verify Sheety is not down (check status.sheety.co)
3. Try again in a few moments

### ❌ Empty Response or 500 Error
**Cause**: Data validation or server error

**Solution**:
1. Check the column headers in your Google Sheet
2. Ensure they match what's being sent
3. Check Google Sheet doesn't have any filters applied

## Debugging Logs

When you submit a form, check the browser console (F12 → Console) for these logs:

```
📤 API Request: {
  method: "POST",
  url: "https://api.sheety.co/...",
  data: { contact: { ... } }
}
```

If successful:
```
📥 API Response: {
  status: 200,
  url: "...",
  data: { ... }
}
```

## Your Current Configuration

**Base URL**: `https://api.sheety.co/17y7mYtdRGPYzWxyqxEaxpdK2mqaXII_q7n9DQ_Dt3Lg/briteVisionOpticalLeadGeneration`

**Endpoints**:
- Contact: `/contacts`
- Eye Test: `/eyeTests`
- Book Frame: `/bookFrames`
- Feedback: `/feedbacks`

---

## 📋 Checklist Before Testing

- [ ] Sheety project exists
- [ ] Google Sheet is shared publicly
- [ ] Sheet tabs match expected names
- [ ] POST permissions enabled
- [ ] `.env` file has correct VITE_BASE_URL
- [ ] Browser console shows no errors
- [ ] Internet connection is stable
