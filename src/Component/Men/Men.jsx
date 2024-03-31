import React, { useEffect, useRef } from "react";
import "./Men.css";
import { useSelector, useDispatch } from "react-redux";
import { handelWishlist } from "../../redux/slice/WishlistData.js";
import banner1 from "../../Assets/banner_mens.png";
import { NavLink } from "react-router-dom";
import { handelProduct } from "../../redux/slice/AllProduct.js";
function Men() {
  let product = useSelector((state) => state.productData.product);

  console.log(product);
  const dispatch = useDispatch();

  let addWishlist = (e, element) => {
    e.preventDefault();

    dispatch(handelProduct(element));
  };

  return (
    <>
      <div className="product-Main-box">
        <main>
          <div className="banner1">
            <img src={banner1} />
          </div>

          <div className="Short-box">
            <div className="ShortText-box">
              <span className="text1">SORT BY</span>
              <div className="ShortText-Innerbox">
                <span>Popular</span>
                <span class="down material-symbols-outlined">expand_more</span>
              </div>
            </div>
          </div>
          <div className="card-mainbox">
            {product.map((element) => (
              <NavLink
                to={`/details/${element.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card">
                  <div className="card-img">
                    <img src={element.image[0].photo1} />
                  </div>

                  <div className="card-details">
                    <div className="item-name">
                      <p>{element.name}</p>
                      <span
                        style={{
                          color: element.liked === true ? "gray" : "pink",
                        }}
                        className="material-symbols-outlined "
                        onClick={(e) => addWishlist(e, element)}
                      >
                        favorite
                      </span>
                    </div>

                    <div className="price">
                      <span className="new-price">₹{element.new_price}</span>
                      <span className="off-price">₹{element.old_price}</span>
                    </div>
                    <div className="cloth_type">{element.cloth_type}</div>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Men;
