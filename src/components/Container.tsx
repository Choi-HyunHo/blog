export default function Container({ children }: any) {
    return (
        <>
            <section className="flex flex-col flex-nowrap w-full min-h-screen items-center justify-between bg-white dark:bg-[#121212]">
                <main className="flex flex-col flex-nowrap w-full max-w-screen-md items-center px-5">
                    {children}
                </main>
            </section>
        </>
    );
}
