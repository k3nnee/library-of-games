interface Prop{
    items : any[],
    deleteExpand : () => void;
}

function ExpandedCard({items, deleteExpand} : Prop){
    return <>
        <div className = "container-fluid h-100 d-flex bg-dark bg-opacity-50 align-items-center justify-content-center"
             style = {{zIndex : "5", position : "absolute"}}>
            <div className="card my-1" style={{width: "25rem", height : "35rem"}}>
                <div className="card-header">
                    {items[0].name}
                </div>
                <img className="card-img-top" src={items[0].background_image}></img>
                <div className="card-body p-2">
                    <div className = "overflow-auto" style = {{maxHeight : "225px", fontSize : "12px"}}>
                        <p className = "my-1"> <strong> Release date: </strong> {items[0].released} </p>
                        <p className = "my-1"> <strong> Rating: </strong>{items[0].rating} </p>
                        <p className = "my-1"> <strong> Genres: </strong> {items[0].genres.map((item : any, index : number) =>
                            items[0].genres.length == 1 ? item.name : (index == items[0].genres.length - 1 ? "and " + item.name : item.name + ", "))
                        } </p>
                        <p className = "my-1"> <strong> Platforms: </strong> {items[0].platforms.map((item : any, index : number) =>
                            items[0].platforms.length == 1 ? item.platform.name : (index == items[0].platforms.length - 1 ? "and " + item.platform.name : item.platform.name + ", "))
                        } </p>
                        <p>
                            <strong> Description: </strong> {" " + items[1]}
                        </p>
                    </div>
                    <button className = "btn btn-outline-secondary mt-2 ms-1" onClick = {deleteExpand}> Collapse </button>
                </div>
            </div>
        </div>
    </>
}

export default ExpandedCard;