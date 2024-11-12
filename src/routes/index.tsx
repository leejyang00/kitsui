import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div>
      <div className="text-xs flex justify-center items-center text-gray-500 h-8">
        Home
      </div>
    </div>
  );
}
