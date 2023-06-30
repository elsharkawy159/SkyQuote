import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import AddQuote from "../AddQuote/AddQuote.jsx";
import { useAuthContext } from "../../Context/authData.js";
import { useRouter } from "next/router.js";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const { isLogged, setIsLogged, signInRes } = useAuthContext();

  const handleLogout = () => {
    localStorage.removeItem("UserData");
    setIsLogged(false);
    router.push("/");
  };
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 330);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarClasses = `${styles.navbar} navbar navbar-expand-lg py-1 px-0 ${
    isScrolled ? "bg-light shadow fixed-top" : "bg-transparent fixed-top"
  }`;

  const liClasses = `${styles.nav_link} ${
    isScrolled ? "text-dark" : "text-light py-3"
  }`;

  return (
    <header>
      <nav className={navbarClasses}>
        <div className="container-fluid p-0 px-lg-5 px-3">
          <Link legacyBehavior href="/">
            <a
              className={`${liClasses} navbar-brand fw-bold fs-3 text-light m-0 mb-2 me-5 p-0`}
            >
              Sky Quotes
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mt-0 mb-lg-0">
              <NavItem href="/about" text="About" classes={liClasses} />
              <NavItem href="/quotes" text="Quotes" classes={liClasses} />
              <NavItem href="/contact" text="Contact Us" classes={liClasses} />
            </ul>

            <div className="d-flex align-items-center">
              {isLogged ? (
                <>
                  <AddQuote />
                  <div className="dropdown me-2">
                    <a
                      className="dropdown-toggle d-flex align-items-center hidden-arrow"
                      href="#"
                      id="navbarDropdownMenuAvatar"
                      role="button"
                      data-mdb-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                        className="rounded-circle border border-2 shadow"
                        height="40"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                      <span className={`text-light m-0 ms-2  p-0 ${liClasses}`}>
                        {JSON.parse(localStorage.getItem("UserData")).firstName}
                      </span>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          href={`/profile/${
                            JSON.parse(localStorage.getItem("UserData"))._id
                          }`}
                        >
                          <i className="fa-regular fa-user"></i> My profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="/"
                          onClick={handleLogout}
                        >
                          <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <ul className="navbar-nav">
                  <Link href={"/auth"}>
                    <button className="btn btn-primary my-2 fw-bold fs-6 mx-4">
                      Sign In
                    </button>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ href, text, classes }) => (
  <li className="nav-item">
    <Link legacyBehavior href={href}>
      <a className={classes}>{text}</a>
    </Link>
  </li>
);

export default Navbar;
