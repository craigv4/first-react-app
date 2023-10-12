import Card from './Card';
import './css/CardList.css';

const CardList = ({robots}) => {
	return (
		<div className="CardList">
			{robots.map((user, i) => {
				return (
					<Card
						key={i}
						id={robots[i].id}
						name={robots[i].name}
						email={robots[i].email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
