export async function sendContactEmail(email: {
    email: string;
    subject: string;
    message: string;
}) {
    const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(email),
        headers: {
            "Content-Type": "application/json",
        },
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Server request failed ❌");
    }

    return data;
}
