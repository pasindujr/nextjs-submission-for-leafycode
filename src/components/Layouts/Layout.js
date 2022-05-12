import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";

export default function Layout({ children, title = "Rick And Morty" }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
			</Head>

			<header className={styles.header}>
				<Link href="/">
					<h1>Rick and Morty!</h1>
				</Link>
			</header>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>
				Pasindu Ruwandeniya @ pasindujr.me
			</footer>
		</div>
	);
}
