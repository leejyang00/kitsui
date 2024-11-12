import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function NavBar() {
  return (
    <div className="py-6 px-5 lg:py-8 lg:px-5 max-w-2xl m-auto font-serif ">
    <div>
        <Link to="/">
          <h1 className="text-3xl font-serif flex justify-center items-center uppercase">
            GBR Company Co
          </h1>
        </Link>
      </div>
      <div className="flex justify-between items-center text-sm pt-3">
        <Link to="/about" className="[&.active]:underline">
          Who We Are
        </Link>
        <Link to="/brands" className="[&.active]:underline">
          Our Brands
        </Link>
        <Link to="/" >
          Investors
        </Link>
        <Link to="/">
          Careers
        </Link>
      </div>
    </div>
  );
}

function RootComponent() {
  return (
    <div>
      <NavBar />
      <hr />
      <div className="p-2 max-w-4xl m-auto font-serif">
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
