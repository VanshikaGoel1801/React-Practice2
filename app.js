import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo-img"
          src="https://media.istockphoto.com/id/1224294033/vector/food-delivery-icon-vector-graphic-element-sign.jpg?s=612x612&w=0&k=20&c=ccx0i2YGnp710JVF84uj8eJjTxklYtF5L0w4EYNwZDs="
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = () => {
  return (
    <div className="res-card">
      <div>
        <img
          className="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/b255e719-7903-4f84-b391-ec85b0056aa1_10734.jpg"
        />
      </div>
      <h2>Arsalan</h2>
      <h3>4.6 stars</h3>
      <h3>Biryani,Mughlai,Kebabs</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCard /> <ResCard /> <ResCard /> <ResCard /> <ResCard /> <ResCard />{" "}
        <ResCard /> <ResCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
