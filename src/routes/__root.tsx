import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Route = createRootRoute({
  component: RootComponent,
});

function NavBar() {
  return (
    <div className="py-6 px-2 lg:py-4 lg:px-3 max-w-3xl m-auto font-serif">
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

function Footer() {
  return (
    <div className="bg-slate-100">
      {/* top row informational page links */}

      <div className="flex justify-between py-12 max-w-5xl m-auto">
        {/* informational page links */}
        <div className="flex flex-row justify-start text-[0.7rem] gap-[6rem]">
          {/* first col */}
          <div className="flex flex-col gap-5">
            <div className="font-bold pb-2">CUSTOMER SERVICE</div>
            <div>FAQ</div>
            <div>Contact Us</div>
            <div>Shipping</div>
            <div>Returns</div>
          </div>
          {/* second col */}
          <div className="flex flex-col gap-5">
            <div className="font-bold pb-2">WHO WE ARE</div>
            <div>FAQ</div>
            <div>Contact Us</div>
            <div>Returns</div>
          </div>
          {/* third col */}
          <div className="flex flex-col gap-5">
            <div className="font-bold pb-2">OUR INVESTORS</div>
            <div>FAQ</div>
            <div>Contact Us</div>
            <div>Shipping</div>
            <div>Returns</div>
          </div>
        </div>

        {/* social media icons */}
        <div className="flex justify-end gap-5">
          <div>
            <FacebookIcon sx={{ fontSize: "1.3rem" }} />
          </div>
          <div>
            <XIcon sx={{ fontSize: "1.3rem" }} />
          </div>
          <div>
            <InstagramIcon sx={{ fontSize: "1.3rem" }} />
          </div>
          <div>
            <LinkedInIcon sx={{ fontSize: "1.3rem" }} />
          </div>
          <div>
            <YouTubeIcon sx={{ fontSize: "1.3rem" }} />
          </div>
        </div>
      </div>
      {/* bottom row policies */}
      <div className="flex justify-between items-center py-12 max-w-5xl m-auto">
        <div className="font-serif text-xs">© GBR Company Co.</div>
        <div className="flex justify-between items-center gap-10 text-[0.6rem]">
          <Link to="/site-map" className="hover:underline">
            Site Map
          </Link>
          <span className="hover:underline">Privacy Policy</span>
          <span className="hover:underline">Terms and Conditions</span>
          <span className="hover:underline">Social Media Policy</span>
          <span className="hover:underline">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

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
