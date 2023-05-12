
import "../styles/home.css"
function genRandom() {
    return Math.floor(Math.random() * 84523);
}

export default function Home(){
    return(
        <div className="WelcomeUser">
            <div className="subheading">
                <h1 className="appTitle"><b>The Voting Range</b></h1>
                <p>Created alongside Dr. Eberechukwu(Creative Director), Dr. Niyonkad(Chief Executive Officer) Him Kardashian(Senior Developer)</p>
            </div>
            <div>Celia Mugisha<br />{genRandom()}</div>           
        </div>        
    )
}