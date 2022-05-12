import Head from "next/head";
import CountriesTable from "../components/CharactersTable/CharactersTable";
import Layout from "../components/Layouts/layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function HomePage({ characters }) {
	return (
		<Layout>
			<SearchInput placeholder="Search for a character" />

			<CountriesTable character={characters} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch("https://rickandmortyapi.com/api/character");
	const characters = await res.json();
	const characterInformation = characters.results.map((character) => ({
		name: character.name,
		species: character.species,
		gender: character.gender,
	}));
	return {
		props: {
			characters: characterInformation,
		},
	};
};
