import Logo from "./components/Logo/Logo";
import MenuIcon from "./components/MenuIcon/MenuIcon";
import NavButtons from "./components/NavButtons/NavButtons";
import ShopButton from "./components/ShopButton/ShopButton";

function Header() {
  return (
    <div className="nav">
      <div className="nav-bar">
        <Logo />
        <ShopButton />
        <MenuIcon />
        <NavButtons />
      </div>
    </div>
  );
}

export default Header;
