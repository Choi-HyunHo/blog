import React from "react";

interface Title {
    title: string;
}

export default function Title({ title }: Title) {
    return (
        <section className="mt-16 mb-10">
            <h2 className="font-bold text-xl sm:text-3xl font-mono">{title}</h2>
        </section>
    );
}
