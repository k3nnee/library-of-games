
interface Prop{
    items : any[],
    removeCard : (index : number) => void,
    index : number,
    showExpand : (index : number) => void
}
function Card({items, removeCard, index, showExpand} : Prop){
    return <>
        <div className="card my-1" style={{width: "15rem", height : "25rem"}}>
            <div className="card-header">
                {items[0].name}
            </div>
            <div id = {"myCarousel" + index} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style = {{width: "15rem", maxHeight: "8rem"}}>
                    {items[0].short_screenshots.map((item : any, index : number) => (
                        index == 0 ?
                            <div className="carousel-item active">
                                <img className = "d-block w-100" src = {item.image} alt = {index.toString()}></img>
                            </div>
                            :
                            <div className="carousel-item">
                                <img className = "d-block w-100" src = {item.image} alt = {index.toString()}></img>
                            </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={"#myCarousel" + index} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={"#myCarousel" + index} data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
                <div className="card-body p-2">
                    <div className = "overflow-auto mt-0" style = {{maxHeight : "75%", fontSize : "12px"}}>
                        <p className = "my-1"> <strong> Release date: </strong> {items[0].released} </p>
                        <p className = "my-1"> <strong> Rating: </strong>{items[0].rating} </p>
                        <p className = "my-1"> <strong> Genres: </strong> {items[0].genres.map((item : any, index : number) =>
                            items[0].genres.length == 1 ? item.name : (index == items[0].genres.length - 1 ? "and " + item.name : item.name + ", "))
                        } </p>
                        <p className = "my-1"> <strong> Platforms: </strong> {items[0].platforms.map((item : any, index : number) =>
                            items[0].platforms.length == 1 ? item.platform.name : (index == items[0].platforms.length - 1 ? "and " + item.platform.name : item.platform.name + ", "))
                        } </p>
                    </div>
                    <button className = "btn btn-outline-secondary mt-2 me-1" onClick = {() => showExpand(index)}> Expand </button>
                    <button className = "btn btn-outline-secondary mt-2 ms-1" onClick = {() => removeCard(index)}> Remove </button>

                </div>
        </div>
    </>
}

export default Card;