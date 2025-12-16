"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 px-4">
            <div className="text-center max-w-md">

                <div className="text-6xl mb-4">🛸💥</div>

                <h2 className="text-3xl font-bold mb-4 text-[#333333]">
                    Wubba Lubba Dub Dub!
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                    Parece que o portal quebrou. Não conseguimos carregar os dados da API agora.
                </p>

                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => reset()}
                        className="px-6 py-3 bg-[#B2DA19] text-[#333333] font-bold rounded-full hover:bg-[#9ABF15] transition-transform hover:scale-105"
                    >
                        Tentar novamente
                    </button>

                    <Link href="/">
                        <button className="px-6 py-3 border-2 border-[#333333] text-[#333333] font-bold rounded-full hover:bg-gray-50 transition-transform hover:scale-105">
                            Recarregar página
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}