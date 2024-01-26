function AboutMe(){
    return <>
        <div className = "container-fluid d-flex justify-content-center m-5 vh-100">
            <img src = "src/assets/Me.jpeg" style = {{width : "11rem", height : "15rem"}} className = "mx-3"></img>
            <div className = "mx-3" style = {{width : "25rem", height : "50rem"}}>
                <p>
                        Hey everyone! Super stoked to share my very first React project – a cool video game library that's got the details on pretty much every game out there.
                        With web app, you can search, add, and delete the games you're into. And once you've added them, just click on the card to get its information!
                </p>
                <p>
                        Quick intro about me – I'm Kenny Tang, a sophomore at the University at Buffalo, majoring in computer science.
                        When I'm not coding, you'll find me hitting the gym, cooking, or catching the latest horror movies.
                        I enjoy new frameworks and tech build new projects.
                        Learning something new and comprehending it is a rewarding experience.
                        These projects are my way of tracking my growth as an individual, programmer, and computer scientist.
                </p>
                <p>
                        Feel free to connect with me on linkedin: <a className = "btn btn-outline-secondary mx-2" target = "_blank" href = "https://www.linkedin.com/in/kennytang04/"> View </a>
                </p>
            </div>
        </div>
    </>;

}

export default AboutMe;