'use client';

import { useState, useCallback } from 'react';
import {
  logUserToGoogleSheets,
  validateUserData,
} from '@/lib/google-sheets';

interface UserSignupData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
}

interface UseGoogleSheetsLoggerState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

interface UseGoogleSheetsLoggerReturn extends UseGoogleSheetsLoggerState {
  logUser: (userData: UserSignupData) => Promise<boolean>;
  reset: () => void;
}

/**
 * Custom hook for logging user data to Google Sheets
 * @returns Object with logging function and state
 */
export function useGoogleSheetsLogger(): UseGoogleSheetsLoggerReturn {
  const [state, setState] = useState<UseGoogleSheetsLoggerState>({
    isLoading: false,
    error: null,
    success: false,
  });

  const logUser = useCallback(
    async (userData: UserSignupData): Promise<boolean> => {
      // Reset state
      setState({ isLoading: true, error: null, success: false });

      // Validate user data
      const validationErrors = validateUserData(userData);
      if (validationErrors.length > 0) {
        const errorMessage = validationErrors.join(', ');
        setState({
          isLoading: false,
          error: errorMessage,
          success: false,
        });
        return false;
      }

      try {
        const result = await logUserToGoogleSheets(userData);

        if (result.success) {
          setState({
            isLoading: false,
            error: null,
            success: true,
          });
          return true;
        } else {
          setState({
            isLoading: false,
            error: result.error || 'Failed to log user',
            success: false,
          });
          return false;
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Unknown error occurred';
        setState({
          isLoading: false,
          error: errorMessage,
          success: false,
        });
        return false;
      }
    },
    []
  );

  const reset = useCallback(() => {
    setState({ isLoading: false, error: null, success: false });
  }, []);

  return {
    ...state,
    logUser,
    reset,
  };
}