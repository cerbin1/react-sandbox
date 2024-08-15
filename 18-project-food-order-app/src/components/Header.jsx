import logo from "../assets/logo.jpg";

export default function Header({ cartSize, onCartClick }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <button onClick={onCartClick}>Cart ({cartSize})</button>
    </div>
  );
}
