import React from "react";

const Cell = ({ id, value, onClickProps }) => {
	return (
		<div onClick={() => onClickProps(id)} className="cell">
			{value}
		</div>
	);
};

export default Cell;
