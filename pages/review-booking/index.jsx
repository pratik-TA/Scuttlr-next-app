import React from "react";
import Input from "../../components/form/input/Input";
import Button from "../../components/form/button/Button";
import { useRouter } from 'next/navigation';

function ReviewBooking() {
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submit");
  };
  return (
    <div className="container">
      <h3 onClick={()=>router.back()}>{"<"} Review Your Booking</h3>

      {/* left  */}
      <div>
        {/* card  */}
        <div>card</div>

        {/* duration */}
        <div>
          <div>checkin</div>
          <div>checkout</div>
          <div>guest</div>
        </div>

        {/* room and person details  */}
        <div>card</div>

        {/* guest details  */}
        <form onSubmit={handleSubmit}>
          <h4>Guest Details</h4>

          {/* add guest  */}
          <div>
            <select>
              <option>Mr</option>
              <option>Mrs</option>
              <option>Miss</option>
            </select>
            <Input label="First name" placeholder="Enter first name" />
            <Input label="Last name" placeholder="Enter last name" />
          </div>

          <div>
            <Input label="Email Address" placeholder="Enter email" />
            <Input label="Mobile Number" placeholder="Enter number" />
          </div>

          <div>
            <Button name="Reserve Now" />
          </div>
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
              <input placeholder="Got a promocode?" />
              <Button name="Apply" />
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewBooking;
