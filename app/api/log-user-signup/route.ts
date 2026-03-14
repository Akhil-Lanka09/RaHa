import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phoneNumber, address } = await request.json();
    
    // Validate required fields
    if (!name || !email || !phoneNumber || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || '{}'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const timestamp = new Date().toISOString();
    const date = new Date().toLocaleDateString();

    // Append row to your Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [name, email, phoneNumber, address, date, timestamp],
        ],
      },
    });

    return NextResponse.json({ 
      success: true,
      message: 'User data logged successfully',
      updatedRange: response.data.updates?.updatedRange
    });
  } catch (error) {
    console.error('Error logging to Google Sheets:', error);
    return NextResponse.json(
      { error: 'Failed to log user data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}