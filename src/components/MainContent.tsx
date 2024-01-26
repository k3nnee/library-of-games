import VerticalNav from "./VerticalNav"
import Card from "./Card"
import React, {useState} from "react";
import ExpandedCard from "./ExpandedCard";

interface Prop{
    gameCollection : any[],
    removeCard : (index : number) => void;
}

function MainContent({gameCollection, removeCard} : Prop){
    let [selectedIndex, setIndex] = useState<number>(0);
    let [selectedDisplay, setDisplay] = useState<boolean>(false);

    function showExpand(index : number){
        setIndex(index);
        setDisplay((prevState : boolean) => prevState || true);
    }

    function deleteExpand(){
        setDisplay((prevState : boolean) => prevState && false);
    }
    return <>
        {selectedDisplay && <ExpandedCard items = {gameCollection[selectedIndex]} deleteExpand = {deleteExpand}/> }
        <div className = "container-fluid d-flex row h-100 vw-100 pe-0">
            <div className = "col-auto col-sm-2 bg-light border-end border-opacity-100 mx-0 px-0 vh-100 overflow-auto">
                <VerticalNav items = {gameCollection} showExpand = {showExpand}/>
            </div>

            <div className = "col mx-0 my-3 px-0 overflow-auto">
                <div className = "container row justify-content-md-start justify-content-sm-evenly justify-content-center mx-auto">
                    {gameCollection.map((item, index) =>
                            <div key = {index} className = " col-auto">
                                <Card items = {item} removeCard = {removeCard} index = {index} showExpand = {showExpand}/>
                            </div>
                    )}
                </div>
            </div>
        </div>
    </>
}

export default MainContent;