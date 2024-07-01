export default function TrendingSection() {
    return (
        <section className="trending-section">
            <h2 className="section-text">
                Trending
            </h2>

            <div className="flex flex-wrap gap-x-8 gap-y-16">
                {["Apple IPhone 15", "Book", "Sneakers"].map((item) => (
                    <div>{item}</div>
                ))}
            </div>
        </section>
    );
}