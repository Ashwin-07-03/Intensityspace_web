import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LotusAccent } from "@/components/IndianPatterns";

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <section className="min-h-screen flex flex-col items-center justify-center px-8 pt-16">
                <div className="text-center max-w-2xl mx-auto">
                    <div className="w-24 h-24 mx-auto mb-8 text-saffron-gold/40">
                        <LotusAccent className="w-full h-full" />
                    </div>
                    <p className="font-hindi text-saffron-gold/50 text-sm tracking-widest mb-2">जल्द आ रहा है</p>
                    <h1 className="text-4xl md:text-5xl font-sans font-bold text-charcoal mb-4">Under Construction</h1>
                    <p className="text-lg text-charcoal/50 mb-8">We&apos;re building India&apos;s finest space team. Career opportunities coming soon!</p>
                    <div className="max-w-xs mx-auto">
                        <div className="flex items-center justify-between text-sm text-charcoal/40 mb-2"><span>Progress</span><span>Building...</span></div>
                        <div className="h-2 bg-charcoal/5 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-gradient-to-r from-saffron-gold to-saffron-light rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
