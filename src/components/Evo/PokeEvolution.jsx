import React from "react";
import EvoPokemon from "../Pokemon/EvoPokemon";

export default React.memo(function PokeEvolution({
	infoSuccess,
	infoData,
	evoSuccess,
}) {
	/**
	 * ----------------------
	 * Render the poke evolution
	 * ----------------------
	 * @param {boolean} infoSuccess - Whether the info data is success
	 * @param {array} infoData - The info data
	 * @param {boolean} evoSuccess - Whether the evo data is success
	 * @returns {JSX.Element} The poke evolution component
	 */
	return (
		<div className="container px-2 py-6 mx-auto rounded-lg max-w-2/3 bg-black/65">
			<h2 className="mb-6 ml-4 text-2xl text-white">Evolutions</h2>
			<div className="flex flex-col justify-center items-center xl:flex-row">
				{infoSuccess &&
					evoSuccess &&
					infoData.map((pokemon, idx) => {
						return (
							<div className="flex flex-col justify-around items-center basis-1/3 xl:flex-row">
								<EvoPokemon
									key={pokemon.name}
									pokemonId={pokemon.id}
									pokemonImage={pokemon.image2}
									pokemonName={pokemon.name}
									pokemonType={pokemon.types}
								/>
								<div className="hidden mb-12 text-8xl font-medium text-white xl:block xl:mb-24">
									{idx != infoData.length - 1 ? ">" : ""}
								</div>
								<div className="visible text-8xl font-medium text-white rotate-90 xl:hidden">
									{idx != infoData.length - 1 ? ">" : ""}
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
});
