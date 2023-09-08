import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';

const circe = localFont({ src: '../fonts/CRC55.woff' });

export const metadata: Metadata = {
	title: 'SkillShareX',
	description: 'Share your skills and help other people',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={circe.className}>{children}</body>
		</html>
	);
}
