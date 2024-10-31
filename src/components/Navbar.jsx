"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="fixed top-0 inset-x-0 max-w-7xl mx-auto z-50">
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Venues">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#grand-ballroom">Grand Ballroom</HoveredLink>
            <HoveredLink href="#crystal-hall">Crystal Hall</HoveredLink>
            <HoveredLink href="#garden-terrace">Garden Terrace</HoveredLink>
            <HoveredLink href="#all-venues">View All Venues</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Wedding Packages"
              href="#wedding"
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
              description="Complete wedding planning and coordination services."
            />
            <ProductItem
              title="Corporate Events"
              href="#corporate"
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
              description="Professional settings for your business events."
            />
            <ProductItem
              title="Special Celebrations"
              href="#celebrations"
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
              description="Birthday parties, anniversaries, and special occasions."
            />
            <ProductItem
              title="Catering Services"
              href="#catering"
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
              description="Customized menus and professional catering."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#basic">Basic Package</HoveredLink>
            <HoveredLink href="#premium">Premium Package</HoveredLink>
            <HoveredLink href="#luxury">Luxury Package</HoveredLink>
            <HoveredLink href="#custom">Custom Quote</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#booking">Book Now</HoveredLink>
            <HoveredLink href="#support">Support</HoveredLink>
            <HoveredLink href="#locations">Locations</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Navbar; 