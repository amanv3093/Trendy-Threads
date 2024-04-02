import React, { useEffect, useState } from "react";
import RedTruck from "../../Assets/Red-truck.webp";
import "./Cart.css";
import qualitycheck from "../../Assets/quality-check.svg";
import carteasy from "../../Assets/cart-easy-return.svg";
import cartbadge from "../../Assets/cart-badge-trust.svg";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { handelProduct } from "../../redux/slice/AllProduct";
import empty_cart from "../../Assets/empty_cart.png";
import { NavLink } from "react-router-dom";
function Cart() {
  let dispatch = useDispatch();

  let product = useSelector((state) => state.productData.product);
  console.log(product);
  let [sizeVisible, setSizeVisible] = useState(false);
  let [quantityVisible, setQuantityVisible] = useState(false);
  let [addCart, setAddCart] = useState([]);
  // let [selectSize, setSelectSize] = useState(null);
  // let [selectQuantity, setQuantity] = useState(null);
  let [totalPrice, setTotalPrice] = useState(0);
  let [totaldiscount, setTotalDiscount] = useState(0);
  let moveToWishlist = (elem) => {
    let updatedProductData = product.map((item) =>
      item.id === elem.id
        ? { ...item, itemAdded: false, size: null, liked: false }
        : item
    );
    dispatch(handelProduct({ typeItem: "moveWishlist", updatedProductData }));
  };
  // console.log(CartAllData);
  let setSelectSizeFun = (e, elem) => {
    let updatedProductData = product.map((item) =>
      item.id === elem.id ? { ...item, size: e.target.textContent } : item
    );
    dispatch(
      handelProduct({ typeItem: "setSelectSizeFun", updatedProductData })
    );
    console.log(e.target.textContent);
  };

  let setSizeFun = (e, elem) => {
    let updatedProductData = product.map((item) =>
      item.id === elem.id ? { ...item, quantity: e.target.textContent } : item
    );
    dispatch(handelProduct({ typeItem: "setSizeFun", updatedProductData }));
    console.log(e.target.textContent);
  };

  let removeToWishlist = (elem) => {
    let updatedProductData = product.map((item) =>
      item.id === elem.id
        ? { ...item, itemAdded: false, size: null, quantity: 1 }
        : item
    );

    dispatch(handelProduct({ typeItem: "remove", updatedProductData }));
  };

  let visible1 = () => {
    setSizeVisible((prevState) => !prevState);
  };
  let visible2 = () => {
    setQuantityVisible((prevState) => !prevState);
  };

  useEffect(() => {
    let a = product.filter((e) => {
      return e.itemAdded === true;
    });
    let total = product
      .filter((e) => e.itemAdded === true)
      .reduce((acc, elem) => {
        return (acc = (acc + elem.new_price + elem.old_price) * elem.quantity);
      }, 0);
    setTotalPrice(total);
    let discount = product
      .filter((e) => e.itemAdded === true)
      .reduce((acc, elem) => {
        return (acc = (acc + elem.old_price) * elem.quantity);
      }, 0);
    setTotalDiscount(discount);
    setAddCart(a);
  }, [product]);

  return (
    <>
      {addCart.length > 0 && addCart ? (
        <section className="cart2">
          <div className="cart2-box">
            <div className="leftCart-box">
              <div className="leftCart-heading">
                <span>My Bag</span> {addCart.length} item(s)
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
                {addCart ? (
                  addCart.map((elem) => (
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
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    S
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    M
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    L
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    XL
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    2XL
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    3XL
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="quantity-box4">
                              <div
                                className="quantity-box4-text"
                                onClick={visible2}
                              >
                                Qty :{" "}
                                <span style={{ fontWeight: "600" }}>
                                  {elem.quantity}
                                </span>
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
                                  <li
                                    className="list4"
                                    onClick={(e) => setSizeFun(e, elem)}
                                  >
                                    1
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSizeFun(e, elem)}
                                  >
                                    2
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSizeFun(e, elem)}
                                  >
                                    3
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSizeFun(e, elem)}
                                  >
                                    4
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSizeFun(e, elem)}
                                  >
                                    5
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSizeFun(e, elem)}
                                  >
                                    6
                                  </li>
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
                  <p>₹{totalPrice}</p>
                </div>
                <div className="DeliveryFee4 d4">
                  <p>Delivery Fee </p>
                  <p style={{ color: "#00b852" }}>FREE</p>
                </div>
                <div className="discountBag4 d4">
                  <p>Bag Discount </p>
                  <p>- ₹{totaldiscount}</p>
                </div>
                <div className="totalPrice44 d4">
                  <p>Subtotal </p>
                  <p>₹{totalPrice - totaldiscount}</p>
                </div>
              </div>
              <div className="finalPriceBox">
                <div className="finalPrice">
                  <p>Total</p>
                  <h3>₹{totalPrice - totaldiscount}</h3>
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
        <div className="empty_cart">
          <img src={empty_cart} className="img9"/>

          <NavLink to="/product/men" style={{ cursor: "pointer" }}>
            <button>
              <a class="empty_cart-btn2">
                <span class="spn2">Continue Shopping !</span>
              </a>
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Cart;
