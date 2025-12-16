import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#CFE071] shadow-sm flex items-center px-4 md:px-[100px] h-[86px] md:h-[140px] transition-all duration-300">
            <Link href="/" className="relative w-[200px] h-[50px] md:w-[344px] md:h-[100px]">
                <Image
                    src="/img/logo.svg"
                    alt="Rick and Morty and DTI"
                    fill
                    className="object-contain object-left"
                    priority
                />
            </Link>
        </header>
    );
}