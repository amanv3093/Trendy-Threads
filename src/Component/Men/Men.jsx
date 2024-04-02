import React, { useEffect, useRef, useState } from "react";
import "./Men.css";
import { useSelector, useDispatch } from "react-redux";
import { handelWishlist } from "../../redux/slice/WishlistData.js";
import banner1 from "../../Assets/banner_mens.png";
import banner2 from "../../Assets/banner_women.png";
import banner3 from "../../Assets/banner_kids.png";
import { NavLink, useParams } from "react-router-dom";
import { handelProduct } from "../../redux/slice/AllProduct.js";
function Men() {
  let product = useSelector((state) => state.productData.product);
  let [listVisible, setListVisible] = useState(false);
  let [allCategoryData, setAllCategoryData] = useState(product);
  console.log(product);
  let [checkSort, setCheckSort] = useState(null);
  const dispatch = useDispatch();
  let params = useParams();
  console.log(params);

  let addWishlist = (e, element) => {
    e.preventDefault();

    dispatch(handelProduct(element));
  };
  let HightoLow = (e) => {
    setCheckSort(e.target.textContent);
  };
  let LowtoHigh = (e) => {
    setCheckSort(e.target.textContent);
  };
  let visible1 = () => {
    setListVisible((prevState) => !prevState);
    console.log("visible");
  };

  useEffect(() => {
    if (checkSort === "Price : High to Low") {
      const mutableCopy = [...product];
      let sortData = mutableCopy.sort((x, y) => {
        return x.new_price - y.new_price;
      });

      let m = sortData.filter((e) => {
        return e.category === params.men;
      });

      setAllCategoryData(m);
    } else if (checkSort === "Price : Low to High") {
      const mutableCopy = [...product];
      let sortData = mutableCopy.sort((x, y) => {
        return y.new_price - x.new_price;
      });

      let m = sortData.filter((e) => {
        return e.category === params.men;
      });

      setAllCategoryData(m);
    } else {
      const mutableCopy = [...product];
      let sortData = mutableCopy.sort((x, y) => {
        return x.new_price - y.new_price;
      });

      let m = sortData.filter((e) => {
        return e.category === params.men;
      });

      setAllCategoryData(m);
    }
  }, [product, checkSort, params]);

  return (
    <>
      <div className="product-Main-box">
        <main>
          <div className="banner1">
            {params.men === "men" ? (
              <img src={banner1} alt="banner" />
            ) : params.men === "women" ? (
              <img src={banner2} alt="banner" />
            ) : (
              <img src={banner3} alt="banner" />
            )}
          </div>

          <div className="Short-box">
            <div className="ShortText-box">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onClick={visible1}
              >
                <span className="text1">SORT BY</span>
                <div className="ShortText-Innerbox">
                  <span>Popular</span>
                  <span class="down material-symbols-outlined">
                    expand_more
                  </span>
                </div>
              </div>
              <div
                className={`hidden-shorter ${
                  listVisible === true ? "listVisible" : null
                }`}
              >
                <ul className="hidden-shorterul">
                  <li
                    className="hidden-shorterli"
                    onClick={(e) => HightoLow(e)}
                  >
                    Price : High to Low
                  </li>
                  <li
                    className="hidden-shorterli"
                    onClick={(e) => LowtoHigh(e)}
                  >
                    Price : Low to High
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-mainbox">
            {allCategoryData.map((element) => (
              <NavLink
                className="card1achor"
                to={`/details/${element.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="card">
                  <div className="card-img">
                    <img src={element.image[0].photo1} alt="img" className="hoverImg2"/>
                  </div>

                  <div className="card-details">
                    <div className="item-name">
                      <p>{element.name.slice(0, 20)}...</p>
                      <span
                        className={
                          element.liked === true
                            ? "material-symbols-outlined"
                            : "material-symbols-outlined fill6"
                        }
                        style={{
                          color: element.liked === true ? "gray" : "#fdd835",
                        }}
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
