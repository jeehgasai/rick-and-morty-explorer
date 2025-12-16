import Image from "next/image";
import Link from "next/link";
import Search from "./components/Search";
import Card from "./components/Card";
import { ApiResponse } from "@/types";

async function getCharacters(page: number = 1) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
    if (!res.ok) throw new Error('Erro ao buscar dados');
    return res.json();
}

export default async function Home(props: {
    searchParams?: Promise<{ page?: string }>;
}) {
    const params = await props.searchParams;
    const currentPage = Number(params?.page) || 1;
    const data: ApiResponse = await getCharacters(currentPage);

    const characters = data.results.slice(0, 8);

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans pb-10">

            <section className="relative w-full mt-[86px] md:mt-[140px]" style={{ height: '558px' }}>

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/img/hero.png"
                        alt="Paisagem Rick and Morty"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 46.09%, rgba(0, 0, 0, 0.2) 64.27%)"
                    }}
                ></div>

                <div className="absolute z-20 text-left px-4 md:px-0"
                     style={{
                         top: '160px',
                         left: 'clamp(20px, 10vw, 228px)',
                         maxWidth: '722px'
                     }}>

                    <h1 className="font-bold text-[36px] md:text-[60px] leading-[100%] mb-4 text-white drop-shadow-lg">
                        Filtro de personagens
                    </h1>

                    <p className="font-normal text-[18px] md:text-[32px] leading-[100%] text-white max-w-[600px]">
                        Confira os principais dados dos personagens de Rick and Morty, como seu nome, status e muito mais abaixo!
                    </p>
                </div>
            </section>

            <main className="flex flex-col items-center relative z-20 px-4">

                <div className="-mt-8 w-full flex justify-center mb-16 relative z-30 px-4">
                    <Search />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">
                    {characters.map((char, index) => (
                        <div key={char.id} className={index > 3 ? "hidden md:block" : "block"}>
                            <Card data={char} />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center items-center gap-8 mt-16 mb-16 w-full">
                    <Link
                        href={`/?page=${currentPage > 1 ? currentPage - 1 : 1}`}
                        className={`p-2 transition-transform hover:scale-110 ${currentPage <= 1 ? 'pointer-events-none opacity-30' : ''}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 19L8 12L15 5" stroke="#B2DA19" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>

                    <div className="flex items-center gap-4 md:gap-6 font-sans text-xl md:text-2xl font-medium text-gray-300">

                        <Link href="/?page=1" className={currentPage === 1 ? "text-[#B2DA19] font-bold scale-110" : "hover:text-gray-500"}>1</Link>

                        {currentPage > 4 && <span>...</span>}

                        {data.info.pages >= 2 && (
                            <Link href="/?page=2" className={currentPage === 2 ? "text-[#B2DA19] font-bold scale-110" : "hover:text-gray-500"}>2</Link>
                        )}
                        {data.info.pages >= 3 && (
                            <Link href="/?page=3" className={currentPage === 3 ? "text-[#B2DA19] font-bold scale-110" : "hover:text-gray-500"}>3</Link>
                        )}
                        {data.info.pages >= 4 && (
                            <Link href="/?page=4" className={currentPage === 4 ? "text-[#B2DA19] font-bold scale-110" : "hover:text-gray-500"}>4</Link>
                        )}

                        {currentPage > 4 && currentPage < data.info.pages && (
                            <>
                                <span className="text-gray-300">...</span>
                                <span className="text-[#B2DA19] font-bold scale-110">{currentPage}</span>
                            </>
                        )}

                        <span className="text-gray-300 pb-2">...</span>

                        <Link href={`/?page=${data.info.pages}`} className={currentPage === data.info.pages ? "text-[#B2DA19] font-bold scale-110" : "hover:text-gray-500"}>
                            {data.info.pages}
                        </Link>
                    </div>

                    <Link
                        href={`/?page=${currentPage < data.info.pages ? currentPage + 1 : data.info.pages}`}
                        className={`p-2 transition-transform hover:scale-110 ${currentPage >= data.info.pages ? 'pointer-events-none opacity-30' : ''}`}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 5L16 12L9 19" stroke="#B2DA19" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>

            </main>
        </div>
    );
}