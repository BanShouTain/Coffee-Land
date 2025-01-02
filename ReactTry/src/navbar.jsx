import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/scss/free/_variables.scss";
import "./sp.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar sp-brown-light opacity-95 h-125">
        <div className="ms-5">
          <img
            className="me-3"
            height={"75px"}
            src="/src/assets/images/logo.png"
          ></img>
          <a className="text-light fs-4">Kahve Diyarı</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
