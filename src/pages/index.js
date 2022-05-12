import Head from "next/head";
import { useState } from "react";
import CountriesTable from "../components/CharactersTable/CharactersTable";
import Layout from "../components/Layouts/layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function HomePage({ characters }) {

	
	const [keyword, setKeyword] = useState("");
	const filteredCharacters = characters.filter((character) =>
		character.name.toLowerCase().includes(keyword) || character.species.toLowerCase().includes(keyword) || character.gender.toLowerCase().includes(keyword)
	);

	const onInputChange = (e) => {
		e.preventDefault();

		setKeyword(e.target.value.toLowerCase());
	};

	return (
		<Layout>
			<SearchInput
				placeholder="Search for a character"
				onChange={onInputChange}
			/>

			<CountriesTable character={filteredCharacters} />
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
