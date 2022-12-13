import React from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import PlayStore from "../../assets/img/playStore.svg";
import AppleStore from "../../assets/img/appleStore.svg";
import MobileImage from "../../assets/img/mobileImage.svg";
import st from './AboutUs.module.scss'

function AboutUs() {
  return (
    <div className="container">
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
        <div>video</div>

        {/* 2 */}
        <div>
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
        <div>
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
      <div className={`${st.downloanApp}`}>
        {/* left  */}
        <div className={`${st.leftdownloanApp}`}>
          <p>Download Our App</p>
          <h1>App is available for free on app store</h1>
          <span>
            Lorem ipsum dolor sit amet, con sectetur adipiscing elit. The
            vestibul um sit turpis lectus felis faucibus.
          </span>
          <div>
            <img src={PlayStore.src} alt="playstore" />
            <img src={AppleStore.src} alt="applestore" />
          </div>
        </div>

        {/* right  */}
        <div className={`${st.rightdownloanApp}`}>
          <img src={MobileImage.src} alt="mobile image" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
