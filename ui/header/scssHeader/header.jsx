import Link from "next/link";
import React from "react";
import st from "./header.module.scss";
import scuttlrLogo from "../../assets/Images/logos/scuttlr-Logo.svg";
import en from "../../assets/Images/flags/en.png";
import ch from "../../assets/Images/flags/ch.png";
import da from "../../assets/Images/flags/da.png";
import es from "../../assets/Images/flags/es.png";
import fi from "../../assets/Images/flags/fi.png";
import fr from "../../assets/Images/flags/fr.png";
import ko from "../../assets/Images/flags/ko.png";
import ne from "../../assets/Images/flags/ne.png";
import usd from "../../assets/Images/icon/usd.png";
import gbp from "../../assets/Images/icon/gbp.png";
import eup from "../../assets/Images/icon/eup.png";

function Header() {
  return (
    <>
      <div className="container">
        <navigator className={`${st.navBar}`}>
          <div className="brandWrepper">
            <img src={scuttlrLogo.src} alt="" />
          </div>
          <div className="menuWrepper">
            <nav class="navbar navbar-expand-lg">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a
                      class={`${st.navLink} nav-link dropdown active`}
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  {/*  */}
                  <li class="nav-item">
                    <a
                      class={`${st.navLink} nav-link dropdown dropdown-toggle`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Info
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          FAQ’s
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*  */}
                  <li class="nav-item">
                    <a class={`${st.navLink} nav-link`} href="#">
                      Support
                    </a>
                  </li>
                  {/*  */}
                  <li class="nav-item">
                    <a class={`${st.navLink} nav-link`} href="#">
                      Member Plans
                    </a>
                  </li>
                </ul>
                <ul class={`${st.lateNav} navbar-nav `}>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={en.src} alt="" height={"30px"} />{" "}
                      <span>EN</span>
                    </a>
                    <ul class={`${st.dropdownMenu} dropdown-menu `}>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={en.src} alt="" height={"30px"} />{" "}
                          <span>EN</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={en.src} alt="" height={"30px"} />{" "}
                          <span>EN</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={en.src} alt="" height={"30px"} />{" "}
                          <span>EN</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={en.src} alt="" height={"30px"} />{" "}
                          <span>EN</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={en.src} alt="" height={"30px"} />{" "}
                          <span>EN</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={en.src} alt="" height={"30px"} />{" "}
                          <span>EN</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={en.src} alt="" height={"30px"} />{" "}
                          <span>EN</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={usd.src} alt="" height={"20px"} />
                      <span>USD</span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={usd.src} alt="" height={"20px"} />
                          <span>USD</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={usd.src} alt="" height={"20px"} />
                          <span>USD</span>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <img src={usd.src} alt="" height={"20px"} />
                          <span>USD</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </navigator>
      </div>
    </>
  );
}

export default Header;
