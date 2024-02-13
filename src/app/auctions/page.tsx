"use client"
import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/lib/users/getUsers';

type UserType = {
    _id: string;
    name: string;
    email: string;
};

export default function AuctionPage() {
    const { data, isLoading, isError, isSuccess } = useQuery<UserType[], Error>({ queryKey: ['users'], queryFn: getUsers });
    console.log(data)

    if (isLoading) return <div>Ładowanie...</div>;
    if (isError) return <div>Błąd: {isError}</div>;

    return (
        <ul>
            {data && data.map((user
            ) => (
                <li key={user._id}>{user.name}</li>
            ))}
        </ul>
    );
}
