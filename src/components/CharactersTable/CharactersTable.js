import Link from "next/link";
import styles from "./CharactersTable.module.css";

export default function CharacterTable({ character }) {
	return (
		<div>
			<div className={styles.heading}>
				<div className={styles.heading_flag}></div>
				<button className={styles.heading_name}>
					<div>Name</div>
				</button>

				<button className={styles.heading_species}>
					<div>Species</div>
				</button>
				<button className={styles.heading_gender}>
					<div>Gender</div>
				</button>
			</div>

			{character.map((character, index) => {
				return (
					<Link href={`/character/${character.id}`}>
						<div className={styles.row} key={index}>
							<div className={styles.flags}>
								<img src={character.image} alt={character.name} />
							</div>
							<div className={styles.name}>{character.name}</div>
							<div className={styles.species}>{character.species}</div>
							<div className={styles.gender}>{character.gender}</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}
