import Logo from "./components/Logo/Logo";
import MenuIcon from "./components/MenuIcon/MenuIcon";
import NavButtons from "./components/NavButtons/NavButtons";
import ShopButton from "./components/ShopButton/ShopButton";
import NavButton from "./components/NavButtons/NavButton";

function Header() {
  return (
    <div className="nav">
      <div className="nav-bar">
        <Logo />
        <ShopButton />
        <MenuIcon />
        <NavButtons>
          <NavButton content="Servicii" />
          <NavButton content="Produse" />
          <NavButton content="Despre noi" />
          <NavButton content="Contact" />
        </NavButtons>
      </div>
    </div>
  );
}

export default Header;
