import BlogList from "./_components/BlogList";
import JumboTron from "./_components/JumboTron";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <JumboTron />
      <BlogList />
    </main>
  );
}
