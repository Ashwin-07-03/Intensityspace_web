import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-[#F9F9F9]">
            <Navbar />

            {/* Under Construction Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-16">
                <div className="text-center max-w-2xl mx-auto">
                    {/* Construction Icon */}
                    <div className="w-32 h-32 mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/5 rounded-none rotate-0"></div>
                        <div className="absolute inset-0 bg-[#F9F9F9] rounded-none flex items-center justify-center border-2 border-dashed border-black/20">
                            <span className="text-6xl">👷</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-black mb-4">
                        Under Construction
                    </h1>
                    <p className="text-lg text-black/50 mb-8">
                        We&apos;re working hard to bring you something amazing. This page will be ready soon!
                    </p>

                    {/* Progress Indicator */}
                    <div className="max-w-xs mx-auto">
                        <div className="flex items-center justify-between text-sm text-black/40 mb-2">
                            <span>Progress</span>
                            <span>Building...</span>
                        </div>
                        <div className="h-2 bg-black/5 rounded-none overflow-hidden">
                            <div className="h-full w-3/4 bg-gradient-to-r from-black to-black rounded-none animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
