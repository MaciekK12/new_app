import { MongoClient, Db, Collection } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

// Definiowanie typu dla dokumentów użytkownika
type UserType = {
    _id: string;
    name: string;
    email: string;
    password: string;
};

// Definiowanie globalnego typu dla klienta MongoDB i obietnicy
declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

// Weryfikacja i pobranie URI bazy danych
const uri = process.env.MONGODB_URI;
if (!uri) {
    throw new Error("Nie znaleziono zmiennej środowiskowej MONGODB_URI");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Ustawianie klienta MongoDB w zależności od środowiska
if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

// Funkcja pomocnicza do uzyskania kolekcji z bazy danych
async function getCollection(): Promise<Collection<UserType>> {
    const client = await clientPromise;
    const db: Db = client.db('sample_mflix'); // Zmień na nazwę Twojej bazy danych
    return db.collection<UserType>('users');
}

// Główna funkcja obsługująca żądania API
export default async function handler(
    req: NextApiRequest, 
    res: NextApiResponse<UserType[] | { error: string }>
) {
    try {
        const collection = await getCollection();
        const result = await collection.find({}).toArray();
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Błąd serwera' });
    }
}
