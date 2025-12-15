import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10 bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-8 text-green-400">
                Rick and Morty Explorer
            </h1>

            <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
                <p className="text-center text-xl">
                    Carregando portal dimensional...
                </p>
            </div>
        </main>
    );
}