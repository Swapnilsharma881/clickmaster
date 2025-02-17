import Link from "next/link";

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
          <li key={index}>
            <Link href={link.path}>{link.name}</Link> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
