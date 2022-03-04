import React from "react";
import Product from "./product";
class Products extends React.Component {
  state = {
    products: [
      {
        id: 1,
        title: "shirt",
        inStock: 15,
        quantity: 0,
        imgSrc:
          "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/91F89859AE004153A24E7852F8666F0F/10093625_r.jpg?fit=inside|540:540",
        price: 20 + "₪"
      },
      {
        id: 2,
        title: "pants",
        inStock: 30,
        quantity: 0,
        imgSrc:
          "https://www.berluti.com/on/demandware.static/-/Sites-masterCatalog_Berluti/default/dw5b7aa9db/images/R16TCU57-002_slim-fit-cotton-chino-pants_pleiades_berluti_01.jpg",
        price: 50 + "₪"
      },
      {
        id: 3,
        title: "scarff",
        inStock: 12,
        quantity: 0,
        imgSrc:
          "https://thumbs.dreamstime.com/b/scarff-cotton-cloth-black-white-85266978.jpg",
        price: 10 + "₪"
      },
      {
        id: 4,
        title: "hat",
        inStock: 0,
        quantity: 0,
        imgSrc:
          "https://m.media-amazon.com/images/I/61+5hBQrXHL._AC_UL1000_.jpg",
        price: 15 + "₪"
      },
      {
        id: 5,
        title: "bag",
        inStock: 43,
        quantity: 0,
        imgSrc:
          "https://dynamic.zacdn.com/KdCzk-cqDgwR0RDx_QJUeXcEOs0=/fit-in/346x500/filters:quality(95):fill(ffffff)/https://static-my.zacdn.com/p/tropicana-life-6610-9488412-1.jpg",
        price: 100 + "₪"
      }
    ]
  };

  delete = (id) => {
    const newfilterArr = this.state.products.filter((product) => {
      return product.id !== id;
    });
    console.log(newfilterArr);
    this.setState({
      products: newfilterArr
    });
  };

  handleQuantityChange = (id, action) => {
    const quantity = this.state.products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity:
            action === "increase" ? product.quantity + 1 : product.quantity - 1
        };
      }

      return product;
    });
    this.setState({
      products: quantity
    });
  };
  minParent = () => {};

  render() {
    const { products } = this.state;

    if (!products.length) {
      return <div>no products</div>;
    }
    return (
      <div>
        <br />
        <br />
        <h2 className="d-flex justify-content-center flex-wrap">Your Cart</h2>
        <div
          className="d-flex justify-content-center flex-wrap"
          style={{ margin: 50 }}
        >
          {products.map((product, index) => {
            return (
              <Product
                add={() => this.handleQuantityChange(product.id, "increase")}
                min={() => this.handleQuantityChange(product.id, "decrease")}
                key={product.id}
                product={product}
                index={index}
                onDelete={() => this.delete(product.id)}
              ></Product>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
