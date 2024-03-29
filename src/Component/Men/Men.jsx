import React, { useEffect, useRef } from "react";
import "./Men.css";
import { useSelector, useDispatch } from "react-redux";
import { handelWishlist } from "../../redux/slice/WishlistData.js";
import banner1 from "../../Assets/banner_mens.png";
import menData from "../../Assets/men.js";
import { NavLink } from "react-router-dom";
function Men() {
  const { like } = useSelector((state) => state.wishlistData);
  const dispatch = useDispatch();
  let likeRefrence = useRef();

  let addWishlist = (e, element) => {
    e.preventDefault();
    likeRefrence.current.style.backgroundColor = "green";

    if (element.liked === true) {
      element.liked = !element.liked;
      dispatch(handelWishlist(element));
    }
    console.log(menData);
  };

  // useEffect(() => {
  //   const updatedMenData = menData.map((item) => {
  //     const isLiked = like.some((likedItem) => likedItem.id === item.id);
  //     return { ...item, liked: isLiked };
  //   });

  //   console.log(updatedMenData);
  // }, [like]);

  // console.log(count);

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
            {menData.map((element) => (
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
                        ref={likeRefrence}
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
