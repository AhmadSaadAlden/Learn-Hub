export default function CoursesLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
        <section className="min-h-screen bg-[var(--bg-layout-auth)]">
            {children}
        </section>
    );
}