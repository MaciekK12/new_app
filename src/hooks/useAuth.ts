// hooks/useAuth.ts
import { useMutation, useQueryClient } from 'react-query';

interface Credentials {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface ErrorResponse {
  message: string;
}

const loginUser = async (credentials: Credentials): Promise<LoginResponse> => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const errorResponse: ErrorResponse = await response.json();
    throw new Error(errorResponse.message || 'Problem with login');
  }
  return response.json();
};

const registerUser = async (credentials: Credentials): Promise<void> => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) {
    const errorResponse: ErrorResponse = await response.json();
    throw new Error(errorResponse.message || 'Problem with registration');
  }
};

export function useAuth() {
  const queryClient = useQueryClient();

  // Logowanie użytkownika
  const login = useMutation<LoginResponse, Error, Credentials>(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.invalidateQueries('user');
    },
  });

  // Rejestracja użytkownika (przykład użycia, jeśli jest potrzebny)
  const register = useMutation<void, Error, Credentials>(registerUser, {
    onSuccess: () => {
      // Możesz tutaj dodać logikę po pomyślnej rejestracji, np. przekierowanie lub wyświetlenie komunikatu
    },
  });

  return { login, register };
}
