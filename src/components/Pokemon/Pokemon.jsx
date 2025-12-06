import React, { useCallback } from "react";
import Card from "../Card/Card";
import { useNavigate } from "react-router";

export default React.memo(function Pokemon({
	pokemonId,
	pokemonName,
	pokemonType,
	pokemonImage,
	index = 0,
}) {
	/**
	 * ----------------------
	 * Navigate to the pokemon details page using react-router
	 * ----------------------
	 */
	const navigator = useNavigate();

	/**
	 * ----------------------
	 * Navigation handler
	 * ----------------------
	 */
	const onClickHandler = useCallback(
		function () {
			navigator(`/details/${pokemonName}`);
		},
		[pokemonName, navigator]
	);

	// stagger: 40ms * index (adjust as needed)
	const delayMs = Math.min(300, index * 40); // capping the delay so later items don't wait too long
	const style = { animationDelay: `${delayMs}ms` };

	/**
	 * ----------------------
	 * Render the pokemon card
	 * ----------------------
	 * @param {number} pokemonId - The id of the pokemon
	 * @param {string} pokemonName - The name of the pokemon
	 * @param {array} pokemonType - The type of the pokemon
	 * @param {string} pokemonImage - The image of the pokemon
	 * @returns {JSX.Element} The pokemon card component
	 */
	return (
		<Card
			imageUrl={pokemonImage}
			imageAlt={pokemonName}
			animation={"poke-enter"}
			animationStyle={style}
			title={pokemonName}
			cardId={pokemonId}
			badges={pokemonType}
			onClickHandler={onClickHandler}
		/>
	);
});
