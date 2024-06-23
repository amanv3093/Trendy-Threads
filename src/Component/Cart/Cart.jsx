import React, { useEffect, useRef, useState } from "react";
import RedTruck from "../../Assets/Red-truck.webp";
import "./Cart.css";
import qualitycheck from "../../Assets/quality-check.svg";
import carteasy from "../../Assets/cart-easy-return.svg";
import cartbadge from "../../Assets/cart-badge-trust.svg";
import { useDispatch, useSelector } from "react-redux";
import { handelProduct } from "../../redux/slice/AllProduct";
import empty_cart from "../../Assets/empty_cart.png";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productData.product);
  const [addCart, setAddCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [quantityVisible, setQuantityVisible] = useState(null);

  const moveToWishlist = (elem) => {
    // toast("🦄 Wow so easy!", {
    //   position: "top-right",
    //   autoClose: 5000, // Adjust this value as needed (5000 milliseconds = 5 seconds)
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    // toast("Item moved to wishlist", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    // <Alert severity="success">This is a success Alert.</Alert>;
    // alert("h");

    const updatedProductData = product.map((item) =>
      item.id === elem.id
        ? { ...item, itemAdded: false, size: null, liked: false }
        : item
    );
    dispatch(handelProduct({ typeItem: "moveWishlist", updatedProductData }));
  };

  const removeToWishlist = (elem) => {
    // toast("Item removed from cart", {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // });
    const updatedProductData = product.map((item) =>
      item.id === elem.id
        ? { ...item, itemAdded: false, size: null, quantity: 1 }
        : item
    );

    dispatch(handelProduct({ typeItem: "remove", updatedProductData }));
  };

  const toggleSizeVisible = (itemId) => {
    setExpandedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  const toggleQuantityVisible = (itemId) => {
    setQuantityVisible((prevItemId) => (prevItemId === itemId ? null : itemId));
  };

  useEffect(() => {
    const filteredProducts = product.filter((item) => item.itemAdded === true);
    setAddCart(filteredProducts);

    const total = filteredProducts.reduce((acc, elem) => {
      return acc + (elem.new_price + elem.old_price) * elem.quantity;
    }, 0);
    setTotalPrice(total);

    const discount = filteredProducts.reduce((acc, elem) => {
      return acc + elem.old_price * elem.quantity;
    }, 0);
    setTotalDiscount(discount);
  }, [product]);

  const setSelectSizeFun = (e, elem) => {
    const updatedProductData = product.map((item) =>
      item.id === elem.id ? { ...item, size: e.target.textContent } : item
    );
    dispatch(
      handelProduct({ typeItem: "setSelectSizeFun", updatedProductData })
    );
  };

  const setSizeFun = (e, elem) => {
    const updatedProductData = product.map((item) =>
      item.id === elem.id ? { ...item, quantity: e.target.textContent } : item
    );
    dispatch(handelProduct({ typeItem: "setSizeFun", updatedProductData }));
  };

  // const RazorpayPayment = () => {
  //   useEffect(() => {
  //     const setupRazorpay = () => {
  //       const options = {
  //         key: "rzp_test_GZifSg0ezBTSyb", // Replace with your Razorpay API key
  //         amount: 100,
  //         currency: "INR",
  //         name: "Aman",
  //         description: "Test Payment",
  //         image: "https://example.com/logo.png", // Replace with your logo URL
  //         handler: (response) => {
  //           alert("Payment successful: " + response.razorpay_payment_id);
  //         },
  //         prefill: {
  //           name: "aman",
  //           email: "amanv",
  //           contact: "9383028394",
  //         },
  //       };

  //       const rzp = new window.Razorpay(options);
  //       rzp.open();
  //     };

  //     if (window.Razorpay) {
  //       setupRazorpay();
  //     } else {
  //       console.error("Razorpay SDK is not loaded.");
  //     }
  //   }, [100]);

  //   return null;
  // };
  console.log(addCart);
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
                    <div className="buyCart-box" key={elem.id}>
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
                                onClick={(e) => toggleSizeVisible(elem.id)}
                              >
                                Size :{" "}
                                <span style={{ fontWeight: "600" }}>
                                  {elem.size}
                                </span>
                                <span className="material-symbols-outlined down2">
                                  expand_more
                                </span>
                              </div>

                              <div
                                className={`hidden-size ${
                                  expandedItemId === elem.id
                                    ? "sizeVisible"
                                    : ""
                                }`}
                              >
                                <ul className="list4Box">
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    {addCart[0].type === "shoe" ? "Uk 5" : "S"}
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    {addCart[0].type === "shoe" ? "Uk 6" : "M"}
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    {addCart[0].type === "shoe" ? "Uk 7" : "L"}
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    {addCart[0].type === "shoe" ? "Uk 8" : "XL"}
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    {addCart[0].type === "shoe"
                                      ? "Uk 9"
                                      : "2XL"}
                                  </li>
                                  <li
                                    className="list4"
                                    onClick={(e) => setSelectSizeFun(e, elem)}
                                  >
                                    {addCart[0].type === "shoe"
                                      ? "Uk 10"
                                      : "3XL"}
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="quantity-box4">
                              <div
                                className="quantity-box4-text"
                                onClick={(e) => toggleQuantityVisible(elem.id)}
                              >
                                Qty :{" "}
                                <span style={{ fontWeight: "600" }}>
                                  {elem.quantity}
                                </span>
                                <span className="material-symbols-outlined down2">
                                  expand_more
                                </span>
                              </div>
                              <div
                                className={`quantityHidden ${
                                  quantityVisible === elem.id
                                    ? "quantityVisible"
                                    : ""
                                }`}
                                // className={`quantityHidden ${
                                //   quantityVisible ? "quantityVisible" : ""
                                // }`}
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
                        <ToastContainer />
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
                  <p>- ₹{totalDiscount}</p>
                </div>
                <div className="totalPrice44 d4">
                  <p>Subtotal </p>
                  <p>₹{totalPrice - totalDiscount}</p>
                </div>
              </div>
              <div className="finalPriceBox">
                <div className="finalPrice">
                  <p>Total</p>
                  <h3>₹{totalPrice - totalDiscount}</h3>
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
          <img src={empty_cart} className="img9" />

          <NavLink to="/product/men" style={{ cursor: "pointer" }}>
            <button>
              <a className="empty_cart-btn2">
                <span className="spn2">Continue Shopping !</span>
              </a>
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
}
export default Cart;
