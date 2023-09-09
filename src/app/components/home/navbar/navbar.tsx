import StartedButton from './button';
import styles from './navbar.module.css';

const Navbar = () => {
	return (
		<header>
			<nav className={styles.nav}>
				<span>SkillShareX</span>

				<ul className={styles.navList}>
					<li className={styles.navItem}>How it works</li>
					<li className={styles.navItem}>Rating</li>
					<li className={styles.navItem}>FAQ</li>
				</ul>

				<StartedButton href='/session/register' />
			</nav>
		</header>
	);
};

export default Navbar;

//TODO: Navigation in page
