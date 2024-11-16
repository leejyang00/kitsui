import Footer from "@/components/shared/footer";
import MobileNavBar from "@/components/shared/MobileNavBar";
import NavBar from "@/components/shared/navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <NavBar />
      <MobileNavBar />
      <hr />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  );
}
