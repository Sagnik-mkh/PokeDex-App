// StatsTable.jsx
import React from "react";
import Capitalize from "../../Helper/Capitalize";

const MAX_BLOCKS = 15; // how many rows per column
const MAX_STAT_VALUE = 255; // Pokémon base stats max (for scaling)

export default React.memo(function StatsTable({ stats }) {
	/**
	 * ----------------------
	 * Render the stats table
	 * ----------------------
	 * @param {array} stats - The stats of the pokemon
	 * @returns {JSX.Element} The stats table component
	 */
	return (
		<div className="p-6 w-full rounded-2xl bg-neutral-400">
			<h2 className="mb-6 text-gray-800">Stats</h2>

			<div className="flex justify-around w-full">
				{/* columns */}
				{stats.map((stat) => {
					const filledBlocks = Math.round(
						(stat.value / MAX_STAT_VALUE) * MAX_BLOCKS
					);

					return (
						<div
							key={stat.label}
							// flex-1 so columns share space, min-w-0 prevents overflow issues
							className="flex flex-col flex-1 items-center mx-2 w-full min-w-0 text-center"
						>
							{/* blocks (bottom-filled): use flex-col-reverse so idx=0 is bottom */}
							<div className="flex flex-col-reverse gap-1 w-full">
								{Array.from({ length: MAX_BLOCKS }).map(
									(_, idx) => {
										// since col is reversed, fill from idx=0 upward
										const isFilled = idx < filledBlocks;
										return (
											<div
												key={idx}
												className={`h-2 w-full ${
													isFilled
														? "bg-sky-500"
														: "bg-white"
												}`}
											/>
										);
									}
								)}
							</div>

							{/* label */}
							<span className="mt-1.5 text-center w-full text-[0.65rem] xl:text-xs font-semibold text-gray-800 text-wrap">
								{stat.label == "special-attack"
									? "Special Attack"
									: stat.label == "special-defense"
									? "Special Defence"
									: Capitalize(stat.label)}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
});
