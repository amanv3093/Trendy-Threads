import React from "react";
import RedTruck from "../../Assets/Red-truck.webp";
import "./Cart.css";
import qualitycheck from "../../Assets/quality-check.svg";
import carteasy from "../../Assets/cart-easy-return.svg";
import cartbadge from "../../Assets/cart-badge-trust.svg";
function Cart() {
  return (
    <section className="cart2">
      <div className="cart2-box">
        <div className="leftCart-box">
          <div className="leftCart-heading">
            <span>My Bag</span> 2 item(s)
          </div>
          <div className="free-deliveryBox">
            <img src={RedTruck} style={{ width: "20px" }} alt="RedTruck-logo" />
            Yay! You get FREE delivery on this order
          </div>

          <div className="buyCart">
            <div className="buyCart-box">
              <div className="buyCartTop-box">
                <div className="buyCartLeft-box">
                  <p className="cloth-name4">
                    Men's Blue Striped Oversized Shirt
                  </p>
                  <div className="price4">
                    <span className="real-price4">₹899</span>
                    <span className="off-price4">₹1649</span>
                  </div>
                  <p className="save-price4">You saved ₹750!</p>
                  <div className="size4">
                    <div className="size-box4">
                      <div className="size-box4-text">
                        Size : <span style={{ fontWeight: "600" }}>L</span>
                        <span class="material-symbols-outlined down2">
                          expand_more
                        </span>
                      </div>

                      <div className="hidden-size"></div>
                    </div>
                    <div className="quantity-box4">
                      <div className="quantity-box4-text">
                        Qty : <span style={{ fontWeight: "600" }}>1</span>
                        <span class="material-symbols-outlined down2">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buyCartRight-box">
                  <img src="https://images.bewakoof.com/t1080/men-s-black-snoopy-vibes-graphic-printed-oversized-t-shirt-633742-1711481910-1.jpg" />
                </div>
              </div>
              <div className="buyCartBottom-box">
                <button className="Remove4">Remove</button>
                <button className="wishlist4">Move to Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div className="rightCart-box">
          <h2>PRICE SUMMARY</h2>

          <div className="rightCart-price-detail">
            <div className="totalPrice4 d4">
              <p>Total MRP (Incl. of taxes) </p>
              <p>₹ 2948</p>
            </div>
            <div className="DeliveryFee4 d4">
              <p>Delivery Fee </p>
              <p style={{ color: "#00b852" }}>FREE</p>
            </div>
            <div className="discountBag4 d4">
              <p>Bag Discount </p>
              <p>- ₹1550</p>
            </div>
            <div className="totalPrice44 d4">
              <p>Subtotal </p>
              <p>₹ 1398</p>
            </div>
          </div>
          <div className="finalPriceBox">
            <div className="finalPrice">
              <p>Total</p>
              <h3>₹3495</h3>
            </div>
            <button className="finalPriceBtn">ADD ADDRESS</button>
          </div>

          <div className="icon4Box">
            <div className="icon44">
              <img
                src={cartbadge}
                alt="logo"
                style={{ width: "31px", height: "36px" }}
              />
              <p>100% SECURE PAYMENTS</p>
            </div>
            <div className="icon44">
              <img
                src={carteasy}
                alt="logo3"
                style={{ width: "31px", height: "36px" }}
              />
              <p>EASY RETURNS & QUICK REFUNDS</p>
            </div>

            <div className="icon44">
              <img
                src={qualitycheck}
                alt="logo2"
                style={{ width: "31px", height: "36px" }}
              />
              <p>QUALITY ASSURANCE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
