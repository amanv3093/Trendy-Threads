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
        toast("Item added to wishlist", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(handelProduct(elem));
      } else {
        toast("Already added to wishlist.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  let pickSize = (e, elem) => {
    let size1 = e.target.textContent;
    let send = { ...elem, size: size1 };
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
          toast("Already added to cart", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast("Item added to cart", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
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
        toast("Please select a size .", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
                          border: store === "S" ? "2px solid #039373" : "",
                          background: store === "S" ? "black" : "",
                          color: store === "S" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        S
                      </li>

                      <li
                        style={{
                          border: store === "M" ? "2px solid #039373" : "",
                          background: store === "M" ? "black" : "",
                          color: store === "M" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        M
                      </li>
                      <li
                        style={{
                          border: store === "L" ? "2px solid #039373" : "",
                          background: store === "L" ? "black" : "",
                          color: store === "L" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        L
                      </li>
                      <li
                        style={{
                          border: store === "XL" ? "2px solid #039373" : "",
                          background: store === "XL" ? "black" : "",
                          color: store === "XL" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        XL
                      </li>
                      <li
                        style={{
                          border: store === "2XL" ? "2px solid #039373" : "",
                          background: store === "2XL" ? "black" : "",
                          color: store === "2XL" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        2XL
                      </li>
                      <li
                        style={{
                          border: store === "3XL" ? "2px solid #039373" : "",
                          background: store === "3XL" ? "black" : "",
                          color: store === "3XL" ? "white" : "",
                        }}
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        3XL
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
