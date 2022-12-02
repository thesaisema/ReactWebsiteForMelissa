import './NavBar.css' 

export default function NavBar() {
    const path = window.location.pathname
    return (
        <nav className = "nav">
            <a href = "/" className = "site-title">
            <div id = 'daisy'>
                <img href = "/" src = "./ImagesForReact/daisy.png"></img>
            </div> 

            </a>
            <ul>
                <li className = "active">
                    </li>
                    <a href = "/Melissa">Melissa</a>
                    <li>
                    </li>
                <li className = "active">
                </li>
                    <a href = "/Sainimere">Sainimere</a>
            </ul>
        </nav>
    )
}