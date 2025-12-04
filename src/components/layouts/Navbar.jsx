import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import Container from "./Container";
import Logo from "@/assets/Logo.png";
import { Menu, MoveRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Solutions", path: "/solutions" },
  { name: "Pricing", path: "/pricing" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contactus" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // fixed bar that just centers the “pills”
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <Container className="flex items-center justify-between gap-4">
        {/* LEFT: logo pill */}
        <Link
          to="/"
          className="
            inline-flex items-center rounded-full
            bg-white/5 border border-white/15
            px-5 py-3 shadow-lg shadow-black/30
            backdrop-blur-xl
          "
        >
          <img src={Logo} alt="Exclusive Calls" className="h-8 w-auto" />
        </Link>

        {/* RIGHT: nav pill */}
        <div
          className={`
            flex items-center justify-between gap-3 h-15
            rounded-full border border-white/15
            px-3 py-1
            backdrop-blur-xl
            transition-all duration-300
            ${scrolled ? "bg-slate-900/70 shadow-lg shadow-black/40" : "bg-slate-900/60"}
          `}
        >
          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 px-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative text-sm font-medium px-3 py-2
                    transition-colors duration-200
                    ${isActive ? "text-white" : "text-slate-200/80 hover:text-white"}
                  `}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-1 h-[2px] rounded-full bg-[hsl(var(--accent-orange))]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link to='/contactus'>
            <Button
              className="
                hidden md:inline-flex
                rounded-full px-5 py-2 text-sm font-semibold
                bg-gradient-to-r from-[hsl(var(--accent-orange))] to-[hsl(var(--accent-gold))]
                text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                hover:brightness-110
              "
            >
              Get Started Now
              <MoveRight/>
            </Button>
          </Link>

          {/* Mobile: CTA + menu icon */}
          <div className="flex items-center gap-2 md:hidden">
            <Link to='/contactus'>
              <Button
                className="
                  rounded-full px-4 py-2 text-xs font-semibold
                  bg-gradient-to-r from-[hsl(var(--accent-orange))] to-[hsl(var(--accent-gold))]
                  text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                "
              >
                Get Started
                <MoveRight/>
              </Button>
            </Link>

            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/30 bg-slate-900/60 text-white"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-slate-950 text-white">
                <SheetHeader>
                  <SheetTitle>
                    <Link to="/" onClick={() => setSheetOpen(false)} className="inline-flex items-center gap-2">
                      <img src={Logo} alt="Exclusive Calls" className="h-8 w-auto" />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="mt-8 flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <button
                        key={link.name}
                        className={`
                          w-full text-left px-4 py-3 rounded-xl text-sm font-medium
                          transition-colors
                          ${isActive ? "bg-white/10 text-white" : "text-slate-200 hover:bg-white/5"}
                        `}
                        onClick={() => {
                          setSheetOpen(false);
                          window.location.href = link.path;
                        }}
                      >
                        {link.name}
                      </button>
                    );
                  })}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
