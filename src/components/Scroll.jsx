const Scroll = (props) => {
	return (
		<div
			style={{
				overflow: 'scroll',
				// border: 'solid black',
				height: '600px',
			}}>
			{props.children}
		</div>
	);
};

export default Scroll;
