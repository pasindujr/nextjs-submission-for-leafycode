import Head from "next/head";
import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
			<Head>
				<title>Next App</title>
			</Head>

            <header className={styles.header}>
                <h1>Ammo Asia!</h1>
            </header>

			<main className={styles.main}>
			{children}
			</main>

			<footer className={styles.footer}>
				footer
			</footer>

		</div>
    )
}

export default Layout;