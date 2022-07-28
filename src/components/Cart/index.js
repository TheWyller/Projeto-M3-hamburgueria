import { CartShowCase } from "./style";
import "./style.css";

export const Cart = ({ addCart, setAddCart, setSum, sum }) => {
  const removeCart = (value) => {
    setAddCart(addCart.filter((elem) => elem.id !== value));
  };
  const count = (value) => {
    setSum(sum - value);
  };

  return (
    <CartShowCase>
      <h2 className="cartTitle">Carrinho de compras</h2>
      <section className="containerCart">
        {addCart.length !== 0 ? (
          addCart.map((elem, i) => (
            <div key={i} className="cartProduct">
              <img src={elem.img} alt={"foto" + elem.name} />
              <div>
                <h2>
                  {elem.name.length > 10
                    ? `${elem.name.slice(0, 10)}..`
                    : elem.name}
                </h2>
                <p>{elem.category}</p>
              </div>
              <button
                id={(elem.id = i)}
                onClick={() => {
                  removeCart(i);
                  count(elem.price);
                }}
              >
                Remover
              </button>
            </div>
          ))
        ) : (
          <section className="emptyMessage">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione itens</p>
          </section>
        )}
      </section>
    </CartShowCase>
  );
};
