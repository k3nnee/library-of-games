import Nav from "./components/Nav"
import MainContent from "./components/MainContent"
import AboutMe from "./components/AboutMe";
import React, {useState} from "react";

function App() {
    let [selectedJSON, setJSON] = useState<any>([]);
    let [selectedState, setState] = useState<boolean>(false);

    const updateJSON = (value : any) => {
        setJSON((prevState : any[]) => ([...prevState, value]));
        console.log(selectedJSON);
    }
    const updateAbout = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        event.preventDefault();
        setState((prevState : boolean) => prevState || true);
    }
    const updateHome = (event: React.MouseEvent<HTMLAnchorElement>) =>{
        event.preventDefault();
        setState((prevState : boolean) => prevState && false);
    }

    const removeCard = (num : number) =>{
        setJSON((prevState : any[]) => prevState.filter((item : any, index: number) => index != num));
    }
    return (
        <>
            <Nav updateJSON = {updateJSON} updateAbout = {updateAbout} updateHome = {updateHome}/>
            {!selectedState ?
                <div>
                    <MainContent gameCollection = {selectedJSON} removeCard = {removeCard}/>
                </div>
                :
                <div>
                    <AboutMe />
                </div>
            }
        </>
  )
}

export default App
