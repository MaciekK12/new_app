type UserType = {
    _id: string;
    name: string;
    email: string;
};

export async function getUsers(): Promise<UserType[]> {
  const response = await fetch('/api/users');
  if (!response.ok) {
    throw new Error('Problem z pobraniem danych użytkowników');
  }
  return response.json().then(data => data.data);
}