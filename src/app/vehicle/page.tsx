import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VehiclePage() {
    return (
        <main className="min-h-screen bg-[#FFFDF8]">
            <Navbar />

            {/* Under Construction Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-16">
                <div className="text-center max-w-2xl mx-auto">
                    {/* Construction Icon */}
                    <div className="w-32 h-32 mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-cyan-100 rounded-3xl rotate-6"></div>
                        <div className="absolute inset-0 bg-[#FFFDF8] rounded-3xl flex items-center justify-center border-2 border-dashed border-sky-300">
                            <span className="text-6xl">🛠️</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-amber-950 mb-4">
                        Under Construction
                    </h1>
                    <p className="text-lg text-amber-900/50 mb-8">
                        We&apos;re working hard to bring you something amazing. This page will be ready soon!
                    </p>

                    {/* Progress Indicator */}
                    <div className="max-w-xs mx-auto">
                        <div className="flex items-center justify-between text-sm text-amber-900/40 mb-2">
                            <span>Progress</span>
                            <span>Building...</span>
                        </div>
                        <div className="h-2 bg-sky-100 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
