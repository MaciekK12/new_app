'use client'
import React from 'react';
import { useQuery } from 'react-query';

type UserType = {
    _id: string;
    name: string;
    email: string;
};

const fetchUsers = async () => {
    const response = await fetch('/api/users');
    if (!response.ok) {
        throw new Error('Błąd sieciowy lub serwera');
    }
    const data = await response.json();
    console.log(data)

    return data.users;
};

const MainComponent = () => {
    const { data: users, error, isLoading } = useQuery('users', fetchUsers);

    if (isLoading) {
        return <div>Ładowanie...</div>;
    }

    if (error) {
        return <div>Błąd podczas pobierania danych: Wystąpił problem podczas pobierania danych.</div>;
    }

    return (
        <div>
            {users?.map((user: UserType) => (
                <div key={user._id}>
                    {user.name} - {user.email}
                </div>
            ))}
        </div>
    );
};

export default MainComponent;
