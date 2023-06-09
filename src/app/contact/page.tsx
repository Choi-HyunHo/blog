import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/ui/Title";

export default function contact() {
	return (
		<main className="flex flex-col justify-center items-center">
			<Title title={"Contact Me"} />
			<ContactForm />
		</main>
	);
}
