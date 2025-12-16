"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Character } from "@/types";

export default function Search() {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Character[]>([]);

    const handleSearch = async (text: string) => {
        setQuery(text);

        if (text.length > 2) {
            try {
                let res = await fetch(`https://rickandmortyapi.com/api/character/?name=${text}`);
                let data = await res.json();


                if (data.error) {
                    res = await fetch(`https://rickandmortyapi.com/api/character/?species=${text}`);
                    data = await res.json();
                }


                if (data.error) {
                    res = await fetch(`https://rickandmortyapi.com/api/character/?status=${text}`);
                    data = await res.json();
                }


                if (data.error) {
                    res = await fetch(`https://rickandmortyapi.com/api/character/?gender=${text}`);
                    data = await res.json();
                }

                if (data.results) {
                    setSuggestions(data.results.slice(0, 5));
                } else {
                    setSuggestions([]);
                }
            } catch (error) {
                setSuggestions([]);
            }
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="relative w-full max-w-[720px] z-50">


            <div className="bg-white p-3 rounded-lg shadow-xl flex items-center border border-gray-100">
                <input
                    type="text"
                    placeholder="Buscar personagem (Nome, Espécie, Status...)"
                    className="w-full p-2 ml-2 outline-none text-gray-700 placeholder-gray-400 text-lg"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <button className="p-2 text-gray-400 hover:text-green-600 transition-colors">
                    🔍
                </button>
            </div>


            {suggestions.length > 0 && (
                <div className="absolute top-full left-0 w-full bg-white mt-2 rounded-xl shadow-2xl overflow-hidden border border-gray-100 max-h-[400px] overflow-y-auto">
                    {suggestions.map((char) => (
                        <Link
                            key={char.id}
                            href={`/character/${char.id}`}
                            className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                        >
                            <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
                                <Image src={char.image} alt={char.name} fill className="object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-gray-700">{char.name}</span>
                                <span className="text-xs text-gray-400">{char.species} - {char.status}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

        </div>
    );
}