import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Images } from "../assets/images";
import CustomButton from "./common/Button";

// const PRODUCTS = [
//   { name: "Bank Control Layer", path: "/products/bank-control-layer" },
//   { name: "Ecosystem Operations Layer", path: "/products/ecosystem-operations-layer" },
//   { name: "Credit & Intelligence Layer", path: "/products/credit-intelligence-layer" },
//   { name: "Member Experience Layer", path: "/products/member-experience-layer" },
//   { name: "Payment Rails & Disbursals Layer", path: "/products/payment-rails-disbursals-layer" },
// ];

const cx = (...classes) => classes.filter(Boolean).join(" ");

const GlassBackground = ({ isScrolled }) => (
  <>
    <div
      aria-hidden="true"
      className={cx(
        "glass-layer-light transition-opacity duration-500",
        isScrolled ? "opacity-0" : "opacity-100"
      )}
    />

    <div
      aria-hidden="true"
      className={cx(
        "absolute inset-0 -z-10 transition-opacity duration-500",
        isScrolled ? "bg-gradient-to-r from-[#E8F2ED] via-[#FFFFFF] to-[#E8F2ED] shadow-lg opacity-100" : "opacity-0"
      )}
    />
  </>
);

const NavLink = ({ to, active, children }) => (
   <Link
    to={to}
    className={cx(
      "nav-pill",
      active ? "nav-pill-active" : "nav-pill-inactive"
    )}
  >
    {children}
  </Link>
);

const ProductDropdown = ({ isActive, isOpen, onEnter, onLeave, pathname, isScrolled }) => (
  <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <button className={cx(
  "nav-pill",
  isActive ? "nav-pill-active" : "nav-pill-inactive"
)}>
      Products
      <ChevronDown className={cx("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>

    <div
      className={cx(
        "absolute left-1/2 top-full z-50 w-96 -translate-x-1/2 pt-4 transition-all duration-150",
        isOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
      )}
    >
      <div className="dropdown-panel bg-white  border-[2px] border-[#ffffff] ">
        {PRODUCTS.map((product) => (
          <Link
  key={product.path}
  to={product.path}
  className={cx(
    "group dropdown-item rounded-xl transition-all duration-200 hover:bg-gradient-to-r from-[#DDD6F9] to-[#F3FFFA]",
    pathname === product.path && "bg-white"
  )}
>
            <span className="dropdown-item-indicator bg-[#D1CAEC]" />
            <span className="dropdown-item-dot" />
            <span className="transition-transform duration-300 group-hover:translate-x-1">{product.name}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isProductsActive = pathname.startsWith("/products");

  return (
    <div className="h-24 md:h-[110px]">
      <header className={cx("fixed inset-x-0 top-0 z-50 transition-[padding] duration-500 ease-in-out", isScrolled ? "pt-0" : "pt-5")}>
        <div className={cx("mx-auto transition-[width,max-width] duration-500 ease-in-out", isScrolled ? "w-full" : "w-[96%] max-w-7xl")}>
          {/* Bar */}
          <div
            className={cx(
              "relative flex items-center justify-between gap-4 px-5 sm:px-7 transition-[padding,border-radius,border-color] duration-500 ease-in-out",
              isScrolled ? "rounded-none border-0 py-5 sm:py-6" : "rounded-[50px] border-[3px] border-[#E7F3EA] py-3"
            )}
          >
            <GlassBackground isScrolled={isScrolled} />
            <div
              aria-hidden="true"
              className={cx(
                "pointer-events-none absolute inset-x-0 top-0 -z-10 h-px rounded-[inherit] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-500",
                isScrolled ? "opacity-100" : "opacity-0"
              )}
            />

            <Link to="/" className="flex shrink-0 items-center">
              <img
                src={Images.common.logo}
                alt="Corelink Logo"
                className="h-[22px] w-auto"
              />
            </Link>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">

              <NavLink to="/" active={pathname === "/"}  >Home</NavLink>

              <NavLink to="/company" active={pathname === "/company"}  >About</NavLink>

              <NavLink to="/product" active={pathname === "/product"}  >Product</NavLink>


             {/* <ProductDropdown  className="hidden"
                isActive={isProductsActive}
                isOpen={dropdownOpen}
                onEnter={() => setDropdownOpen(true)}
                onLeave={() => setDropdownOpen(false)}
                pathname={pathname}
                isScrolled={isScrolled}
              /> */}
 
             
            </nav>

            <div className="flex shrink-0 items-center gap-2">

              <CustomButton className={`${isScrolled ? "btn-login-scrolled" : ""}`}
                link="contact" variant='primary'
              >Contact</CustomButton>

              <button
                type="button"
                className="rounded-full bg-[#111A2E] p-2.5 text-white md:hidden"
                onClick={() => setMobileOpen((open) => !open)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={cx("overflow-hidden transition-all duration-300 ease-out md:hidden", mobileOpen ? "mt-3 max-h-[520px] opacity-100" : "max-h-0 opacity-0")}>
            <div className={cx("relative flex flex-col gap-1 p-4 transition-[border-radius] duration-500", isScrolled ? "rounded-none" : "rounded-3xl border border-white/20")}>
              <GlassBackground  />

              <Link to="/company" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link to="/product" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Product
              </Link>

              {/* <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white/50">Products</div>

              {PRODUCTS.map((product) => (
                <Link key={product.path} to={product.path} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  <span className="dropdown-item-dot mr-3 inline-block" />
                  {product.name}
                </Link>
              ))} */}

              <Link to="/contact" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Contact Us
              </Link>

              <Link to="#" className={cx("btn-login mt-2 w-full", isScrolled && "btn-login-scrolled")} onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
