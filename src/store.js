import { create } from "zustand";
import { POKEDEX_API_BASE_URL } from "./Helper/Constants";

export const useAppendedList = create((set) => ({
	list: [],
	setList: (newData) =>
		set((state) => {
			return {
				...state,
				list: [...state.list, ...newData],
			};
		}),
}));

export const useApiListUrl = create((set) => ({
	pokeApiUrl: POKEDEX_API_BASE_URL,
	setApiUrl: (newUrl) =>
		set((state) => {
			return {
				...state,
				pokeApiUrl: newUrl,
			};
		}),
}));
