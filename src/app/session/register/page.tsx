import Link from 'next/link';

import styles from './register.module.css';
export default function Register() {
	return (
		<div className={styles.container}>
			<section className={styles.register}>
				<article className={styles.info}>
					<span>SkillShareX</span>

					<h3 className={styles.infoTitle}>
						Meet awesome people and connect with them
					</h3>

					<p className={styles.infoDescription}>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
						recusandae deserunt nihil quod odit atque iusto voluptate
						voluptatibus id debitis illum, perspiciatis sed praesentium nam,
						officia, vero dolorem quibusdam sunt?
					</p>

					<div>
						<span>Already have an account?</span>
						<Link href='/session/login'>log in</Link>
					</div>
				</article>

				<article className={styles.formContainer}>
					<form action='' className={styles.form}>
						<ul className={styles.formList}>
							<li className={styles.formItem}>
								<label htmlFor='email'>Correo electrónico:</label>
								<input type='email' id='mail' name='user_mail' />
							</li>
						</ul>
					</form>
				</article>
			</section>
		</div>
	);
}
