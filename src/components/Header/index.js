import "./style.css";
import companyLogo from "../../logoKenzie.svg";
function Header({ setText, filter, text }) {
  return (
    <>
      <img src={companyLogo} alt="Logo" />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(e) => {
            setText(e.target.value);
            filter(text);
          }}
          onKeyDown={() => filter(text)}
        />
        <button
          onClick={() => {
            filter(text);
          }}
        >
          Pesquisar
        </button>
      </form>
    </>
  );
}
export default Header;
