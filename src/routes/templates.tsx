import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import CentredDescriptionComponent from "@/components/sections/centred-description";
import CircleIconsComponent from "@/components/sections/circle-icons";
import SocialNumbersComponent from "@/components/sections/social-numbers";

export const Route = createFileRoute("/templates")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      {/* header */}
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
        <span className="text-gray-400">Templates</span>
      </div>
      <CentredDescriptionComponent />
      <CircleIconsComponent />
      <SocialNumbersComponent />
    </div>
  );
}
