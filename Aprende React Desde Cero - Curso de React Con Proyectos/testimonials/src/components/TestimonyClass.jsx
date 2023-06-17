import React from 'react';
import '../styles/Testimony.css';


class TestimonyClass extends React.Component {
	strongnify(text) {
		const separatedText = text.split("**");

		return separatedText.map((part, i) =>
			i % 2 === 1 ? <strong key={i}>{part}</strong> : part
		);
	};

	render() {
		return (
			<div className='testimony-container'>
				<img
					className='testimony-photo'
					src={require(`../images/testimony-${this.props.name}.jpg`)}
					alt={this.props.name + ' photo'}
				/>
				<div className='testimony-text-container'>
					<p className='person-name'><strong>{this.props.name}</strong> in {this.props.country}</p>
					<p className='person-job'>{this.props.job} at <strong>{this.props.enterprise}</strong></p>
					<p className='testimony-text'>
						"{this.strongnify(this.props.testimony)}"
					</p>
				</div>
			</div>
		);
	};
};

export default TestimonyClass;
