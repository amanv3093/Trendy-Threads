import React from "react";
import "./wishlist.css";
import { handelWishlist } from "../../redux/slice/WishlistData";
import { useDispatch, useSelector } from "react-redux";
import wishlistEmpty from "../../Assets/wishlistEmpty.svg";
import crossBtnIcon from "../../Assets/crossBtnIcon.svg";
import { NavLink } from "react-router-dom";
import menData from "../../Assets/men.js"; // Import menData

function Wishlist() {
  const { like } = useSelector((state) => state.wishlistData);

  let dispatch = useDispatch();

  const removeWishListFun = (e, element) => {
    e.preventDefault();
    if (element.liked === false) {
      const updatedMenData = menData.map((item) =>
        item.id === element.id ? { ...item, liked: true } : item
      );
      menData.length = 0;
      menData.push(...updatedMenData);
      // menData.splice(0, menData.length, ...updatedMenData);

      const updatedLike = like.filter((e) => element.id !== e.id);
      dispatch(handelWishlist({ type: "remove", like: updatedLike }));
    }
    console.log(menData);
  };

  return (
    <>
      {like && like.length > 0 ? (
        <section className="wishlist">
          <div className="wishlist-box">
            <div className="wishlist-type">
              <span className="wishlist-type-box">All</span>
              <span className="wishlist-type-box">T-Shirt</span>
              <span className="wishlist-type-box">Shirt</span>
            </div>
            <div className="wishlist-details-box">
              {like.map((element) => (
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/details/${element.id}`}
                >
                  <div className="wishlist-card" key={element.id}>
                    <div className="card2">
                      {element.image &&
                        element.image.length > 0 &&
                        element.image[0].photo1 && (
                          <div className="card-img2">
                            <img src={element.image[0].photo1} alt="Product" />
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
                        <button className="w-btn">
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
              ))}
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
