import React, {KeyboardEventHandler, useState} from "react";
import Button from "./Button";

interface Prop{
    updateJSON : (value : any) => void;
}

function Searchbar({updateJSON} : Prop){
    let [selectedInput, setInput] = useState<string>("");
    let [selectedJSON, setJSON] = useState<any[]>([]);
    let [selectedDisplay, setDisplay] = useState<boolean>(false);

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        if(event.target.value == ""){
            setDisplay((prevState : boolean) => prevState && false);
        }
    }
    const search = () => {
        fetch('https://api.rawg.io/api/games?key=8306761b166a42c2be4d74fdbfb9e62c&search='+selectedInput+"&description=true")
            .then(response => response.json()).then(res => setJSON((prevState : any) => prevState = res.results));
        setDisplay((prevState : boolean) => prevState || true);
        console.log(selectedJSON);
    }

    window.onclick = () => setTimeout(() => {
        window.onclick = () => {selectedDisplay && setDisplay((prevState : boolean) => prevState && false)}
    }, 1000);

    function strip(input : string) {
        const doc = new DOMParser().parseFromString(input, 'text/html');
        return doc.body.textContent || '';
    }

    function handleEnter(event : React.KeyboardEvent<HTMLInputElement>){
        if(event.key == "Enter"){
            search();
        }
    }

    return <>
        <div className="d-flex ms-0 input-group" style = {{zIndex : "10"}}>
            <div>
                <input placeholder="Look for some games!" className="form-control border-secondary"
                       onChange={changeInput} onKeyUp={handleEnter}/>
                {
                    selectedDisplay &&
                    <div className="overflow-auto bg-light border border-top-0 border-secondary-subtle" style=
                        {{
                            display: "block",
                            position: "absolute",
                            maxHeight: "200px",
                            width: "100%",
                            zIndex: "3",
                            padding: "1px"
                        }}>
                        {selectedJSON.map((item: any, index) =>
                            <div key = {index} className = "d-flex justify-content-between border btn mx-0 px-2">
                                <a href="#" className = "text-secondary" style={{display: "contents", fontSize: "10px"}}
                                   key={index}> {item.name} </a>
                                <Button dim = {"15px"} symbol = {"+"} updateState={() => {
                                    fetch('https://api.rawg.io/api/games/'+ selectedJSON[index].id +'?key=8306761b166a42c2be4d74fdbfb9e62c')
                                        .then(response => response.json()).then(res => {
                                            const disc = strip(res.description);
                                            updateJSON([selectedJSON[index], disc]);
                                        })
                                }}/>
                            </div>
                        )}
                    </div>
                }

            </div>
            <button className="btn btn-outline-secondary" onClick={search}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-search" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </div>
    </>;
}

export default Searchbar;