import Button from './button';
import styles from './hero.module.css';

const Hero = () => {
	return (
		<main className={styles.hero}>
			<h1>SkillShareX</h1>
			<p className={styles.paragraph}>
				An online platform for skill sharing, where people can learn and teach a
				variety of skills, connecting the global community in a collaborative
				learning environment.
			</p>
			<Button />
		</main>
	);
};

export default Hero;
