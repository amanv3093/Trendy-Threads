import React, { useEffect, useRef, useState } from "react";
import "./Men.css";
import { useSelector, useDispatch } from "react-redux";
import { handelWishlist } from "../../redux/slice/WishlistData.js";
import banner1 from "../../Assets/banner_mens.png";
import banner2 from "../../Assets/banner_women.png";
import banner3 from "../../Assets/Soulful-Casual-shoes_Desktop-Inside-banner-1712037249.webp";
import { NavLink, useParams } from "react-router-dom";
import { handelProduct } from "../../redux/slice/AllProduct.js";
import Home from "../Home/Home.jsx";
import Search from "../Cart/Search/Search.jsx";
import { useNavigate } from "react-router-dom";

function Men() {
  let product = useSelector((state) => state.productData.product);
  let [listVisible, setListVisible] = useState(false);
  let checkLog = useSelector((state) => state.CheckLogin.log);
  let [allCategoryData, setAllCategoryData] = useState(product);
  console.log(product);
  let [checkSort, setCheckSort] = useState(null);
  const dispatch = useDispatch();
  let params = useParams();
  console.log(params);
  let search = useSelector((state) => state.SearchData.search);
  console.log(checkLog);

  console.log(product);
  const navigate = useNavigate();
  let addWishlist = (e, element) => {
    e.preventDefault();
    if (checkLog === false) {
      navigate("/login");
    } else {
      dispatch(handelProduct(element));
    }
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

  console.log(params.men);
  useEffect(() => {
    if (
      params.men === "men" ||
      params.men === "women" ||
      params.men === "shoe"
    ) {
      if (checkSort === "Price : High to Low") {
        const mutableCopy = [...product];
        let sortData = mutableCopy.sort((x, y) => {
          return y.new_price - x.new_price;
        });
        let m = sortData.filter((e) => {
          return e.category === params.men;
        });
        setAllCategoryData(m);
      } else if (checkSort === "Price : Low to High") {
        const mutableCopy = [...product];
        let sortData = mutableCopy.sort((x, y) => {
          return x.new_price - y.new_price;
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
        console.log("women", m);
      }
    } else if (params.men === "search") {
      console.log("search");
      if (checkSort === "Price : High to Low") {
        let filterData = product.filter((e) => {
          return (
            e.name.toLowerCase().includes(search) ||
            e.category.toLowerCase().includes(search) ||
            e.cloth_type.toLowerCase().includes(search) ||
            e.type.toLowerCase().includes(search) ||
            e.color.toLowerCase().includes(search)
          );
        });
        let sortData = filterData.sort((x, y) => {
          return x.new_price - y.new_price;
        });
        setAllCategoryData(sortData);
      } else {
        let filterData = product.filter((e) => {
          return (
            e.name.toLowerCase().includes(search) ||
            e.category.toLowerCase().includes(search) ||
            e.cloth_type.toLowerCase().includes(search) ||
            e.type.toLowerCase().includes(search) ||
            e.color.toLowerCase().includes(search)
          );
        });
        let sortData = filterData.sort((x, y) => {
          return y.new_price - x.new_price;
        });
        setAllCategoryData(sortData);
      }
    } else {
      // if (checkSort === "Price : High to Low") {
      //   const mutableCopy = [...product];
      //   let sortData = mutableCopy.sort((x, y) => {
      //     return y.new_price - x.new_price;
      //   });
      //   setAllCategoryData(sortData);
      // } else {
      // const mutableCopy = [...product];
      // console.log("mutableCopy", mutableCopy);
      // let sortData = mutableCopy.sort((x, y) => {
      //   return x.new_price - y.new_price;
      // });
      setAllCategoryData(product);
    }
  }, [product, checkSort, params, search]);

  return (
    <>
      <div className="product-Main-box">
        <main>
          <div className="banner1">
            {params.men === "men" ? (
              <img src={banner1} alt="banner" />
            ) : params.men === "women" ? (
              <img src={banner2} alt="banner" />
            ) : params.men === "shoe" ? (
              <img src={banner3} alt="banner" />
            ) : params.men === "search" ? (
              <Search />
            ) : (
              <Home />
            )}
          </div>
          {allCategoryData.length > 0 ? (
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
          ) : (
            <></>
          )}
          <div className="card-mainbox">
            {allCategoryData.length > 0 ? (
              allCategoryData.map((element) => (
                <NavLink
                  className="card1achor"
                  to={`/details/${element.id}`}
                  style={{ textDecoration: "none" }}
                  key={element.id} // Don't forget to add a unique key
                >
                  <div className="card">
                    <div className="card-img">
                      {element.image &&
                        element.image[0] &&
                        element.image[0].photo1 && (
                          <img
                            src={element.image[0].photo1}
                            alt="img"
                            className="hoverImg2"
                          />
                        )}
                    </div>

                    <div className="card-details">
                      <div className="item-name">
                        <p>
                          {element.name
                            ? element.name.slice(0, 20) + "..."
                            : ""}
                        </p>

                        <span
                          className={
                            element.liked
                              ? "material-symbols-outlined"
                              : "material-symbols-outlined fill6"
                          }
                          style={{
                            color: element.liked ? "gray" : "#fdd835",
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
              ))
            ) : (
              <>
                <span className="not-found">Not Found</span>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default Men;
