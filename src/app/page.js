import CarCard from "@/components/CarCard";
import HomeSearch from "@/components/home-search";
import { Button } from "@/components/ui/button";
import { carMakes, featuredCars } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl mb-4 gradient-title">Find Your Dream Car With CoreDrive</h1>
            <p className="text-gray-300">
              Advanced Car Search and Test Drive From Thousands Of options Powered By Ai
            </p>
          </div>

          <HomeSearch />
        </div>
      </section>
      <section className="py-12 items-center  px-12">
        <div className="container mx-automx-auto py-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Featured Cars
            </h2>
            <Button className="flex items-center" asChild>
              <Link href={'/cars'}>
                View All<ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 items-center px-12 bg-gray-50">
        <div className="container mx-automx-auto py-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Browse By Make
            </h2>
            <Button className="flex items-center" asChild>
              <Link href={'/cars'}>
                View All<ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            { carMakes.map((make) => (
               <Link className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer" key={make.name} href={`/cars?make=${make.name}`}>
               <div className="h-16 w-auto mx-auto mb-2 relative">
                  <Image 
                    src={make.image}
                    alt={make.name}
                    fill
                    style={{objectFit: 'contain'}}
                  />
                  <p className="text-md text-gray-900">{make.name}</p>
               </div>
                </Link>
            ))} 
          </div>
        </div>
      </section>

    </div>
  );
}
