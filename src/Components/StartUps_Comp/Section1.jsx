// Remote images (Unsplash) to avoid local asset dependencies
const imgCollaborative = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=512&q=80";
const imgLearning = "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=512&q=80";
const imgImpact = "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=512&q=80";

import { useEffect, useRef, useState } from "react";

function Section1 (){
    const scrollRef = useRef(null);
    const trackRef = useRef(null);
    const [hProgress, setHProgress] = useState(0);
    const [indicatorX, setIndicatorX] = useState(0);
    const INDICATOR_PX = 120; // width of moving line in px

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        const handle = () => {
            const max = el.scrollWidth - el.clientWidth;
            const p = max > 0 ? el.scrollLeft / max : 0;
            setHProgress(p);
            const trackW = trackRef.current ? trackRef.current.clientWidth : 0;
            const maxX = Math.max(0, trackW - INDICATOR_PX);
            setIndicatorX(p * maxX);
        };
        handle();
        el.addEventListener('scroll', handle, { passive: true });
        window.addEventListener('resize', handle);
        return () => {
            el.removeEventListener('scroll', handle);
            window.removeEventListener('resize', handle);
        };
    }, []);

    return <section className="w-full px-6 md:px-12 lg:px-20 py-16 bg-white">
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        {/* Top banner with accent shape */}
        <div className="relative max-w-5xl m-32 mx-auto mb-12">
            <div className="absolute -top-6 -left-8 w-72 md:w-96 h-28 md:h-32 bg-gray-100 skew-x-[-20deg] rounded-md" />
            <p className="relative text-sm md:text-base font-semibold text-gray-500 mb-4 pl-4">Join the IRISEHUB Movement</p>
            <h2 className="relative text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug">
                We don’t just build businesses—we build careers that shape the future. At IRISEHUB, we offer:
            </h2>
        </div>

        {/* Horizontal sliding cards */}
        <div ref={scrollRef} className="max-w-6xl m-28 mx-auto overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">
            <div className="flex gap-12 md:gap-20 lg:gap-24 pr-6">
            {/* Card 1 */}
            <div className="snap-start shrink-0 w-[260px] md:w-[460px]">
                <div className="w-32 h-24 md:w-56 md:h-40 rounded-md overflow-hidden mb-6 shadow-sm">
                    <img src={imgCollaborative} alt="Collaborative team" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-black">
                    A collaborative<br />culture
                </h3>
                <p className="mt-4 text-gray-500 max-w-lg text-sm md:text-lg">
                    that thrives on diversity and expertise.
                </p>
            </div>

            {/* Card 2 */}
            <div className="snap-start shrink-0 w-[260px] md:w-[460px]">
                <div className="w-32 h-24 md:w-56 md:h-40 rounded-md overflow-hidden mb-6 shadow-sm">
                    <img src={imgLearning} alt="Learning and growth" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-black">
                    Continuous<br />learning & growth
                </h3>
                <p className="mt-4 text-gray-500 max-w-lg text-sm md:text-lg">
                    through mentorship and professional development.
                </p>
            </div>

            {/* Card 3 */}
            <div className="snap-start shrink-0 w-[260px] md:w-[460px]">
                <div className="w-32 h-24 md:w-56 md:h-40 rounded-md overflow-hidden mb-6 shadow-sm">
                    <img src={imgImpact} alt="Impactful work" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold leading-tight text-black">
                    Impactful work
                </h3>
                <p className="mt-4 text-gray-500 max-w-lg text-sm md:text-lg">
                    that solves global challenges.
                </p>
            </div>
            </div>
        </div>

        {/* Bottom divider */}
        {/* Horizontal progress moving line */}
        <div ref={trackRef} className="max-w-6xl mx-auto mt-12 relative h-[2px] bg-gray-300">
            <div className="absolute left-0 top-0 h-[2px] bg-black w-[120px] transition-transform duration-75" style={{ transform: `translateX(${indicatorX}px)` }} />
        </div>
    </section>
}
export default Section1