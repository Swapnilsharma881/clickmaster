import AnimatedNavItem from "./AnimatedNavItem"; // Import client-only component

const links = [
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  return (
    <nav className="flex gap-24">
      <ul className="flex gap-10 font-primary text-accent text-xs">
        {links.map((link, index) => (
          <AnimatedNavItem key={index} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
