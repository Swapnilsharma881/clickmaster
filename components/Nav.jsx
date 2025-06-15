import Link from "next/link";

const links = [
  { name: "Contact", path: "/contact" },
  { name: "Portfolio", path: "/portfolio" },
];

const Nav = () => {
  return (
    <nav className="flex gap-24">
      <ul className="flex gap-10 font-primary text-accent text-xs tracking-wide uppercase">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="hover:text-black lg:text-[10px] transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
