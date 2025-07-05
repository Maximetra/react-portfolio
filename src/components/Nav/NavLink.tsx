type NavLinkProps = {
    name: string;
}

export function NavLink({ name }: NavLinkProps) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={`#${name.toLowerCase()}`}>{name}</a>
        </li>
  )
}

export default NavLink;