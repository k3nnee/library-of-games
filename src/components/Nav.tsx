import Searchbar from "./Searchbar";

interface Prop{
    updateJSON : (value : any) => void,
    updateAbout : (value : any) => void,
    updateHome : (value : any) => void;
}

function Nav({updateJSON, updateAbout, updateHome} : Prop){
    return <>
        <nav className = "navbar navbar-expand-lg bg-light border-bottom border-opacity-100 py-1">
            <div className = "container-fluid justify-content-center justify-content-evenly">
                <div className = "d-flex">
                    <a className = "navbar-brand" href = "#" onClick = {updateHome}>
                        <img title = "logo" className = "img-fluid" src="src/assets/logo.png"></img>
                    </a>

                    <ul className = "navbar-nav flex-row">
                        <li key = "Home" className = "nav-item me-2 me-lg-0 mt-1" onClick = {updateHome}>
                            <a className = "nav-link" href = "/"> Home </a>
                        </li>
                        <li key = "About Me" className = "nav-item me-2 me-lg-0 mt-1" onClick = {updateAbout}>
                            <a className = "nav-link" href = "/"> About Me </a>
                        </li>

                    </ul>
                </div>
                <div className = "d-flex justify-content-center">
                    <Searchbar updateJSON = {updateJSON} />
                </div>
            </div>
        </nav>
    </>
}

export default Nav;