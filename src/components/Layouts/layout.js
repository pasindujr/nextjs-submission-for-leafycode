import Head from "next/head";
import styles from './Layout.module.css';

export default function Layout({children, title = "Ammo Asia"}) {
    return (
        <div className={styles.container}>
			<Head>
				<title>{title}</title>
			</Head>

            <header className={styles.header}>
                <h1>Ammo Asia!</h1>
            </header>

			<main className={styles.main}>
			{children}
			</main>

			<footer className={styles.footer}>
				PASINDUJR.ME
			</footer>

		</div>
    )
}