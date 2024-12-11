import React, { useState, useEffect } from 'react';
function NavBar() {
  const [clicked, setClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      onMouseEnter={() => setIsHovered(true)} // Hover in
      onMouseLeave={() => setIsHovered(false)} // Hover out
      className={`w-full z-102 nav-header header-wrap ${
        isScrolled ? "nav-header-border" : ""
      }`}
      style={{
        // position: "relative",
        top: 0,
        backgroundColor: isScrolled ? "white" : "#020a19",
      }}
    >
      <div className="relative">
        <div className="w-88 mx-auto max-w-md-1300 ">
          <nav className="flex align-item-center justify-between navbar">
            <a href="https://www.hexnode.com/" className="nav-logo relative  ">
              <svg
                class={`fill-white w-121 nav-fill-svg ${
                  isHovered
                    ? "logo-color1"
                    : isScrolled
                    ? "logo-color1"
                    : "logo-color2 "
                }`}
                viewBox="0 0 120.9 25"
              >
                <path
                  d="M8.3 8.7c-.4-.1-1.4-.2-2.5.1-.4.1-1.2.3-2 .7V2.2C3.8 1.1 2.9.3 1.9.3S0 1.2 0 2.2V23c0 1.1.9 1.9 1.9 1.9 1.1 0 1.9-.9 1.9-1.9v-7.5c.2-.7.4-1.2.8-1.7.2-.3.9-1 2-1.1 1.6-.2 2.7.7 2.9.9 1.2 1.1 1.2 2.5 1.2 2.7v7.1c0 .9.8 1.7 1.8 1.7s1.8-.8 1.8-1.7v-7.5c0-1.5-.5-2.6-.8-3.1-.9-2.3-3-3.8-5.2-4.1zM78.2 8.5c-.3 0-.8-.1-1.3 0-2.8.2-4.8 2-5.2 2.4-2.3 2.3-2.4 5.2-2.4 5.7 0 .9.1 3.3 1.9 5.4 1.3 1.5 3.3 2.5 5.7 2.7.3 0 .6.1 1.1.1 3.4-.1 5.7-2.6 5.8-2.7.3-.3 1.9-2.4 1.9-5.4.1-4.3-3.2-7.9-7.5-8.2zm3.5 8.3c-.1 2.3-2.1 4.1-4.4 4-2.3-.1-4.2-2-4.1-4.3.1-2.3 2.1-4.1 4.4-4 2.4 0 4.2 2 4.1 4.3zM59.8 8.7c-1.5 0-2.9.4-4.1 1.2-.3-.8-1-1.3-1.9-1.3-1.1 0-2 .9-2 2v12.2c0 1.1.9 2 2 2h.4c.9 0 1.7-.7 1.7-1.7v-6.9c0-.1.1-.3.2-.6 0-.1.2-.7.3-1 .4-.9 1.1-1.4 1.3-1.5.8-.5 1.5-.6 1.7-.6.6 0 1 .1 1.3.1.2.1 1 .3 1.6.9 1 1 1.2 2.3 1.2 2.6V23c0 .2.1.7.6 1.1.6.5 1.2.5 1.3.5.9 0 1.7-.7 1.7-1.7v-7.3c-.1-.8-.3-2.1-1.1-3.4-.2-.2-2.3-3.4-6.2-3.5zM118.2 10.3c-1.9-1.5-4.1-1.6-4.4-1.6-.3 0-1.4 0-2.8.4-1.7.6-2.8 1.5-3.1 1.8-2.4 2.2-2.5 5.2-2.6 5.7 0 .7-.1 3.2 1.7 5.5 1.9 2.3 4.4 2.7 5.1 2.8 1.1.2 2.2.1 2.5 0 .5-.1 1.3-.2 2.4-.6 1.4-.6 2.3-1.4 2.9-2.1.3-.8.3-1.6-.2-2.1-.4-.4-.9-.6-1-.6-.9-.2-1.7.3-1.8.4-.2.2-.5.5-.9.7-.8.5-1.6.5-2.1.5-.4 0-1.8.1-3-.9-1.1-.8-1.5-1.8-1.7-2.2h11.7c.4-3-.6-6-2.7-7.7zm-7.4 3.1c1.1-.7 2.1-.8 2.6-.8.4 0 1.4 0 2.4.7.6.4.9.9 1.2 1.3h-7.3c.2-.4.6-.8 1.1-1.2zM38.2 16.1c1-1 1.9-2 2.9-3-1.2-1.2-2.4-2.4-3.7-3.6-.8-.8-2.1-.8-2.9 0-.8.8-.8 2.1 0 2.9l3.7 3.7zM49.1 9.1c-.8-.8-2.1-.7-2.8.1L34.5 21.5c-.8.8-.7 2.1.1 2.8.8.8 2.1.7 2.8-.1l4.3-4.5 4.4 4.4c.8.8 2.1.8 2.9 0 .8-.8.8-2.1 0-2.9l-4.4-4.5 4.6-4.8c.8-.8.7-2-.1-2.8zM101.7 0c-1.1 0-2 .9-2 2v8c-1.1-.8-2.5-1.3-3.9-1.4-.3 0-.8-.1-1.3 0-2.8.2-4.7 2-5.1 2.4-2.4 2.2-2.4 5.1-2.4 5.6 0 .9.1 3.3 1.9 5.4 1.3 1.5 3.2 2.5 5.6 2.7.3 0 .6.1 1.1.1 1.8-.1 3.2-.8 4.2-1.5.2.8 1 1.4 1.9 1.4 1.1 0 2-.9 2-2V1.9c-.1-1-1-1.9-2-1.9zm-2.3 16.8c-.1 2.4-2.1 4.3-4.5 4.2-2.4-.1-4.2-2.1-4.1-4.5.1-2.4 2.1-4.3 4.5-4.2 2.4.1 4.2 2.1 4.1 4.5zM29.3 10.4c-1.9-1.5-4.1-1.6-4.4-1.6-.3 0-1.4 0-2.8.4-1.7.6-2.8 1.5-3.1 1.8-2.4 2.2-2.5 5.2-2.6 5.7 0 .7-.1 3.2 1.7 5.5 1.9 2.3 4.4 2.7 5.1 2.8 1.1.2 2.2.1 2.5 0 .5-.1 1.3-.2 2.4-.6 1.4-.6 2.3-1.4 2.9-2.1.3-.8.3-1.6-.2-2.1-.4-.4-.9-.6-1-.6-.9-.2-1.7.3-1.8.4-.2.2-.5.5-.9.7-.8.5-1.6.5-2.1.5-.4 0-1.8.1-3-.9-1.1-.8-1.5-1.8-1.7-2.2H32c.4-3.1-.6-6-2.7-7.7zm-7.4 3.1c1.1-.7 2.1-.8 2.6-.8.4 0 1.4 0 2.4.7.6.4.9.9 1.2 1.3h-7.3c.2-.4.6-.9 1.1-1.2z"
                  class="hex__logo_st0"
                />
              </svg>
            </a>
            <div className="w-100 flex justify-start align-item-center  ml-30 justify-between-xl opacity-xl-100 nav-bar_mob-nav-sidebar-inner__8BhrY">
              <ul className="navbar-items">
                {" "}
                <li
                  className={
                    isScrolled || isHovered
                      ? "color-secondary"
                      : "color-primary"
                  }
                >
                  {" "}
                  <a href="#why-hexnode">Why HexNode</a>
                </li>
                <li
                  className={
                    isScrolled || isHovered
                      ? "color-secondary"
                      : "color-primary"
                  }
                >
                  {" "}
                  <a href="#features">Features </a>
                </li>
                <li
                  className={
                    isScrolled || isHovered
                      ? "color-secondary"
                      : "color-primary"
                  }
                >
                  {" "}
                  <a href="">Platforms </a>
                </li>
                <li
                  className={
                    isScrolled || isHovered
                      ? "color-secondary"
                      : "color-primary"
                  }
                >
                  {" "}
                  <a href="#customers">Customers </a>
                </li>
              </ul>{" "}
              <div className="btn-div">
                {" "}
                <button>14 day free trail</button>
              </div>
              <div className="mobile">
                <i
                  onClick={() => setClicked(!clicked)}
                  className={`${
                    clicked ? "fas fa-bars" : "fas fa-times"
                  } ham-close `}
                ></i>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
// function App() {
//   const customNavItems = [
//     { label: "Solutions", href: "#solutions" },
//     { label: "Pricing", href: "#pricing" },
//     { label: "About", href: "#about" },
//     { label: "Contact", href: "#contact" }
//   ];

//   const customCtaButton = {
//     text: "Get Started",
//     onClick: () => alert("Started!")
//   };

//   return (
//     <NavBar 
//       navItems={customNavItems}
//       ctaButton={customCtaButton}
//       logoUrl="https://your-custom-logo.com"
//       logoSvgPath="YOUR_CUSTOM_SVG_PATH_HERE"
//     />
//   );
// }