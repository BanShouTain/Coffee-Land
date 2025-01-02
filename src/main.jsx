import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./navbar.jsx";
import Shop from "./shop.jsx";
/* Css İmportları Aşağıda */
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/scss/free/_variables.scss";
import "./sp.css";
/* Css İmportları Yukarıda */

createRoot(document.getElementById("root")).render(
  <div>
    <Navbar />
    <img
      style={{ width: "80px", position: "absolute", top: "20%", left: "45%" }}
      src="/src/assets/images/before.png"
      className="translate-middle"
    ></img>
    <img
      onClick={() => {
        print();
      }}
      style={{
        width: "80px",
        position: "absolute",
        top: "20%",
        left: "55%",
      }}
      src="/src/assets/images/next.png"
      className="translate-middle"
    ></img>
    <Shop />
  </div>
);
