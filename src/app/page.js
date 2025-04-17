import CarCard from "@/components/CarCard";
import HomeSearch from "@/components/home-search";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { bodyTypes, carMakes, faqItems, featuredCars } from "@/lib/data";
import { SignedOut } from "@clerk/nextjs";
import { Calendar, Car, ChevronRight, Shield } from "lucide-react";
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
      <section className="py-12 items-center px-6 md:px-12">
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

      <section className="py-12 items-center px-6 md:px-12 bg-gray-50">
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
            {carMakes.map((make) => (
              <Link className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer" key={make.name} href={`/cars?make=${make.name}`}>
                <div className="h-16 w-auto mx-auto mb-2 relative ">
                  <Image
                    src={make.image}
                    alt={make.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="font-semibold">{make.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 items-center px-6  md:px-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center flex-col">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Wide Selection
              </h3>
              <p className="text-gray-600">
                Thousands of verified vehicles from trusted dealers and private sellers
              </p>
            </div>

            <div className="flex items-center flex-col">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Flexible test drives
              </h3>
              <p className="text-gray-600">
                Book a test drive online in minutes, with flexible schedulling options
              </p>
            </div>

            <div className="flex items-center flex-col">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Secure Process
              </h3>
              <p className="text-gray-600">
                Verified listings and secure booking process for peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 items-center px-6 md:px-12 bg-gray-50">
        <div className="container mx-automx-auto py-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Browse By Body Body-Type
            </h2>
            <Button className="flex items-center" asChild>
              <Link href={'/cars'}>
                View All<ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {bodyTypes.map((type) => (
              <Link
                className="relative group cursor-pointer"
                key={type.name}
                href={`/cars?type=${type.name}`}>
                <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <h3 className="text-white text-xl font-bold pl-4 pb-2">{type.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:px-6 px-12 bg-gray-50">
        <div className="conatiner mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                  {faq.answer}
              </AccordionContent>
            </AccordionItem>
            ))}
            
          </Accordion>
        </div>
      </section>
      <section className="py-16 text-white dotted-background">
        <div className="container mx-auto sm:px-6 px-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready To Drive Your Dream Car</h2>
          <p className="text-xl flex-col sm:flex-row justify-center gap-4">Join thousands of satified customers who found their perfect vehicles with us</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href={"/cars"}>View All Cars</Link>
            </Button>
            <SignedOut>
              <Button size="lg" asChild>
                <Link href={"/sign-up"}>
                  Sign Up Now
                </Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>
    </div>
  );
}
