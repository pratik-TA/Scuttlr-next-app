import Link from "next/link";
import React, { useState } from "react";
import st from "./header.module.jsx";
import styled from "styled-components";
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
import SampleModal from "../../components/modal/SampleModal.js";

function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState([]);
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active");
  };
  const homeData = {
    name: "Home",
    age: "937",
    company: "TA",
  };
  const infoData = {
    name: "Info",
    age: "675",
    company: "TA2",
  };
  const supportData = {
    name: "Support",
    age: "335",
    company: "TA3",
  };
  const MemberPlansData = {
    name: "Member Plans",
    age: "123",
    company: "TA4",
  };
  return (
    <>
      <st.Container className="container">
        <st.Navigator className={`${st.navBar} navbar navbar-expand-lg`}>
          <st.Brand>
            <img src={scuttlrLogo.src} alt="" />
          </st.Brand>
          <st.NavMenu>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#"
                  onClick={(e) => {
                    handleClick(e);
                    setData(homeData);
                    setOpenModal(true);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  "
                  href="#"
                  onClick={(e) => {
                    handleClick(e);
                    setData(infoData);
                    setOpenModal(true);
                  }}
                >
                  Info
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  "
                  href="#"
                  onClick={(e) => {
                    handleClick(e);
                    setData(supportData);
                    setOpenModal(true);
                  }}
                >
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#"
                  onClick={(e) => {
                    handleClick(e);
                    setData(MemberPlansData);
                    setOpenModal(true);
                  }}
                >
                  Member Plans
                </a>
              </li>
            </ul>
            <st.PrimaryButton
              onClick={() => {
                setData("this is login");
                setOpenModal(true);
              }}
            >
              Login
            </st.PrimaryButton>
          </st.NavMenu>
        </st.Navigator>
      </st.Container>
      {/* <!-- Modal --> */}
      <SampleModal
        data={data}
        openModal={openModal}
        closetoggal={setOpenModal}
      />
    </>
  );
}

export default Header;
