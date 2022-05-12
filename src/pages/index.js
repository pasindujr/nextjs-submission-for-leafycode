import Head from "next/head";
import Layout from "../components/Layouts/layout";
import SearchInput from "../components/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function HomePage({ countries }) {

	return ( <Layout>
				<div className={styles.counts}>
					found {countries.length} countries
				</div>

				<SearchInput placeholder="Search for country"/>
			</Layout> 
	);
}

export const getStaticProps = async () => {
	const res = await fetch("https://restcountries.com/v3.1/region/asia");
	const countries = await res.json();

	return {
		props: {
			countries,
		},
	};
};
