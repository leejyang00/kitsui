import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export const Route = createFileRoute("/site-map")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <div className="text-[0.7rem] flex justify-center items-center text-gray-700 h-8">
        <Link
          to="/"
          className="hover:text-gray-400 transition-colors duration-200"
        >
          Home
        </Link>{" "}
        <KeyboardArrowRightRoundedIcon
          sx={{ fontSize: "10", fontWeight: "200", color: "grey.700" }}
        />{" "}
        <span className="text-gray-400">Site Map</span>
      </div>

      <div className="max-w-5xl m-auto py-20">
        <h1 className="text-3xl font-semibold">Site Map</h1>
      </div>
      {/* content */}
      <div className="grid grid-cols-3 gap-x-48 max-w-3xl m-auto pb-20 underline">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-1">
            <div className="text-lg font-semibold">Who We Are</div>
            <div className="text-sm">About Us</div>
            <div className="text-sm">Executive Leadership</div>
            <div className="text-sm">Board of Directors</div>
            <div className="text-sm">Our Founder</div>
            <div className="text-sm">The GBR Company Story</div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="text-lg font-semibold">Careers</div>
            <div className="text-sm">How We Work</div>
            <div className="text-sm">Life at GBR</div>
            <div className="text-sm">GBR Careers</div>
          </div>
        </div>
        <div className="flex flex-col gap-y-1"  >
          <div className="text-lg font-semibold">Our Brands</div>
          <div className="text-sm">Our Vision</div>
          <div className="text-sm">Our Team</div>
          <div className="text-sm">Our Work</div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-lg font-semibold">Investors</div>
          <div className="text-sm">Message from CEO</div>
          <div className="text-sm">Message from COO</div>
          <div className="text-sm">Medium-to-Long Term Strategy</div>
          <div className="text-sm">Financial Information</div>
          <div className="text-sm">Shareholder Services</div>
          <div className="text-sm">Annual and Special Meetings</div>
          <div className="text-sm">Governance</div>
        </div>
      </div>
    </div>
  );
}
