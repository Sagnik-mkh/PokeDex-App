import { SiGithub, SiYoutube } from "react-icons/si";
import { GiPokecog } from "react-icons/gi";

const icons = {
	github: SiGithub,
	youtube: SiYoutube,
	pokemon: GiPokecog, // placeholder Pokémon icon
};

export default function Icons({ iconName, size = "2em", color = "black" }) {
	const IconComponent = icons[iconName];

	// If icon doesn't exist, return null or a fallback UI
	if (!IconComponent) return null;

	return <IconComponent size={size} color={color} />;
}
