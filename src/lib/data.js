export const featuredCars = [
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2023,
      price: 28999,
      images: ["/car1.jpg"],
      transmission: "Automatic",
      fuelType: "Gasoline",
      bodyType: "Sedan",
      mileage: 15000,
      color: "White",
      wishlisted: false,
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2023,
      price: 26499,
      images: ["/car2.jpg"],
      transmission: "Manual",
      fuelType: "Gasoline",
      bodyType: "Sedan",
      mileage: 12000,
      color: "Blue",
      wishlisted: true,
    },
    {
      id: 3,
      make: "Tesla",
      model: "Model 3",
      year: 2022,
      price: 42999,
      images: ["/car4.jpg"],
      transmission: "Automatic",
      fuelType: "Electric",
      bodyType: "Sedan",
      mileage: 8000,
      color: "Red",
      wishlisted: false,
    },
  ];
  
  export const carMakes = [
    { id: 1, name: "Hyundai", image: "/make/hyundai.png" },
    { id: 2, name: "Honda", image: "/make/honda.png" },
    { id: 3, name: "BMW", image: "/make/bmw.png" },
    { id: 4, name: "Tata", image: "/make/tata.png" },
    { id: 5, name: "Mahindra", image: "/make/mahindra.png" },
    { id: 6, name: "Ford", image: "/make/ford.png" },
  ];
  
  export const bodyTypes = [
    { id: 1, name: "SUV", image: "/body/suv.png" },
    { id: 2, name: "Sedan", image: "/body/sedan.png" },
    { id: 3, name: "Hatchback", image: "/body/hatchback.png" },
    { id: 4, name: "Convertible", image: "/body/convertable.png" },
    { id: 5, name: "Wagon", image: "/body/wagon.png"},
    { id: 6, name: "crossover", image: "/body/crossover.png"}
  ];
  
  export const faqItems = [
    {
      question: "How does the test drive booking work?",
      answer:
        "Simply find a car you're interested in, click the 'Test Drive' button, and select an available time slot. Our system will confirm your booking and provide all necessary details.",
    },
    {
      question: "Can I search for cars using an image?",
      answer:
        "Yes! Our AI-powered image search lets you upload a photo of a car you like, and we'll find similar models in our inventory.",
    },
    {
      question: "Are all cars certified and verified?",
      answer:
        "All cars listed on our platform undergo a verification process. We are a trusted dealerships and verified private seller.",
    },
    {
      question: "What happens after I book a test drive?",
      answer:
        "After booking, you'll receive a confirmation email with all the details. We will also contact you to confirm and provide any additional information.",
    },
  ];