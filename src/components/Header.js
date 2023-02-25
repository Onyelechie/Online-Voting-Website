import '../styles/header.css'
import { Link } from 'react-router-dom'

export default function Header() {
	return (
		<header>
			<div className='theBar'>
				
				<div className='pages'>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/elections'>Elections</Link>
						
					</li>
					<li>
						<Link to='/profile'>Profile</Link>	
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
				</div>
				<div className='logins'>
						{/* <Link to={<About />}>About</Link> */}
					login
				</div>

			</div>
			
			<h1><b>The Voting Range</b></h1>
			<p>Created alongside Dr. Eberechukwu(Creative Director), Dr. Niyonkad(Chief Executive Director)</p>
		</header>
	)
}