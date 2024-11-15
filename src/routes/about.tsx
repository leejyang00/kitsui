import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div>
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
        <span className="text-gray-400">Who We Are</span>
      </div>
    </div>
  );
}
