import HeaderLeftMenu from "./HeaderLeftMenu";
import HeaderSearchBar from "./HeaderSearchBar";

const Header = () => {
  return (
    <header className="header">
      <HeaderLeftMenu />
      <HeaderSearchBar />
    </header>
  );
};

export default Header;
