import { AnchorProps } from '@/types';
import Link from 'next/link';
import styles from './button.module.css';

const StartedButton = ({ href }: AnchorProps) => {
	return (
		<button className={styles.button}>
			<Link href={href}>Get Started</Link>
		</button>
	);
};

export default StartedButton;
