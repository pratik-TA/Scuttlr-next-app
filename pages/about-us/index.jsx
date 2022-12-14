import React from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import PlayStore from "../../assets/img/playStore.svg";
import AppleStore from "../../assets/img/appleStore.svg";
import MobileImage from "../../assets/img/mobileImage.svg";
import st from "./AboutUs.module.scss";
import Link from "next/link";

function AboutUs() {
  return (
    <div className={`${st.aboutUs} container`}>
      <BreadCrumbs />
      <h2>How It Works</h2>
      <div className={`${st.desc}`}>
        {/* 1 */}
        <div>
          <p>
            We work together every day to keep our promise to users to provide
            the most complete travel experience possible through
            industry-leading mobile and desktop solutions. We put our customers
            first with user-friendly products that offer the widest variety of
            hotels and flights.We work together every day to keep our promise to
            users to provide the most comple
          </p>

          <p>
            We put our customers first with user-friendly products that offer
            the widest variety of hotels and flights.
          </p>
        </div>

        {/* 2 */}
        <div>
          <p>
            We work together every day to keep our promise to users to provide
            the most complete travel experience possible through
            industry-leading mobile and desktop solutions. We put our customers
            first with user-friendly products that offer the widest variety of
            hotels and flights.We work together every day to keep our promise to
            users to provide the most comple
          </p>

          <p>
            We put our customers first with user-friendly products that offer
            the widest variety of hotels and flights.
          </p>
        </div>
      </div>

      <div className={`${st.videoContainer}`}>
        {/* 1 */}
        <div className={`${st.video}`}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ucq1sLjLVSA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        {/* 2 */}
        <div className={`${st.videoDesc}`}>
          <h2>Our team</h2>
          <p>
            We work together every day to keep our promise to users to provide
            the most complete travel experience possible through
            industry-leading mobile and desktop solutions. We put our customers
            first with user-friendly products that offer the widest variety of
            hotels and flights.We work together every day to keep our promise to
            users to provide the most comple
          </p>

          <p>
            We put our customers first with user-friendly products that offer
            the widest variety of hotels and flights.
          </p>
        </div>
      </div>

      <div>
        <h2>Why Us?</h2>
        <div className={`${st.whyUs}`}>
          <div>
            <p>
              We work together every day to keep our promise to users to provide
              the most complete travel experience possible through
              industry-leading mobile and desktop solutions. We put our
              customers first with user-friendly products that offer the widest
              variety of hotels and flights.We work together every day to keep
              our promise to users to provide the most comple
            </p>

            <p>
              We put our customers first with user-friendly products that offer
              the widest variety of hotels and flights.
            </p>
          </div>

          <div>
            <p>
              We work together every day to keep our promise to users to provide
              the most complete travel experience possible through
              industry-leading mobile and desktop solutions. We put our
              customers first with user-friendly products that offer the widest
              variety of hotels and flights.We work together every day to keep
              our promise to users to provide the most comple
            </p>

            <p>
              We put our customers first with user-friendly products that offer
              the widest variety of hotels and flights.
            </p>
          </div>
        </div>
      </div>

      <div className={`${st.quotePara}`}>
        <div className={`${st.quote}`}>
          {/* icon */}
          <h5>
            We have aided millions of tourists in planning wonderful journeys.
            We are also prepared to assist you.
          </h5>
        </div>

        <div>
          <p>
            We work together every day to keep our promise to users to provide
            the most complete travel experience possible through
            industry-leading mobile and desktop solutions. We put our customers
            first with user-friendly products that offer the widest variety of
            hotels and flights.We work together every day to keep our promise to
            users to provide the most comple
          </p>

          <p>
            We put our customers first with user-friendly products that offer
            the widest variety of hotels and flights.
          </p>
        </div>
      </div>

      <p>Blog</p>

      <h2>Our Recent Blog</h2>
      <div>top 3 blog list</div>

      {/* download app  */}
      <div className={`${st.downloandApp}`}>
        {/* left  */}
        <div className={`${st.leftdownloandApp}`}>
          <p>Download Our App</p>
          <h1>App is available for free on app store</h1>
          <span>
            Lorem ipsum dolor sit amet, con sectetur adipiscing elit. The
            vestibul um sit turpis lectus felis faucibus.
          </span>
          <div className={`${st.downloandIcon}`}>
            {/* <img src={PlayStore.src} alt="playstore" />
            <img src={AppleStore.src} alt="applestore" /> */}
            <Link href="https://www.google.com/" target="_blank">
              <img src={PlayStore.src} alt="playstore" />
            </Link>
            <Link href="https://www.google.com/" target="_blank">
              <img src={AppleStore.src} alt="applestore" />
            </Link>
          </div>
        </div>
        {/* right  */}
        <div className={`${st.rightdownloandApp}`}>
          <img src={MobileImage.src} alt="mobile image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
