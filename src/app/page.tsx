import Hero from "@/components/Hero";
import Recent from "@/components/Recent";
import Title from "@/components/Title";

export default function Home() {
    return (
        <main className="flex flex-col justify-between">
            <Hero />
            <Title title="👀 Recent Notes" />
            <Recent />
        </main>
    );
}
