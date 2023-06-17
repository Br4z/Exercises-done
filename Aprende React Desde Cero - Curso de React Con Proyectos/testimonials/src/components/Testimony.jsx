import '../styles/Testimony.css';


function Testimony(props) {

	const strongnify = text => {
		const separatedText = text.split("**");

		return separatedText.map((part, i) =>
			i % 2 === 1 ? <strong key={i}>{part}</strong> : part
		);
	};

	return (
		<div className='testimony-container'>
			<img
				className='testimony-photo'
				src={require(`../images/testimony-${props.name}.jpg`)}
				alt={props.name + ' photo'}
			/>
			<div className='testimony-text-container'>
				<p className='person-name'><strong>{props.name}</strong> in {props.country}</p>
				<p className='person-job'>{props.job} at <strong>{props.enterprise}</strong></p>
				<p className='testimony-text'>
					"{strongnify(props.testimony)}"
				</p>
			</div>
		</div>
	);
};

export default Testimony;
