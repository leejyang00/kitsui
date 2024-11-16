import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Footer() {
  return (
    <div className="bg-slate-100 px-8 lg:px-5">
      {/* top row informational page links */}

      <div className="flex flex-col lg:flex-row justify-between lg:py-12 py-8 lg:max-w-5xl m-auto">
        {/* informational page links - desktop */}
        <div className="lg:flex hidden flex-row justify-start text-[0.7rem] gap-[6rem]">
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

        {/* informational page links - mobile */}
        <div className="lg:hidden flex items-center pb-8">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold">
                CUSTOMER SERVICE
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                <div>FAQ</div>
                <div>Contact Us</div>
                <div>Shipping</div>
                <div>Returns</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-bold">
                WHO WE ARE
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                <div>FAQ</div>
                <div>Contact Us</div>
                <div>Returns</div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-bold">
                OUR INVESTORS
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-5">
                <div>FAQ</div>
                <div>Contact Us</div>
                <div>Shipping</div>
                <div>Returns</div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* social media icons */}
        <div className="flex justify-center lg:justify-end gap-5">
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
      <div className="flex lg:flex-row flex-col-reverse gap-5 lg:gap-0 justify-between items-center lg:py-12 py-8 max-w-5xl m-auto">
        <div className="font-serif text-xs">© GBR Company Co.</div>
        <div className="flex justify-between items-center gap-10 text-[0.6rem]">
          <Link to="/site-map" className="hover:underline">
            Site Map
          </Link>
          <span className="hover:underline">Privacy Policy</span>
          <span className="hover:underline">Terms and Conditions</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
