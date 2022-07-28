import { Product } from "../Product";
import { ShowCase } from "./style";
import "./style.css";
export const ProductsList = ({
  productList,
  setAddCart,
  addCart,
  setSum,
  sum,
  listFilter,
  notify,
}) => {
  return (
    <ShowCase>
      {listFilter.length === 0
        ? productList.map((elem) => (
            <Product
              key={elem.id}
              name={elem.name}
              category={elem.category}
              price={elem.price}
              img={elem.img}
              setAddCart={setAddCart}
              addCart={addCart}
              setSum={setSum}
              sum={sum}
              notify={notify}
            />
          ))
        : listFilter.map((elem) => (
            <Product
              key={elem.id}
              name={elem.name}
              category={elem.category}
              price={elem.price}
              img={elem.img}
              setAddCart={setAddCart}
              addCart={addCart}
              setSum={setSum}
              sum={sum}
              notify={notify}
            />
          ))}
    </ShowCase>
  );
};
