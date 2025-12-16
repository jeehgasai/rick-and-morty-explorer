import Image from "next/image";
import Link from "next/link";
import { Character } from "@/types";

interface CardProps {
    data: Character;
}

export default function Card({ data }: CardProps) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col group h-fit">
            <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image
                    src={data.image}
                    alt={data.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-5 flex flex-col items-center">
                <h2 className="text-xl font-bold text-gray-900 truncate mb-1 w-full text-left">
                    {data.name}
                </h2>
                <p className="text-xs text-gray-400 mb-2 truncate w-full text-left">
                    Cidade dos Ricks
                </p>

                <div className="w-full max-h-0 opacity-0 group-hover:max-h-[250px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                    <div className="pt-2 flex flex-col gap-4">

                        <div className="flex justify-between items-start text-xs text-gray-500 w-full">
                            <div className="flex flex-col items-start">
                                <span className="font-bold text-gray-800 text-xs mb-1">Status</span>
                                <span>{data.status}</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="font-bold text-gray-800 text-xs mb-1">Espécie</span>
                                <span>{data.species}</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="font-bold text-gray-800 text-xs mb-1">Gênero</span>
                                <span>{data.gender}</span>
                            </div>
                        </div>

                        <Link href={`/character/${data.id}`}>
                            <button
                                className="bg-[#00B5CC] text-white font-bold text-sm hover:bg-cyan-600 transition-all flex items-center justify-center mx-auto whitespace-nowrap"
                                style={{
                                    width: '182px',
                                    height: '33px',
                                    borderRadius: '40px',
                                    paddingTop: '4px',
                                    paddingBottom: '4px',
                                    paddingLeft: '28px',
                                    paddingRight: '28px',
                                    gap: '12px'
                                }}
                            >
                                Ver mais sobre
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}