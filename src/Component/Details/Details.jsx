import React, { useEffect, useState } from "react";
import CarouselData from "./Carousel";
import "./Details.css";
import Navbar from "../Navbar/Navbar";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handelCart } from "../../redux/slice/CartData";
import { handelProduct } from "../../redux/slice/AllProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { handelToast } from "../../redux/slice/Toast";
function Details() {
  let [printDetails, setPrintDetails] = useState([]);
  let params = useParams();
  let dispatch = useDispatch();
  let productData = useSelector((state) => state.productData.product);
  let CartAllData = useSelector((state) => state.CartAllData.cart);
  let [currentSize, setCurrentSize] = useState();
  let [store, setStore] = useState(null);
  let userLoginData = useSelector((state) => state.CheckLogin.userLoginData);
  console.log(userLoginData);
  let checkLog = useSelector((state) => state.CheckLogin.log);
  const navigate = useNavigate();
  let moveToWishlist = (elem) => {
    if (checkLog === false) {
      navigate("/login");
    } else {
      if (elem.liked === true) {
        dispatch(handelToast("Item added to wishlist."));

        dispatch(handelProduct(elem));
      } else {
        dispatch(handelToast("Already added to wishlist."));
      }
    }
  };

  let pickSize = (e, elem) => {
    let size1 = e.target.textContent;
    let send = { ...elem, size: size1 };
    console.log(size1);
    setCurrentSize(send);

    setStore(e.target.textContent);
  };

  let AddCart = (element) => {
    if (checkLog === false) {
      navigate("/login");
    } else {
      if (currentSize && currentSize.size !== null) {
        // let a = productData.some((e) => e.itemAdded === currentSize.itemAdded);
        // console.log(a);
        if (element.itemAdded) {
          dispatch(handelToast("Already added to cart."));
        } else {
          dispatch(handelToast("Item added to cart."));

          let updatedProductData = productData.map((item) =>
            item.id === element.id
              ? { ...item, itemAdded: true, size: currentSize.size }
              : item
          );

          dispatch(
            handelProduct({
              typeItem: "itemAdded",
              updatedProductData,
            })
          );

          //itemAdded
          console.log(productData);
        }
      } else {
        dispatch(handelToast("Please select a size."));
      }
    }
  };

  useEffect(() => {
    let a = productData.filter((e) => e.id === Number(params.id));
    setPrintDetails(a);
    setCurrentSize(a[0]);
  }, [productData]);

  return (
    <section className="detail">
      {printDetails.length ? (
        <>
          <CarouselData data={printDetails} />
          {printDetails.map((elem) => (
            <div className="detail-box" key={elem.id}>
              {elem && (
                <>
                  <h2 className="detail-heading">TREN:DY THREADS®</h2>

                  <p className="product-name2">{elem.name}</p>

                  <div className="ratingBox2">
                    <span className="material-symbols-outlined star2">
                      star
                    </span>
                    <span className="rating2">{elem.rating}</span>
                  </div>

                  <div className="price2">
                    <span className="realPrice1">₹{elem.new_price}</span>
                    <span className="offPrice1">₹{elem.old_price}</span>
                    <span className="discountPrice1">{elem.off}</span>
                  </div>
                  <p className="taxes">inclusive of all taxes</p>
                  <div className="cloth-type2">{elem.cloth_type}</div>
                  <div className="shipping-discount">
                    TriBe members get an extra discount of ₹30 and FREE shipping
                  </div>

                  <div className="cloth-size">
                    <p className="size-heading">SELECT SIZE</p>
                    <ToastContainer />
                    <ul>
                      <li
                        style={{
                          border:
                            store === "S" || store === "UK 5"
                              ? "2px solid #039373"
                              : "",
                          background:
                            store === "S" || store === "UK 5" ? "black" : "",
                          color:
                            store === "S" || store === "UK 5" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        {printDetails[0].type === "shoe" ? "UK 5" : "S"}
                      </li>

                      <li
                        style={{
                          border:
                            store === "M" || store === "UK 6"
                              ? "2px solid #039373"
                              : "",
                          background:
                            store === "M" || store === "UK 6" ? "black" : "",
                          color:
                            store === "M" || store === "UK 6" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        {printDetails[0].type === "shoe" ? "UK 6" : "M"}
                      </li>
                      <li
                        style={{
                          border:
                            store === "L" || store === "UK 7"
                              ? "2px solid #039373"
                              : "",
                          background:
                            store === "L" || store === "UK 7" ? "black" : "",
                          color:
                            store === "L" || store === "UK 7" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        {printDetails[0].type === "shoe" ? "UK 7" : "L"}
                      </li>
                      <li
                        style={{
                          border:
                            store === "XL" || store === "UK 8"
                              ? "2px solid #039373"
                              : "",
                          background:
                            store === "XL" || store === "UK 8" ? "black" : "",
                          color:
                            store === "XL" || store === "UK 8" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        {printDetails[0].type === "shoe" ? "UK 8" : "XL"}
                      </li>
                      <li
                        style={{
                          border:
                            store === "2XL" || store === "UK 9"
                              ? "2px solid #039373"
                              : "",
                          background:
                            store === "2XL" || store === "UK 9" ? "black" : "",
                          color:
                            store === "2XL" || store === "UK 9" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        {printDetails[0].type === "shoe" ? "UK 9" : "2XL"}
                      </li>
                      <li
                        style={{
                          border:
                            store === "3XL" || store === "UK 10"
                              ? "2px solid #039373"
                              : "",
                          background:
                            store === "3XL" || store === "UK 10" ? "black" : "",
                          color:
                            store === "3XL" || store === "UK 10" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        {printDetails[0].type === "shoe" ? "UK 10" : "3XL"}
                      </li>
                    </ul>
                  </div>

                  <div className="btn2">
                    <button className="add-bt2" onClick={() => AddCart(elem)}>
                      <img
                        src="https://images.bewakoof.com/web/ic-web-head-cart.svg"
                        alt="Cart Icon"
                      />
                      ADD TO BAG
                    </button>
                    <button
                      className="wishlist-bt2"
                      onClick={() => moveToWishlist(elem)}
                    >
                      <span className="material-symbols-outlined like2">
                        favorite
                      </span>
                      WISHLIST
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </>
      ) : (
        <h1>No details available</h1>
      )}
    </section>
  );
}

export default Details;
