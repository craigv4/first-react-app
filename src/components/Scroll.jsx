const Scroll = (props) => {
	return (
		<div
			style={{
				overflowY: 'scroll',
				// border: 'solid black',
				height: '500px',
				'scrollbar-color': '#00b09b',
			}}>
			{props.children}
		</div>
	);
};

export default Scroll;
