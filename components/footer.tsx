"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative bg-[#050505] pt-20 pb-10 px-4 md:px-10 overflow-hidden flex flex-col justify-between min-h-[80vh] md:min-h-[90vh] border-t border-white/5">
            <div className="w-full max-w-[98%] mx-auto flex flex-col h-full justify-between">
                
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                    <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-4 max-w-2xl">
                         <Link href="/" className="text-zinc-400 hover:text-white transition-colors text-sm md:text-lg font-medium">Home</Link>
                         <Link href="/#mission" className="text-zinc-400 hover:text-white transition-colors text-sm md:text-lg font-medium">Mission</Link>
                         <Link href="/#forge" className="text-zinc-400 hover:text-white transition-colors text-sm md:text-lg font-medium">The Forge</Link>
                         <Link href="/#join" className="text-zinc-400 hover:text-white transition-colors text-sm md:text-lg font-medium">Sync</Link>
                    </div>

                    <div className="text-zinc-500 text-sm md:text-lg font-medium text-right">
                         © {new Date().getFullYear()} FUBES STUDIO
                    </div>
                </div>

                {/* Big Text Section */}
                <div className="flex flex-col items-center justify-end flex-grow mt-20">
                    <h1 className="text-[22vw] leading-[0.8] font-black tracking-tighter text-white text-center select-none mix-blend-difference">
                        Fubes
                    </h1>
                    
                     {/* Bottom Links Section - positioned relative to the big text or at the very bottom */}
                     <div className="w-full flex flex-wrap justify-end gap-6 md:gap-12 mt-4 text-zinc-500 text-xs md:text-sm font-medium uppercase tracking-wider">
                            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
                            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                     </div>
                </div>
            </div>
        </footer>
    );
}