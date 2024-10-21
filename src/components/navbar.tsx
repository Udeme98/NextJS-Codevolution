import NavLinks from "./nav-links";
import NavSearch from "./nav-search";

const Navbar = () => {
  console.log("Navbar Rendered");
  return (
    <div>
      <NavLinks />
      <NavSearch />
    </div>
  );
};
export default Navbar;
