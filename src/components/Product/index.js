import { CardFood } from "./style";
import "./style.css";

export const Product = ({
  img,
  name,
  category,
  price,
  setAddCart,
  addCart,
  setSum,
  sum,
  notify,
}) => {
  const count = (value) => {
    setSum(sum + value);
  };

  return (
    <CardFood className="cardFood">
      <div>
        <img src={img} alt={"foto" + name} />
      </div>
      <h2>{name}</h2>
      <p>{category}</p>
      <span>{"R$ " + price.toFixed(2)}</span>
      <button
        onClick={() => {
          if (addCart.find((elem) => elem.name === name) === undefined) {
            setAddCart([{ img, name, category, price }, ...addCart]);
            count(price);
          } else {
            notify();
          }
        }}
      >
        Adicionar
      </button>
    </CardFood>
  );
};
