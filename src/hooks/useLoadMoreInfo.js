import { useQuery } from "@tanstack/react-query";
import FetchPokeInfo from "../services/FetchPokeInfo";
import FetchAppendedInfo from "../services/FetchAppendedInfo";

/**
 * ----------------------
 * Custom hook to fetch the short info of a pokemon
 * ----------------------
 * @param {array} urls - The urls to fetch the short info of the pokemon
 * @param {array} array - This is to append the data to current state
 * @returns {object} The short info of the pokemon
 */
function useLoadMore(urls, setList) {
	/**
	 * ----------------------
	 * Fetch the short info of a pokemon
	 * ----------------------
	 * @param {array} urls - The urls to fetch the short info of the pokemon
	 * @returns {object} The short info of the pokemon
	 */
	const query = useQuery({
		queryKey: urls,
		queryFn: () => FetchAppendedInfo(urls, setList),
		enabled: !!urls,
		staleTime: 10 * 60 * 1000,
		cacheTime: 15 * 60 * 1000,
	});

	return query;
}

export default useLoadMore;
