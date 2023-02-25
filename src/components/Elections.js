import '../styles/elections.css'

export default function Elections(){
    return(
        <div className="elections">
            <p className="message">HAPPY VOTING</p>
            <div>
                <input type='text' name='search box' placeholder='Enter country name' autoComplete='on'/>
                <button>Search</button>
            </div>
        </div>
    )
}