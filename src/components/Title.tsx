import React from "react";

interface Title {
    title: string;
}

export default function Title({ title }: Title) {
    return (
        <section className="mt-10 mb-6">
            <h2 className="font-bold text-2xl sm:text-4xl font-mono">
                {title}
            </h2>
        </section>
    );
}
