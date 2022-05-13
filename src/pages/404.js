import Link from "next/link";
import Layout from "../components/Layouts/Layout";
import styles from "../styles/Home.module.css";

export default function PageNotFound() {
	return (
		<Layout>
			<div className={styles.notfound_panel}>
				<img className={styles.notfound_rick} src="/lost.jpeg" />
				<div className={styles.notfound_text}>
					Looks like you have lost your way, go back to{" "}
					<Link href="/">
						<span className={styles.notfound_link} home>
							home
						</span>
					</Link>{" "}
					maybe?
				</div>
			</div>
		</Layout>
	);
}
