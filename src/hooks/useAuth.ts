import { useQuery, useMutation, useQueryClient } from 'react-query';

interface Credentials {
    name: string;
    email: string;
    password: string;
}

interface User {
    token: string;
}

async function loginUser(credentials: Credentials): Promise<User> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Problem z logowaniem');
  }

  return await response.json();
}

function getUserFromLocalStorage(): User | null {
  const token = localStorage.getItem('token');
  if (token) {
    return { token };
  }
  return null;
}

export function useAuth() {
  const queryClient = useQueryClient();

  const { data: user, status } = useQuery<User | null, Error>('auth', getUserFromLocalStorage, {
    staleTime: Infinity,
    cacheTime: 0,
  });

  const { mutate: login } = useMutation<User, Error, Credentials>(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem('token', data.token);
      queryClient.setQueryData('auth', data);
    },
    onError: (error) => {
      console.error('Błąd logowania', error);
    },
  });

  return { user, status, login };
}
