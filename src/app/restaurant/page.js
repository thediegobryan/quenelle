import Header from "@/components/Header";
import Searchbar from "@/components/Searchbar";
import ImageGrid from "@/components/ImageGrid";

export default function Home() {
  return (
    <div className="bg-stone-50">
      <Header />
      <Searchbar />
      <ImageGrid />
    </div>
  );
}
