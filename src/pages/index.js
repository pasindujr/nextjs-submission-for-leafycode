import { useState } from "react";
import CharactersTable from "../components/CharactersTable/CharactersTable";
import Layout from "../components/Layouts/Layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function HomePage({ characters }) {
	const [keyword, setKeyword] = useState("");
	const filteredCharacters = characters.filter(
		(character) =>
			character.name.toLowerCase().includes(keyword) ||
			character.species.toLowerCase().includes(keyword) ||
			character.gender.toLowerCase().includes(keyword)
	);

	const onInputChange = (e) => {
		e.preventDefault();

		setKeyword(e.target.value.toLowerCase());
	};

	return (
		<Layout>
			<div className={styles.inputContainer}>
				<div className={styles.count}>Found {characters.length} characters</div>

				<div className={styles.input}>
					<SearchInput
						placeholder="Search for a character"
						onChange={onInputChange}
					/>
				</div>
			</div>

			<CharactersTable character={filteredCharacters} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const res = await fetch("https://rickandmortyapi.com/api/character");
	const characters = await res.json();
	const characterInformation = characters.results.map((character) => ({
		id: character.id,
		name: character.name,
		species: character.species,
		gender: character.gender,
		status: character.status,
		location: character.location,
		image: character.image,
	}));
	return {
		props: {
			characters: characterInformation,
		},
	};
};
