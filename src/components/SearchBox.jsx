import './css/SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className="SearchBox">
			<input
				type="search"
				placeholder="Search Robots"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
