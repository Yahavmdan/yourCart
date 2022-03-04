import Cart from "./counter";

function Product({ product, index, onDelete, add, min }) {
  return (
    <div
      key={product.id}
      className="card bg-light"
      style={{ width: 350, margin: 10 }}
    >
      <img src={product.imgSrc} className="card-img-top" alt={product.title} />
      <div className="card-body bg-light">
        <h5 className="card-title">
          {index + 1}. {product.title}
        </h5>
        <div>Quantity {product.inStock}</div>

        <Cart
          addParent={add}
          minParent={min}
          counter={product.quantity}
          min={0}
          max={product.inStock}
        ></Cart>
        {product.inStock ? (
          <div style={{ color: "green" }}>Available!</div>
        ) : (
          <div style={{ color: "red" }}>Out of stock</div>
        )}
        <a
          href="#"
          className="btn btn-primary"
          style={{
            width: "150px",
            padding: 5,
            position: "relative",
            top: 10
          }}
        >
          {product.price}
        </a>
      </div>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete Product
      </button>
    </div>
  );
}

export default Product;
