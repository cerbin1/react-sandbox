import logo from "../assets/logo.jpg";

export default function Header({ cartLength }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <button>Cart ({cartLength})</button>
    </div>
  );
}
