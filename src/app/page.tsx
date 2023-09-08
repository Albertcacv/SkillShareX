import Hero from './components/home/hero/hero';
import Navbar from './components/home/navbar/navbar';

import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Navbar />
			<Hero />
		</div>
	);
}
