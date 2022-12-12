import React, { useState } from "react";
import Input from "../../components/form/input/Input";
import Button from "../../components/form/button/Button";
import { useRouter } from "next/navigation";
import AddGuest from "../../components/basic-components/AddGuest";
import LeftArrow from "../../assets/icon/leftArrow.svg";

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

      {/* left  */}
      <div>
        {/* card  */}
        <div>card</div>

        {/* duration */}
        <div>
          {/* 1 */}
          <div>
            <span>Check In</span>
            <h5>Mon, 05 Dec 2022</h5>
            <span>02:00 PM</span>
          </div>

          {/* 2 */}
          <div>
            <span>Check Out</span>
            <h5>Wed, 07 Dec 2022</h5>
            <span>12:00 PM</span>
          </div>

          {/* 3 */}
          <div>
            <span>Guest</span>
            <h5>1 night, 2 adults</h5>
            <span>1 Nights</span>
          </div>
        </div>

        {/* room and person details  */}
        <div>
          <h5>1 night, 2 adults</h5>
          <div>
            <span>1 x Superior Room, 1 Queen Bed with Sofa bed</span>
          </div>
          <span>
            <p>icon</p>
            <span>2 adults</span>
          </span>
          <span>
            Rooms only <b>Refundable</b>
          </span>
          <p>View Booking & Cancellation Policy</p>
        </div>

        {/* guest details  */}
        <form onSubmit={handleSubmit}>
          <h4>Guest Details</h4>

          {/* add guest  */}
          <AddGuest />
        </form>
      </div>

      {/* right  */}

      <div>
        {/* 1 */}
        <div>
          <h4>Price Summary</h4>
          <div>{/* center border */}</div>

          <div>
            <div>
              <span>Room Charges (1 room X 1 night)</span>
              <span>$1200</span>
            </div>
            <div>
              <span>Taxes & Fees</span>
              <span>$2400</span>
            </div>
          </div>

          <div>{/* center border */}</div>

          <div>
            <div>
              <span>Total (Pay at property)</span>
              <span>$14400</span>
            </div>
            <div>
              <span>Total (Pay in property’s currency)</span>
              <span>$153.99</span>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div>
          <span>Members pay only</span>
          <span>$11000</span>
        </div>

        {/* 3 */}
        <div>
          <h4>Scuttlr Offers</h4>
          <div>
            {/* <span> */}
            <input
              placeholder="Got a promocode?"
              value={promocode}
              onChange={(e) => setPromocode(e.target.value)}
            />
            <Button
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
  );
}

export default ReviewBooking;
