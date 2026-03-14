interface UserSignupData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface LogUserResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: string;
}

/**
 * Logs user signup data to Google Sheets
 * @param userData - User information to log
 * @returns Promise with success status
 */
export async function logUserToGoogleSheets(
  userData: UserSignupData
): Promise<LogUserResponse> {
  try {
    const response = await fetch('/api/log-user-signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to log user data');
    }

    return {
      success: true,
      message: data.message || 'User data logged successfully',
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error logging user to Google Sheets:', errorMessage);

    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Validates user data before logging
 * @param userData - User information to validate
 * @returns Array of validation errors (empty if valid)
 */
export function validateUserData(userData: Partial<UserSignupData>): string[] {
  const errors: string[] = [];

  if (!userData.name?.trim()) {
    errors.push('Name is required');
  }

  if (!userData.email?.trim() || !isValidEmail(userData.email)) {
    errors.push('Valid email is required');
  }

  if (!userData.phoneNumber?.trim()) {
    errors.push('Phone number is required');
  }

  if (!userData.address?.trim()) {
    errors.push('Address is required');
  }

  return errors;
}

/**
 * Simple email validation
 * @param email - Email address to validate
 * @returns True if email format is valid
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}