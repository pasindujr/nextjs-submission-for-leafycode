import Link from "next/link";
import Layout from "../components/Layouts/Layout";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function PageNotFound() {
	return (
		<Layout title="Invalid Page">
			<div className={styles.notfound_panel}>
				<div className={styles.notfound_rick}>
					<Image src="/lost.jpeg" width="1920" height="1090" />
				</div>
				<div className={styles.notfound_text}>
					Looks like you have lost your way, go back to{" "}
					<Link href="/">
						<span className={styles.notfound_link}>home</span>
					</Link>{" "}
					maybe?
				</div>
			</div>
		</Layout>
	);
}
