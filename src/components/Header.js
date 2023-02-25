import '../styles/Header.css'

export default function Header() {
	return (
		<header className='header'>
			<div>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#'>About</a>
				</li>
			</div>
			<h1 className='title'>The Voting Range</h1>
			<p>Created alongside Dr. Eberechukwu(Creative Director), Dr. Niyonkad(Chief Executive Director)</p>
		</header>
	)
}