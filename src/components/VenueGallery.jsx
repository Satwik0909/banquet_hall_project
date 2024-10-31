"use client";
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { Card, Carousel } from './ui/apple-cards-carousel';

const venues = [
  {
    name: "Grand Ballroom Experience",
    description: "Our flagship venue with state-of-the-art facilities",
    details: "Perfect for grand weddings and corporate events with luxurious amenities and premium services",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    capacity: "Capacity: Up to 500 guests",
    price: "$5000/event",
    gallery: [
      {
        category: "Main Hall",
        title: "Spacious Grand Ballroom",
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
        content: (
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 rounded-3xl">
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Luxurious Space for Your Events
              </span>
              {" "}
              Our Grand Ballroom features crystal chandeliers, premium sound systems,
              and state-of-the-art lighting to create the perfect ambiance for your event.
            </p>
          </div>
        ),
      },
      {
        category: "Dining Area",
        title: "Premium Dining Experience",
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
        content: (
          <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 rounded-3xl">
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Elegant Dining Setup
              </span>
              {" "}
              Accommodates up to 500 guests with premium table settings and
              professional catering services.
            </p>
          </div>
        ),
      },
    ],
  },
  // Add similar gallery arrays for other venues...
];

const VenueGallery = () => {
  return (
    <section id="venues" className="py-20 px-4">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Explore Our Venues
      </h2>
      
      {/* 3D Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {venues.map((venue) => (
          <CardContainer key={venue.name} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {venue.name}
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="max-w-sm mt-2 text-sm text-neutral-500 dark:text-neutral-300"
              >
                {venue.description}
              </CardItem>
              
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={venue.image}
                  className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
                  alt={venue.name}
                />
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="80"
                className="mt-4 text-sm text-neutral-500 dark:text-neutral-300"
              >
                {venue.details}
              </CardItem>

              <div className="flex items-center justify-between mt-8">
                <CardItem
                  translateZ={20}
                  className="px-4 py-2 text-xs font-bold text-white rounded-xl bg-black/90 dark:bg-white/90 dark:text-black"
                >
                  {venue.capacity}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl dark:bg-white dark:text-black"
                >
                  Book for {venue.price}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Detailed Gallery Carousels */}
      {venues.map((venue) => (
        <div key={venue.name} className="max-w-7xl mx-auto mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 pl-4">
            Discover {venue.name}
          </h3>
          <Carousel items={venue.gallery.map((item, index) => (
            <Card key={item.src} card={item} index={index} />
          ))} />
        </div>
      ))}
    </section>
  );
};

export default VenueGallery;