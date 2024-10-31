"use client";
import React from "react";
import {
    FaCalendarAlt,
    FaEnvelope,
    FaFacebookF,
    FaHome,
    FaImages,
    FaInstagram,
    FaUtensils
} from 'react-icons/fa';
import { FloatingDock } from "./ui/floating-dock";

const FloatingNav = () => {
  const links = [
    {
      title: "Home",
      icon: <FaHome className="w-full h-full text-neutral-300" />,
      href: "#home",
    },
    {
      title: "Book Now",
      icon: <FaCalendarAlt className="w-full h-full text-neutral-300" />,
      href: "#booking",
    },
    {
      title: "Venues",
      icon: <FaImages className="w-full h-full text-neutral-300" />,
      href: "#venues",
    },
    {
      title: "Catering",
      icon: <FaUtensils className="w-full h-full text-neutral-300" />,
      href: "#catering",
    },
    {
      title: "Contact",
      icon: <FaEnvelope className="w-full h-full text-neutral-300" />,
      href: "#contact",
    },
    {
      title: "Instagram",
      icon: <FaInstagram className="w-full h-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "Facebook",
      icon: <FaFacebookF className="w-full h-full text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <FloatingDock
      items={links}
      className="z-50"
      mobileClassName="translate-y-20"
    />
  );
};

export default FloatingNav; 