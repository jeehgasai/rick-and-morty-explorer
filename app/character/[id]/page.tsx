import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types";
import Card from "@/app/components/Card";

async function getCharacter(id: string) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    if (!res.ok) return null;
    return res.json();
}

async function getSuggestions(species: string, currentId: number) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?species=${species}`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.results.filter((char: Character) => char.id !== currentId).slice(0, 4);
}

export default async function CharacterPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const character = await getCharacter(params.id);

    if (!character) {
        return <div className="text-center mt-40 font-bold text-xl">Personagem não encontrado! 🌌</div>;
    }

    const suggestions = await getSuggestions(character.species, character.id);

    return (
        <div className="min-h-screen bg-white font-sans pb-20 overflow-x-hidden">
            <main className="w-full relative">

                <div className="mt-[86px] md:mt-[140px] w-full bg-[#333333] h-[242px] relative flex items-center">
                    <div className="pl-4 md:pl-[228px] flex items-center gap-6 z-10">
                        <Link href="/" className="group">
                            <div className="w-10 h-10 rounded-full border border-[#B2DA19] flex items-center justify-center text-[#B2DA19] hover:bg-[#B2DA19] hover:text-black transition-colors">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                                </svg>
                            </div>
                        </Link>
                        <h1 className="text-white text-4xl md:text-5xl font-bold">
                            {character.name}
                        </h1>
                    </div>

                    <div className="hidden md:block absolute right-0 md:right-[100px] lg:right-[200px] top-0 h-[300px] w-[300px] lg:h-[350px] lg:w-[350px] border-4 border-white/10 shadow-lg">
                        <Image
                            src={character.image}
                            alt={character.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="mt-[30px] md:mt-[202px] w-full px-4">
                    <div className="md:ml-[228px] max-w-[1464px] flex flex-wrap justify-between items-center gap-8 md:gap-0 border-b border-gray-100 pb-12">

                        <DetailItem
                            label="Status"
                            value={character.status}
                            iconFile="people.svg"
                        />

                        <DetailItem
                            label="Species"
                            value={character.species}
                            iconFile="fingerprint.svg"
                        />

                        <DetailItem
                            label="Gender"
                            value={character.gender}
                            iconFile="face.svg"
                        />

                        <DetailItem
                            label="Origin"
                            value={character.origin.name}
                            iconFile="globe.svg"
                        />

                        <DetailItem
                            label="Location"
                            value={character.location.name}
                            iconFile="marker.svg"
                        />

                    </div>
                </div>

                <div className="w-full px-4 mt-12">
                    <div className="md:ml-[228px] max-w-[1464px]">
                        <h2 className="text-2xl font-bold text-gray-800 mb-8">Outros personagens</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {suggestions.map((sug: Character) => (
                                <Card key={sug.id} data={sug} />
                            ))}
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

function DetailItem({ label, value, iconFile }: { label: string; value: string; iconFile: string }) {
    return (
        <div className="flex flex-col items-center text-center w-[150px]">
            <div className="mb-4 relative w-12 h-12">
                <Image
                    src={`/img/${iconFile}`}
                    alt={label}
                    fill
                    className="object-contain"
                />
            </div>

            <span className="text-[#B2DA19] font-bold text-sm uppercase mb-1 tracking-wide">
        {label}
      </span>
            <span className="text-gray-600 font-bold text-lg leading-tight">
        {value}
      </span>
        </div>
    );
}