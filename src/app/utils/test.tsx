'use client'
import React, { useEffect, useState } from 'react';

type UserType = {
    _id: string;
    name: string;
    email: string;
};

const MainComponent = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    const fetchUsers = async () => {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) {
                throw new Error('Błąd sieciowy lub serwera');
            }
            const data = await response.json();
            console.log("Dane użytkowników z API:", data);

            // Zakładając, że odpowiedź z serwera jest w formacie { users: [...user data] }
            setUsers(data.users);
        } catch (error) {
            console.error("Błąd podczas pobierania danych: ", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div key={user._id}>
                    {user.name} - {user.email}
                </div>
            ))}
        </div>
    );
};

export default MainComponent;
