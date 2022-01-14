import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="mainNavbar">
            <div className="mainNavbarLogo">
                <div className="mainNavbarLogoImg"></div>
                <span>Password Manager<strong>.</strong></span>
            </div>
            <span>Home</span>
            <span>Login</span>
        </div>
    )
}

export {Navbar}