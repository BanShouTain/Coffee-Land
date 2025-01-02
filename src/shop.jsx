import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/scss/free/_variables.scss";
import "./sp.css";
import Foods from "./foods";
function Shop() {
  const pizzas = [
    {
      title: "Chocolate Cup",
      price: "200",
      image: "cup.png",
    },
    {
      title: "White Mocha",
      price: "300",
      image: "cup2.png",
    },
    {
      title: "Turkish Latte",
      price: "400",
      image: "cup3.png",
    },
    {
      title: "Melted Choco",
      price: "200",
      image: "cup4.png",
    },
    {
      title: "Snowlatte",
      price: "300",
      image: "cup5.png",
    },
    {
      title: "Grand Coffee",
      price: "350",
      image: "cup6.png",
    },
  ];
  return (
    <div
      style={{ marginTop: "8rem" }}
      className="d-flex justify-content-center align-items-center flex-column"
    >
      <div
        style={{ borderStyle: "solid", backgroundColor: "#4E3B31" }}
        className="cursor-random w-800 h-500 bl-10 bc-gray rounded-5 opacity-100"
      >
        <div className="navbar bg-primary border border-4 border-dark mt-2 m-0 d-flex justify-content-center align-items-center">
          <img
            className=""
            width="50px"
            src="/src/assets/images/beans.png"
          ></img>
          <span className="fs-2 text-light mx-3">\</span>
          <p
            style={{
              color: "white",
            }}
            className="m-0 fs-5 fw-bolder"
          >
            <span style={{ color: "#C69C6D" }}>Kahve</span> Diyarı
          </p>
        </div>

        <div className="row row-cols-3 align-items-center justify-content-center">
          {pizzas.map((p, key) => (
            <Foods key={key} pizzaObj={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
