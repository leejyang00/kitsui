import { Link } from "@tanstack/react-router";

function NavBar() {
  return (
    <div className="hidden lg:flex flex-col py-4 px-3 max-w-3xl m-auto font-serif">
      <div>
        <Link to="/">
          <h1 className="text-2xl font-serif flex justify-center items-center uppercase">
            GBR Company Co.
          </h1>
        </Link>
      </div>
      <div className="flex justify-between items-center text-sm pt-3">
        <Link to="/about" className="[&.active]:underline hover:underline">
          Who We Are
        </Link>
        <Link to="/brands" className="[&.active]:underline hover:underline">
          Our Brands
        </Link>
        <Link className="hover:underline">Investors</Link>
        <Link className="hover:underline">Careers</Link>
      </div>
    </div>
  );
}

export default NavBar;
