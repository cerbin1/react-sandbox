import logo from "../assets/logo.jpg";

export default function Header({ cartLength, onCartClick }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <button onClick={onCartClick}>Cart ({cartLength})</button>
    </div>
  );
}
