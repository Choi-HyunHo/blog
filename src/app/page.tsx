import Hero from "@/components/Hero";
import Title from "@/components/Title";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-14">
            <Hero />
            <Title title="👀 Recent Notes" />
        </main>
    );
}
