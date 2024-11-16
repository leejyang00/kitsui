import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div>
      <NavBar />
      <hr />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </div>
  );
}
