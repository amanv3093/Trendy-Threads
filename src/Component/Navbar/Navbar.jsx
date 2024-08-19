// import navLogo from '../../assets/nav_log.png'
import { NavLink, useParams } from "react-router-dom";
import "./Navbar.css";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import menIcon from "../../Assets/man.png";
import womenIcon from "../../Assets/woman.png";
import childIcon from "../../Assets/boy.png";
import homeIcon from "../../Assets/home.png";
import wishIcon from "../../Assets/heart.png";
import cartIcon1 from "../../Assets/shopping-bag.png";
import loginIcon from "../../Assets/user.png";
import { db } from "../../Firebase/Firebase.js";
import img1 from "../../Assets/f58c9d0d-70a6-4aa6-83b2-0de58d7ec873-removebg-preview.png";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { handelLogin, handelLoginData } from "../../redux/slice/CheckLogin";
import { handelSearch } from "../../redux/slice/Search.js";
import { handelToast } from "../../redux/slice/Toast.jsx";

function Navbar() {
  let product = useSelector((state) => state.productData.product);
  let checkLog = useSelector((state) => state.CheckLogin.log);
  let [isCheck, setIsCheck] = useState(false);
  let [countItem, setCountItem] = useState(0);
  let [visibleMenu, setVisibleMenu] = useState(false);
  let LoginData = useSelector((state) => state.CheckLogin.userLoginData);
  let dispatch = useDispatch();

  useEffect(() => {
    let product1 = product.filter((e) => {
      return e.liked === false;
    });
    let itemAdded = product.filter((e) => {
      return e.itemAdded === true;
    });
    if (itemAdded.length > 0) {
      setCountItem(itemAdded.length);
    } else {
      setCountItem(0);
    }

    if (product1.length > 0) {
      setIsCheck(true);
    } else {
      setIsCheck(false);
    }
  }, [product]);

  let [SearchData, setSearchData] = useState("");
  let search = useSelector((state) => state.SearchData.search);

  let searchInput = (e) => {
    setSearchData(e.target.value);
    dispatch(handelSearch(e.target.value));
  };

  const auth = getAuth();

  const SignOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("userData");

      dispatch(handelLogin(false));

      dispatch(handelToast("Successfully logged out!"));
      // toast.success("Successfully logged out!");

      window.location.reload();
    } catch (err) {
      console.error("Error signing out:", err);
      dispatch(handelToast("Failed to sign out"));
      // toast.error("Failed to sign out");
    }
  };

  let visibleMenuFun = () => {
    setVisibleMenu((elem) => !elem);
  };

  return (
    <>
      <ToastContainer />

      <header>
        <div className="header-wrap">
          <div className="header-box1">
            <div className="nav-logo">
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "17px",
                  fontWeight: " 800",
                  letterSpacing: "1px",
                }}
              >
                <span>T</span>REN
                <span style={{ fontSize: "26px", padding: "0px 2px" }}>:</span>
                <span style={{ fontSize: "20px" }}>D</span>Y THREADS
              </NavLink>
            </div>
            <ul className="list1box">
              <li className="list1">
                <NavLink to="/product/men">MEN</NavLink>{" "}
              </li>
              <li className="list1">
                <NavLink to="/product/women">WOMEN</NavLink>{" "}
              </li>
              <li className="list1">
                <NavLink to="/product/shoe">SHOES</NavLink>{" "}
              </li>
            </ul>
          </div>

          <div className="header-box2">
            <div className="nav-search">
              <NavLink
                to="/product/search"
                className="nav-search"
                style={{ textDecoration: "none" }}
              >
                <span className="material-symbols-outlined search-icon">
                  search
                </span>
                <input
                  onChange={searchInput}
                  value={SearchData}
                  type="text"
                  placeholder="Search by product, category or collection"
                />
              </NavLink>
            </div>

            <div className="nav-line b2">|</div>

            <div className="nav-login ">
              {checkLog === false ? (
                <NavLink to="/login">Login</NavLink>
              ) : (
                <span onClick={SignOut}>Logout</span>
              )}
            </div>

            <div className="nav-like ">
              <NavLink to="/wishlist">
                <span
                  className={
                    isCheck === false
                      ? "material-symbols-outlined like"
                      : "material-symbols-outlined like fill6"
                  }
                >
                  favorite
                </span>
              </NavLink>
            </div>

            <div className="nav-cart ">
              <NavLink to="/cart" style={{ color: "black" }}>
                <span className="material-symbols-outlined cart">
                  shopping_bag
                </span>
                {countItem === 0 ? (
                  <></>
                ) : (
                  <span className="hidden-item6">{countItem}</span>
                )}
              </NavLink>
            </div>
            <span
              onClick={() => visibleMenuFun()}
              className="material-symbols-outlined menu"
            >
              menu
            </span>
          </div>

          <div
            className={
              visibleMenu === true ? "header-box3 same4" : "header-box4 same4"
            }
          >
            <ul className="list55Box">
              <li
                className="list55"
                style={{ justifyContent: "flex-end" }}
                onClick={() => visibleMenuFun()}
              >
                <span className="material-symbols-outlined">close</span>
              </li>

              <NavLink to="/" onClick={() => visibleMenuFun()}>
                <li className="list55">
                  Home <img src={homeIcon} className="ico1" alt="icon" />
                </li>
              </NavLink>
              <NavLink to="/product/men" onClick={() => visibleMenuFun()}>
                <li className="list55">
                  Men <img src={menIcon} className="ico1" alt="icon" />
                </li>
              </NavLink>
              <NavLink to="/product/women" onClick={() => visibleMenuFun()}>
                <li className="list55">
                  Women <img src={womenIcon} className="ico1" alt="icon" />
                </li>
              </NavLink>
              <NavLink to="/product/shoe" onClick={() => visibleMenuFun()}>
                <li className="list55">
                  Shoes <img src={childIcon} className="ico1" alt="icon" />
                </li>
              </NavLink>
              <NavLink to="/wishlist" onClick={() => visibleMenuFun()}>
                <li className="list55">
                  Wishlist
                  <img src={wishIcon} className="ico1" alt="icon" />
                </li>
              </NavLink>
              <NavLink to="/cart" onClick={() => visibleMenuFun()}>
                <li className="list55">
                  Cart
                  <img src={cartIcon1} className="ico1" alt="icon" />
                </li>
              </NavLink>
              <NavLink to="/login" onClick={() => visibleMenuFun()}>
                <li className="list55">
                  {checkLog === false ? (
                    <NavLink to="/login">Login</NavLink>
                  ) : (
                    <span onClick={SignOut}>Logout</span>
                  )}
                  <img src={loginIcon} className="ico1" alt="icon" />
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <NavLink
            to="/product/search"
            className="nav-search-mb"
            style={{ textDecoration: "none" }}
          >
            <span className="material-symbols-outlined search-icon2">
              search
            </span>
            <input
              onChange={searchInput}
              value={SearchData}
              type="text"
              className="input3"
              placeholder="Search by product, category or collection"
            />
          </NavLink>
        </div>
        <div className="category-box"></div>
      </header>
    </>
  );
}

export default Navbar;
