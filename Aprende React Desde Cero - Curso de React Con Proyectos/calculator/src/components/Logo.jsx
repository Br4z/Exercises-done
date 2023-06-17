import '../styles/Logo.css';


function Logo({ source, name }) {
	return (
		<div className='logo-container'>
			<img
				className='logo'
				src={source}
				alt={`${name} logo`}
			/>
		</div>
	);
};

export default Logo;
