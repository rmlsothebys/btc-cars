import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const featuredItems = [
    {
      image: "/cars.jpg",
      title: "Luxury Cars",
      text: "Buy with Crypto",
      link: "/cars"
    },
    {
      image: "/jets.jpg",
      title: "Private Jets",
      text: "Own Your Jet in Bitcoin",
      link: "/jets"
    },
    {
      image: "/yachts.jpg",
      title: "Super Yachts",
      text: "Sail with Ethereum",
      link: "/yachts"
    },
    {
      image: "/watches.jpg",
      title: "Luxury Watches",
      text: "Timeless Assets in Crypto",
      link: "/watches"
    },
    {
      image: "/realestate.jpg",
      title: "Penthouses",
      text: "High-End Real Estate for Crypto",
      link: "/real-estate"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="w-full bg-black border-b border-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BTC-CARS</h1>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/listings" className="hover:underline">Listings</Link>
          <Link href="/sell" className="hover:underline">Sell with Crypto</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </div>
      </nav>

      <section className="relative h-[80vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="/luxury-showcase.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">BTC-CARS.com</h2>
          <p className="text-xl mb-4 max-w-2xl">
            The World's First Crypto Marketplace for Exotic Cars, Jets, Yachts, and More
          </p>
          <div className="flex w-full max-w-xl">
            <Input
              placeholder="Search cars, jets, yachts, real estate..."
              className="rounded-l-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button className="rounded-r-md" variant="secondary">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 md:px-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <Card key={index} className="bg-white text-black">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.text}</p>
                <Link href={item.link}>
                  <Button className="mt-4 w-full">Explore</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
