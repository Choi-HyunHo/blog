import Hero from "@/components/ui/Hero";
import Recent from "@/components/posts/Recent";
import Title from "@/components/ui/Title";
import FeaturePost from "@/components/posts/FeaturePost";

export default function Home() {
    return (
        <main className="flex flex-col justify-between">
            <Title title="🧑🏻‍💻 const = 'Choi HyunHo'" />
            <Hero />
            <Title title="🚀 Featured Notes" />
            <FeaturePost />
            <Title title="👀 Recent Notes" />
            <Recent />
        </main>
    );
}
