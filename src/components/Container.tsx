export default function Container({ children }: any) {
    return (
        <>
            <section className="flex flex-col flex-nowrap pt-24 w-full min-h-screen items-center justify-between bg-white dark:bg-zinc-900">
                <main className="flex flex-col flex-nowrap w-full max-w-screen-md items-center z-10 px-5">
                    {children}
                </main>
            </section>
        </>
    );
}
