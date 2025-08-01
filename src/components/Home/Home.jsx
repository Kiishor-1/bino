import Empower from "./Empower";
import Explore from "./Explore";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Explore />
            <Empower />
            <Testimonials />
            <Footer />
        </div>
    )
}
