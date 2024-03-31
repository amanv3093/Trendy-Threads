import React, { useEffect, useState } from "react";
import CarouselData from "./Carousel";
import "./Details.css";
import Navbar from "../Navbar/Navbar";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handelCart } from "../../redux/slice/CartData";
import { handelProduct } from "../../redux/slice/AllProduct";

function Details() {
  let [printDetails, setPrintDetails] = useState([]);
  let params = useParams();
  let dispatch = useDispatch();
  let productData = useSelector((state) => state.productData.product);
  let CartAllData = useSelector((state) => state.CartAllData.cart);
  let [currentSize, setCurrentSize] = useState();

  let moveToWishlist = (elem) => {
    dispatch(handelProduct(elem));
  };

  let pickSize = (e, elem) => {
    let size1 = e.target.textContent;
    let send = { ...elem, size: size1 };
    setCurrentSize(send);
  };

  let AddCart = (element) => {
    if (currentSize && currentSize.size !== null) {
      let a = CartAllData.some((e) => e.id === currentSize.id);
      if (a) {
        alert("Already added to cart");
      } else {
        let addSize = { ...element, size: `${currentSize.size}` };
        dispatch(handelCart({ typeTwo: "add", ...addSize }));
      }
    } else {
      alert("Size not selected");
    }
  };

  useEffect(() => {
    let a = productData.filter((e) => e.id === Number(params.id));
    setPrintDetails(a);
    setCurrentSize(a[0]);
  }, []);
  // console.log(printDetails.length);

  return (
    <section className="detail">
      {printDetails.length ? (
        <>
          <CarouselData data={printDetails} />
          {printDetails.map((elem) => (
            <div className="detail-box" key={elem.id}>
              {elem && (
                <>
                  <h2 className="detail-heading">Bewakoof®</h2>

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
                    <ul>
                      <li
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        S
                      </li>
                      <li
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        M
                      </li>
                      <li
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        L
                      </li>
                      <li
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        XL
                      </li>
                      <li
                        className="size-code"
                        onClick={(e) => pickSize(e, elem)}
                      >
                        2XL
                      </li>
                      <li
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
