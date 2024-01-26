import React from "react"

interface Prop{
    items : any[],
    showExpand : (index : number) => void;
}

function VerticalNav({items, showExpand} : Prop){
    const Style = {
      fontSize : "11px"
    };
     return <>
        <nav className = "navbar bg-light py-0">
            <div className = "container-fluid px-0 px-1">
                {items.length == 0 &&
                    <div className = "container-fluid justify-content-center d-flex align-items-center px-0" style = {{marginTop : "120%"}}>
                        <p className = "nav-item text-secondary" style = {{fontSize : "12px"}}> Library is empty</p>
                    </div>
                }
                <ul className = "navbar-nav w-100">
                    {items.map( (item, index : number) =>
                        <li key = {index} className = "nav-item py-0 bg-light-subtle border my-1 btn btn-outline-secondary" onClick = {() => showExpand(index)}>
                            <span>
                                {window.innerWidth > 650 ?
                                    <div className = "d-flex align-items-center justify-content-center">
                                        <img title = "logo" className = "img-fluid me-2" src= {item[0].background_image}
                                             style = {{width : "25px", height : "15px"}} ></img>
                                        <a className = " nav-link" style = {Style} href = "/"> {item[0].name} </a>
                                    </div>
                                    :
                                    <a className = "btn btn-outline-secondary nav-link" href = "/">
                                        <img title = "logo" className = "img-fluid" src= {item[0].background_image}
                                             style = {{width : "25px", height : "15px"}} ></img>
                                    </a>
                                }

                            </span>
                        </li>
                    )}
                </ul>

            </div>
        </nav>
    </>

}

export default VerticalNav;
