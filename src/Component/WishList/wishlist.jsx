import React, { useEffect, useReducer, useState } from "react";
import "./wishlist.css";

import { useDispatch, useSelector } from "react-redux";
import wishlistEmpty from "../../Assets/wishlistEmpty.svg";
import crossBtnIcon from "../../Assets/crossBtnIcon.svg";
import { NavLink } from "react-router-dom";
import { handelProduct } from "../../redux/slice/AllProduct";

function Wishlist() {
  const like = useSelector((state) => state.wishlistData.like);
  let product = useSelector((state) => state.productData.product);
  let [likedData, setLikedData] = useState([]);
  console.log(product);
  let clothTypes = (state, action) => {
    if (action.type === "all") {
      console.log("all");
      return likedData;
    } else if (action.type === "tshirt") {
      console.log("tshirt");
      let filteredData = likedData.filter((e) => {
        return e.type === "t-shirt";
      });
      return filteredData;
    } else if (action.type === "shirt") {
      console.log("shirt");
      let filteredData = likedData.filter((e) => {
        return e.type === "shirt";
      });
      return filteredData;
    } else {
      return state;
    }
  };
  let dispatch = useDispatch();

  let [state, dispatch1] = useReducer(clothTypes, like);
  let moveToBag = (e, elem) => {
    e.preventDefault();
    // console.log(e);
    // console.log(elem);
    let updatedProductData = product.map((item) =>
      item.id === elem.id
        ? { ...item, itemAdded: true, size: null, liked: true }
        : item
    );
    console.log(updatedProductData);
    dispatch(handelProduct({ typeItem: "moveToBag", updatedProductData }));
  };
  const removeWishListFun = (e, element) => {
    e.preventDefault();

    dispatch(handelProduct(element));
    // dispatch(handelWishlist(element));
  };
  console.log(product);
  useEffect(() => {
    let filterData = product.filter((e) => {
      return e.liked === false;
    });
    setLikedData(filterData);
  }, [product]);
  return (
    <>
      {likedData && likedData.length > 0 ? (
        <section className="wishlist">
          <div className="wishlist-box">
            <div className="wishlist-type">
              <span
                className="wishlist-type-box"
                onClick={() => dispatch1({ type: "all" })}
              >
                All
              </span>
              <span
                className="wishlist-type-box"
                onClick={() => dispatch1({ type: "tshirt" })}
              >
                T-Shirt
              </span>
              <span
                className="wishlist-type-box"
                onClick={() => dispatch1({ type: "shirt" })}
              >
                Shirt
              </span>
            </div>
            <div className="wishlist-details-box">
              <>
                {likedData.length > 0 && likedData ? (
                  likedData.map((element) => (
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to={`/details/${element.id}`}
                      key={element.id}
                    >
                      <div className="wishlist-card">
                        <div className="card2">
                          {element.image &&
                            element.image.length > 0 &&
                            element.image[0].photo1 && (
                              <div className="card-img2">
                                <img
                                  src={element.image[0].photo1}
                                  alt="Product"
                                />
                              </div>
                            )}

                          <div className="card-details2">
                            <div className="item-name2">
                              <p>{element.name}</p>
                            </div>

                            <div className="wishlist-price">
                              <p className="wishlist-realPrice">
                                ₹{element.new_price}
                              </p>
                              <p className="wishlist-oldPrice">
                                ₹{element.old_price}
                              </p>
                              <p className="wishlist-offPrice">{element.off}</p>
                            </div>
                          </div>

                          <div className="wishlist-btn">
                            <button
                              className="w-btn"
                              onClick={(e) => moveToBag(e, element)}
                            >
                              <img
                                style={{ width: "15px", height: "15px" }}
                                src="https://images.bewakoof.com/web/addtocart.svg"
                                alt="Add to Bag"
                              />
                              ADD TO BAG
                            </button>
                          </div>
                        </div>
                        <div
                          className="crossImg-box"
                          onClick={(e) => removeWishListFun(e, element)}
                        >
                          <img src={crossBtnIcon} alt="cross" />
                        </div>
                      </div>
                    </NavLink>
                  ))
                ) : (
                  <h1>No items in wishlist</h1>
                )}
              </>
            </div>
          </div>
        </section>
      ) : (
        <div className="wishlist-Empty">
          <div className="wishlist-EmptyBox">
            <img
              style={{ width: "140px", height: "140px" }}
              src={wishlistEmpty}
              alt="empty"
            />
            <h3>Hey! Your wishlist is empty.</h3>
            <p>Save your favourites here and make them yours soon!</p>
            <NavLink className="wishlist-EmptyBox-btn" to="/men">
              <button>SHOP NOW</button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}

export default Wishlist;
