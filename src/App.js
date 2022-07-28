import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ProductsList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import { Container, GlobalStyle } from "./components/style/global";

import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [productList, setProductList] = useState([]);
  const [addCart, setAddCart] = useState([]);
  const [sum, setSum] = useState(0);
  const [listFilter, setListFilter] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProductList(res))
      .catch((err) => console.log(err));
  }, []);

  const filter = (text) => {
    text.length > 0
      ? setListFilter(
          productList.filter((elem) =>
            elem.name.toLowerCase().includes(text.toLowerCase())
          )
        )
      : setListFilter(productList);
  };

  const notify = () =>
    toast.error("O item já foi selecionado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const success = () =>
    toast.success("Todos os itens foram deletados", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Container>
          <Header setText={setText} filter={filter} text={text} />
        </Container>
        <main>
          <ProductsList
            productList={productList}
            setAddCart={setAddCart}
            addCart={addCart}
            setSum={setSum}
            sum={sum}
            listFilter={listFilter}
            notify={notify}
          />

          <aside>
            <Cart
              addCart={addCart}
              setAddCart={setAddCart}
              setSum={setSum}
              sum={sum}
            />
            {addCart.length !== 0 && (
              <div className="allCart">
                <div>
                  <p>Total</p>
                  <span>R$ {sum.toFixed(2).split(".").join(",")}</span>
                </div>
                <button
                  onClick={() => {
                    setAddCart([]);
                    setSum(0);
                    success();
                  }}
                >
                  Remover todos
                </button>
              </div>
            )}
          </aside>
        </main>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
