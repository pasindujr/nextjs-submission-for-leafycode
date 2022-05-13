import Layout from "../../components/Layouts/Layout";
import styles from "./character.module.css";

export default function Character(character) {
	return (
		<Layout title={character.character.name}>
			<div className={styles.container}>
				<div className={styles.details_panel}>
					<img
						src={character.character.image}
						alt={character.character.name}
					></img>

					<h1 className={styles.overview_name}>{character.character.name}</h1>
					<div className={styles.overview_species}>
						{character.character.species}
					</div>

					<div className={styles.overview_numbers}>
						<div className={styles.overview_gender}>
							<div className={styles.overview_label}>Gender</div>
							<div className={styles.overview_value}>
								{character.character.gender}
							</div>
						</div>
						<div className={styles.overview_status}>
							<div className={styles.overview_label}>Status</div>
							<div className={styles.overview_value}>
								{character.character.status}
							</div>
						</div>
						<div className={styles.overview_location}>
							<div className={styles.overview_label}>Location</div>
							<div className={styles.overview_value}>
								{character.character.location.name}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export const getStaticPaths = async () => {
	const res = await fetch("https://rickandmortyapi.com/api/character");
	const characters = await res.json();
	const paths = characters.results.map((character) => ({
		params: { id: character.id.toString() },
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const res = await fetch(
		`https://rickandmortyapi.com/api/character/${params.id}`
	);

	const character = await res.json();

	return {
		props: {
			character,
		},
	};
};
