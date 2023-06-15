import React from "react";

interface Title {
    title: string;
}

export default function Title({ title }: Title) {
    return (
        <section className="mt-10 mb-6">
            <h1 className="font-bold text-2xl sm:text-3xl font-mono">
                {title}
            </h1>
        </section>
    );
}
