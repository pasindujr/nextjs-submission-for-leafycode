import Head from "next/head";
import Link from "next/link";
import styles from "./Layout.module.css";
import Image from "next/image";
import { VscGithubInverted } from "react-icons/vsc";

export default function Layout({ children, title = "Rick And Morty" }) {
	return (
		<div className={styles.container}>
			<Head>
				<title>{title}</title>
			</Head>

			<header className={styles.header}>
				<Image
					className={styles.header_image}
					src="/rick-and-morty-falling.png"
					alt="Rick and Morty falling image"
					width={50}
					height={70}
					responsive="true"
				/>
				<Link href="/">
					<h1>Rick and Morty!</h1>
				</Link>
			</header>

			<main className={styles.main}>{children}</main>

			<footer className={styles.footer}>
				<div>Pasindu Ruwandeniya @ pasindujr.me</div>
				<a
					href="https://github.com/pasindujr/nextjs-submission-for-leafycode"
					target="_blank"
					rel="noopener noreferrer"
				>
					<VscGithubInverted className={styles.footer_github} />
				</a>
			</footer>
		</div>
	);
}
