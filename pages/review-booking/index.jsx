import React, { useState } from "react";
import Input from "../../components/form/input/Input";
import Button from "../../components/form/button/Button";
import { useRouter } from "next/navigation";
import AddGuest from "../../components/basic-components/AddGuest";
import LeftArrow from "../../assets/icon/leftArrow.svg";
import st from "./ReviewBooking.module.scss";

function ReviewBooking() {
  const [promocode, setPromocode] = useState("");

  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
  };
  return (
    <div className="container">
      <h3 onClick={() => router.back()}>
        <img src={LeftArrow.src} alt="left arrow" />
        <span>Review Your Booking</span>
      </h3>
    <div className={`${st.priceContainer}`}>
      {/* left  */}
      <div className={`${st.leftpriceContainer}`}>
        {/* card  */}
        <div>card</div>

        {/* duration */}
        <div className={`${st.checkContainer}`}>
          {/* 1 */}
          <div>
            <span>Check In</span>
            <h5>Mon, 05 Dec 2022</h5>
            <p>02:00 PM</p>
          </div>

          {/* 2 */}
          <div>
            <span>Check Out</span>
            <h5>Wed, 07 Dec 2022</h5>
            <p>12:00 PM</p>
          </div>

          {/* 3 */}
          <div>
            <span>Guest</span>
            <h5>1 night, 2 adults</h5>
            <p>1 Nights</p>
          </div>
        </div>

        {/* room and person details  */}
        <div className={`${st.roomDetails}`}>
          <h5>1 night, 2 adults</h5>
          <div className={`${st.roomData}`}>
            <div>
              <span>1 x Superior Room, 1 Queen Bed with Sofa bed</span>
            </div>
            <span className={`${st.roomIcon}`}>
              <p>icon</p>
              <span>2 adults</span>
            </span>
            <span>
              Rooms only <b>Refundable</b>
            </span>
            <p>View Booking & Cancellation Policy</p>
          </div>
        </div>

        {/* guest details  */}
        <form className={`${st.guestDetails}`} onSubmit={handleSubmit}>
          <h4>Guest Details</h4>

          {/* add guest  */}
          <AddGuest />
        </form>
      </div>

      {/* right  */}

      <div className={`${st.rightpriceContainer}`}>
        {/* 1 */}
        <div className={`${st.priceSummary}`}>
          <h4>Price Summary</h4>
          <hr>{/* center border */}</hr>

          <div>
            <div className={`${st.roomPrice}`}>
              <p>Room Charges (1 room X 1 night)</p>
              <p>$1200</p>
            </div>
            <div className={`${st.roomPrice}`}>
              <p>Taxes & Fees</p>
              <p>$2400</p>
            </div>
          </div>

          <hr>{/* center border */}</hr>

          <div>
            <div className={`${st.roomPrice}`}>
              <span>Total (Pay at property)</span>
              <span>$14400</span>
            </div>
            <div className={`${st.roomPrice}`}>
              <span>Total (Pay in property’s currency)</span>
              <p>$153.99</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className={`${st.priceMember}`}>
          <span>Members pay only</span>
          <span>$11000</span>
        </div>

        {/* 3 */}
        <div className={`${st.priceOffers}`}>
          <h4>Scuttlr Offers</h4>
          <div className={`${st.offerContainer}`}>
            {/* <span> */}
            <input
              placeholder="Got a promocode?"
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
            />
            <Button className={`${st.offerapplybtn}`}
              name="Apply"
              onClick={() => {
                alert(promocode);
                setPromocode("");
              }}
            />
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ReviewBooking;
