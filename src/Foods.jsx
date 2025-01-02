function foods({ pizzaObj }) {
  return (
    <div
      className="card w-200 m-3 h-150
       d-flex justify-content-center align-items-center
       bg-dark"
    >
      <img
        style={{ width: "75px" }}
        className="card-img-top mt-3"
        src={"/src/assets/images/" + pizzaObj.image}
      ></img>
      <div className="w-200 list-group bg-secondary mt-2 chgreen">
        <li className="card-title text-light bg-danger text-center m-0 list-group-item">
          <h5 className="m-0">{pizzaObj.title}</h5>
        </li>
        <a className="text-bg-primary text-center list-group-item chgreen">
          {pizzaObj.price} TRY
        </a>
      </div>
    </div>
  );
}

export default foods;
