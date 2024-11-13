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
import "react-toastify/dist/ReactToastify.css";
import { handelToast } from "../../redux/slice/Toast";
import { Select, Space } from "antd";

function Cart() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productData.product);
  const [addCart, setAddCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [expandedItemId, setExpandedItemId] = useState(null);
  const [quantityVisible, setQuantityVisible] = useState(null);
  console.log(addCart);
  const moveToWishlist = (elem) => {
    dispatch(
      handelToast({
        message: "Item moved to wishlist.",
        messageType: "success",
      })
    );
    const updatedProductData = product.map((item) =>
      item.id === elem.id
        ? { ...item, itemAdded: false, size: null, liked: false }
        : item
    );
    dispatch(handelProduct({ typeItem: "moveWishlist", updatedProductData }));
  };

  const removeToWishlist = (elem) => {
    dispatch(
      handelToast({
        message: "Item removed from cart.",
        messageType: "success",
      })
    );
    const updatedProductData = product.map((item) =>
      item.id === elem.id
        ? { ...item, itemAdded: false, size: null, quantity: 1 }
        : item
    );

    dispatch(handelProduct({ typeItem: "remove", updatedProductData }));
  };

  // const toggleSizeVisible = (itemId) => {
  //   setExpandedItemId((prevItemId) => (prevItemId === itemId ? null : itemId));
  // };

  // const toggleQuantityVisible = (itemId) => {
  //   setQuantityVisible((prevItemId) => (prevItemId === itemId ? null : itemId));
  // };

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

  const setSelectSizeFun = (value, elem) => {
    console.log(value, elem);
    const updatedProductData = product.map((item) =>
      item.id === elem.id ? { ...item, size: value } : item
    );
    dispatch(
      handelProduct({ typeItem: "setSelectSizeFun", updatedProductData })
    );
  };

  const setSizeFun = (value, elem) => {
    const updatedProductData = product.map((item) =>
      item.id === elem.id ? { ...item, quantity: value } : item
    );
    dispatch(handelProduct({ typeItem: "setSizeFun", updatedProductData }));
  };

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
                  addCart.map((elem, index) => (
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
                            {addCart[0].type === "shoe" ? (
                              <Select
                                className="size-box4"
                                defaultValue={addCart[index].size}
                                onChange={(value) =>
                                  setSelectSizeFun(value, elem)
                                }
                                style={{
                                  width: 120,
                                }}
                                options={[
                                  {
                                    value: "Uk 5",
                                    label: "Uk 5",
                                  },
                                  {
                                    value: "Uk 6",
                                    label: "Uk 6",
                                  },
                                  {
                                    value: "Uk 7",
                                    label: "Uk 7",
                                  },
                                  {
                                    value: "Uk 8",
                                    label: "Uk 8",
                                  },
                                  {
                                    value: "Uk 9",
                                    label: "Uk 9",
                                  },
                                ]}
                              />
                            ) : (
                              <Select
                                className="size-box4"
                                defaultValue={addCart[index].size}
                                onChange={(value) =>
                                  setSelectSizeFun(value, elem)
                                }
                                style={{
                                  width: 120,
                                }}
                                options={[
                                  {
                                    value: "S",
                                    label: "S",
                                  },
                                  {
                                    value: "M",
                                    label: "M",
                                  },
                                  {
                                    value: "L",
                                    label: "L",
                                  },
                                  {
                                    value: "XL",
                                    label: "XL",
                                  },
                                  {
                                    value: "XXL",
                                    label: "XXL",
                                  },
                                ]}
                              />
                            )}

                            <div className="quantity-box4">
                              <Select
                                className="size-box4"
                                onChange={(value) => setSizeFun(value, elem)}
                                style={{
                                  width: 120,
                                }}
                                defaultValue={1}
                                options={[
                                  {
                                    value: 1,
                                    label: 1,
                                  },
                                  {
                                    value: 2,
                                    label: 2,
                                  },
                                  {
                                    value: 3,
                                    label: 3,
                                  },
                                  {
                                    value: 4,
                                    label: 4,
                                  },
                                  {
                                    value: 5,
                                    label: 5,
                                  },
                                ]}
                              />
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
