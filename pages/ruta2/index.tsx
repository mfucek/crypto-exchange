import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
	return (
		<>
			<h1> test! </h1>
			<Link href={'/'} passHref>
				<a href="">Vrati me nazad</a>
			</Link>
		</>
	);
};

export default Page;
