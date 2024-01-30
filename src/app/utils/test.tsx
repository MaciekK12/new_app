'use client'
import React, { useEffect, useState } from 'react';

type UserType = {
    id: string;
    created_at: Date;
    name: string;
    type: string;
    email: string;
};

const MainComponent = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users');
                if (!response.ok) {
                    throw new Error('Błąd sieciowy lub serwera');
                }
                const result = await response.json();

                setUsers(result);
            } catch (error) {
                console.error("Błąd podczas pobierania danych: ", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <p>Imię: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Typ: {user.type}</p>
                    <p>Data utworzenia: {new Date(user.created_at).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default MainComponent;
