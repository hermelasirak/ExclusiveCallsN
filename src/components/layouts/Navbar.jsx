import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
    Sheet, 
    SheetContent, 
    SheetHeader, 
    SheetTitle, 
    SheetTrigger 
} from "../ui/sheet";
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import Container from "./Container";
import Logo from "@/assets/Logo.png"
import { Menu } from "lucide-react";

const navLinks = [
    {name: "Home", path: "/"},
    {name: "Services", path: "/services"},
    {name: "Solutions", path: "/solutions"},
    {name: "Pricing", path: "/pricing"},
    {name: "Testimonials", path: "/testimonials"},
    {name: "Contact", path: "/contact"},
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSheetOpen, setSheetOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY>window.innerHeight * 0.1){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
                ? 'bg-[hsl(var(--primary-blue))]/98 py-3 shadow-2xl'
                : 'bg-[hsl(var(--primary-blue))]/95 py-5'
        } backdrop-blur-xl border-b border-accent/20`}
    >
        <Container className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex justify-between w-full items-center lg:hidden">
            <Link to="/" className="mr-6 lg:hidden">
              <img src={Logo} alt="Ecalls" className="h-8 w-auto" />
            </Link>

            <div>
              <Button onClick={() => setContactDialogOpen(true)}>
                Contact Us
              </Button>
            </div>

            <Sheet
              variant="temporary"
              open={isSheetOpen}
              onOpenChange={setSheetOpen}
            >
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <img src={Menu} alt="" className="h-6 w-6 p-1" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full h-full">
                <SheetHeader>
                  <SheetTitle>
                    <a href="/" className=" ">
                      <img src={Logo} alt="" />
                    </a>
                  </SheetTitle>
                </SheetHeader>

                <div className="mt-12 flex justify-center">
                  <ul className="space-y-2 w-full flex flex-col justify-center items-center">
                    {navLinks.map((item, idx) =>
                      item.subLinks ? (
                        <li key={idx} className="relative">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                className="w-full text-muted-foreground border-none"
                                variant="ghost"
                              >
                                {item.name}
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white shadow-lg rounded-md">
                              {item.subLinks.map((subLink, subIdx) => (
                                <DropdownMenuItem key={subIdx} asChild>
                                  <Link
                                    to={subLink.path}
                                    onClick={() => setSheetOpen(false)} // Close the Sheet
                                    className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-md"
                                  >
                                    {subLink.name}
                                  </Link>
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </li>
                      ) : (
                        <li key={idx}>
                          <Button
                            className={`w-full text-muted-foreground ${
                              location.pathname === item.path
                                ? "font-bold text-main"
                                : ""
                            }`}
                            variant="ghost"
                            onClick={() => {
                              setSheetOpen(false); // Close the Sheet
                              window.location.href = item.path;
                            }}
                          >
                            {item.name}
                          </Button>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="justify-between items-center w-full hidden lg:flex">
            <Link to="/" className="mr-6 hidden lg:flex">
              <img src={Logo} alt="Exclusive Calls" className="h-8 w-auto" />
            </Link>

            <nav className="hidden lg:flex gap-4">
              {navLinks.map((link) =>
                link.subLinks ? (
                  <div key={link.name} className="relative group">
                    <Link
                      to={link.path}
                      className={`inline-block px-4 py-6 text-sm font-medium cursor-pointer ${
                        location.pathname.includes("services")
                          ? "text-main font-bold border-b-2 border-black"
                          : "text-muted-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <ul className="absolute hidden group-hover:block bg-white px-2 shadow-lg py-4 rounded-md w-64">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name}>
                          <Link
                            to={subLink.path}
                            className="block px-4 py-3 text-sm hover:bg-gray-100 hover:text-main rounded-2xl"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`inline-block w-max px-4 py-6 text-sm font-medium ${
                      location.pathname === link.path
                        ? "text-main font-bold border-b-2 border-black"
                        : "text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </nav>

            <div>
              <Button onClick={() => setContactDialogOpen(true)}>
                Contact Us
              </Button>
            </div>
          </div>

        </Container>
    </div>
  )
}

export default Navbar