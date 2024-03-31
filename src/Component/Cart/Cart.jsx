import React, { useState } from "react";
import RedTruck from "../../Assets/Red-truck.webp";
import "./Cart.css";
import qualitycheck from "../../Assets/quality-check.svg";
import carteasy from "../../Assets/cart-easy-return.svg";
import cartbadge from "../../Assets/cart-badge-trust.svg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handelProduct } from "../../redux/slice/AllProduct";
import { handelCart } from "../../redux/slice/CartData";
function Cart() {
  let dispatch = useDispatch();
  let CartAllData = useSelector((state) => state.CartAllData.cart);
  let product = useSelector((state) => state.productData.product);
  console.log(product);
  let [sizeVisible, setSizeVisible] = useState(false);
  let [quantityVisible, setQuantityVisible] = useState(false);

  let moveToWishlist = (elem) => {
    dispatch(handelProduct(elem));
  };
  // console.log(CartAllData);
  let removeToWishlist = (elem) => {
    dispatch(handelCart({ typeTwo: "removed", ...elem }));
    // if (CartAllData.length === 1) {
    //   dispatch(handelCart({ typeTwo: "removeAll" }));
    // } else {
    //   console.log("pass in remove");
    //   dispatch(handelCart({ typeTwo: "remove", ...elem }));
    //   //dispatch(handelCart({ typeTwo: "add", ...addSize }));
    // }
  };
  console.log(CartAllData.length);

  let visible1 = () => {
    setSizeVisible((prevState) => !prevState);
  };
  let visible2 = () => {
    setQuantityVisible((prevState) => !prevState);
  };

  console.log(CartAllData);
  return (
    <>
      {CartAllData.length > 0 && CartAllData ? (
        <section className="cart2">
          <div className="cart2-box">
            <div className="leftCart-box">
              <div className="leftCart-heading">
                <span>My Bag</span> 2 item(s)
              </div>
              <div className="free-deliveryBox">
                <img
                  src={RedTruck}
                  style={{ width: "20px" }}
                  alt="RedTruck-logo"
                />
                Yay! You get FREE delivery on this order
              </div>

              <div className="buyCart">
                {CartAllData ? (
                  CartAllData.map((elem) => (
                    <div className="buyCart-box">
                      <div className="buyCartTop-box">
                        <div className="buyCartLeft-box">
                          <p className="cloth-name4">{elem.name}</p>
                          <div className="price4">
                            <span className="real-price4">
                              ₹{elem.new_price}
                            </span>
                            <span className="off-price4">
                              ₹{elem.old_price}
                            </span>
                          </div>
                          <p className="save-price4">
                            You saved ₹{elem.old_price - elem.new_price}!
                          </p>
                          <div className="size4">
                            <div className="size-box4">
                              <div
                                className="size-box4-text"
                                onClick={visible1}
                              >
                                Size :{" "}
                                <span style={{ fontWeight: "600" }}>
                                  {elem.size}
                                </span>
                                <span class="material-symbols-outlined down2">
                                  expand_more
                                </span>
                              </div>

                              <div
                                className={`hidden-size ${
                                  sizeVisible === true ? "sizeVisible" : null
                                }`}
                              >
                                <ul className="list4Box">
                                  <li className="list4">S</li>
                                  <li className="list4">M</li>
                                  <li className="list4">L</li>
                                  <li className="list4">XL</li>
                                  <li className="list4">2XL</li>
                                  <li className="list4">3XL</li>
                                </ul>
                              </div>
                            </div>
                            <div className="quantity-box4">
                              <div
                                className="quantity-box4-text"
                                onClick={visible2}
                              >
                                Qty :{" "}
                                <span style={{ fontWeight: "600" }}>1</span>
                                <span class="material-symbols-outlined down2">
                                  expand_more
                                </span>
                              </div>
                              <div
                                className={`quantityHidden ${
                                  quantityVisible === true
                                    ? "quantityVisible"
                                    : null
                                }`}
                              >
                                <ul className="list4Box">
                                  <li className="list4">1</li>
                                  <li className="list4">2</li>
                                  <li className="list4">3</li>
                                  <li className="list4">4</li>
                                  <li className="list4">5</li>
                                  <li className="list4">6</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="buyCartRight-box">
                          {elem.image && elem.image[0] && (
                            <img src={elem.image[0].photo1} alt="Product" />
                          )}
                        </div>
                      </div>
                      <div className="buyCartBottom-box">
                        <button
                          className="Remove4"
                          onClick={(e) => removeToWishlist(elem)}
                        >
                          Remove
                        </button>
                        <button
                          className="wishlist4"
                          onClick={(e) => moveToWishlist(elem)}
                        >
                          Move to Wishlist
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <></>
                )}
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
      ) : (
        <h1>empty</h1>
      )}
    </>
  );
}

export default Cart;
