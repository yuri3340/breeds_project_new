import axios from "axios";
import FavoriteList from "@/components/FavoriteList";

export const metadata = {
    title: "Favorites | Dog Breeds",
};

async function getFavorites() {
 return [
  {
    id: "1", 
    name: "Golden Retriever",
    description: "Friendly and tolerant dog.",
    life: { max: 15, min: 10 },
  },
  {
    id: "2",
    name: "Pomeranian",
    description: "Small but spirited dog.",
    life: { max: 16, min: 12 },
  },
];

}


export default async function FavoritesPage() {
    const favorites = await getFavorites();

    return (
        <div className="min-h-screen w-full bg-gray-50 text-gray-800">

            <section className="max-w-4xl mx-auto px-4 py-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-700 mb-2">❤️ Favorite Breed List</h1>
                    <p className="text-gray-600 text-base">
                        Your favorite dog breeds!
                    </p>
                </div>
                <FavoriteList favorites={favorites} />
            </section>
        </div>
    );
}

