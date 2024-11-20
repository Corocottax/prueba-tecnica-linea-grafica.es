import { useEffect, useState } from "react";
import "./Catalogue.css";
import { API } from "../../utils/API";

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [listMode, setListMode] = useState(true);

  useEffect(() => {
    API({
      endpoint: "/products.php",
      auth: localStorage.getItem("token"),
    }).then(({ response }) => setProducts([...response.products]));
  }, []);

  return (
    <div>
      <div className="mode">
        {listMode ? (
          <button onClick={() => setListMode(false)}>
            <img src="/cuadricula.png" />
          </button>
        ) : (
          <button onClick={() => setListMode(true)}>
            <img src="/lista.png" />
          </button>
        )}
      </div>
      <div className={listMode ? "list" : "cuad"}>
        {products.map((product) => (
          <div key={product.id}>
            {!listMode && <img src={product.picture} />}
            <h3>{product.name}</h3>
            <p>{product.price.toFixed(2)} €</p>
            <p>{product.priceWithoutDiscount.toFixed(2)} €</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
