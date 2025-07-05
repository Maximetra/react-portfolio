import NavLink from "./NavLink";

type NavContainerProps = {
    navbarDark: boolean;
}

export function NavContainer({ navbarDark }: NavContainerProps) {
  return (
    <nav className={"navbar navbar-expand-lg fixed-top navbarScroll " + (navbarDark ? "navbarDark" : "")}>
        <div className="container">
          <a className="navbar-brand" href="/">Maximetra</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <NavLink name="Home" />
                <NavLink name="About" />
                <NavLink name="Portfolio" />
                <NavLink name="Contact" />
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavContainer;