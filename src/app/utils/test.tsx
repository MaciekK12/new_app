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
                const data = await response.json();

                console.log("Dane użytkowników z API:", data);

                setUsers(data);
            } catch (error) {
                console.error("Błąd podczas pobierania danych: ", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            {/* Renderowanie użytkowników itd. */}
        </div>
    );
};

export default MainComponent;
