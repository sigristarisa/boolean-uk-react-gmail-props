import HeaderLeftMenu from "./HeaderLeftMenu";
import HeaderSearchBar from "./HeaderSearchBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <HeaderLeftMenu />
      <HeaderSearchBar />
    </header>
  );
};

export default Header;
