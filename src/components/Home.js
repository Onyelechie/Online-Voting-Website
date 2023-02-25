
import "../styles/home.css"
function genRandom() {
    return Math.floor(Math.random() * 84523);
}

export default function Home(){
    return(
        <div className="WelcomeUser">
            <div>Anne Debora Niyonkuru</div>

            <div>
                {genRandom()}
            </div>
           
        </div>

        
    )
}