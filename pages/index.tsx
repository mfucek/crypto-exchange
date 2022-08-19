import type { NextPage } from 'next';
import { Container } from '../components/Container';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Swapper } from '../components/Swapper';

const Home: NextPage = () => {
	return (
		<div className={'flex flex-col h-[100vh] bg-defi-app text-red'}>
			<Header />
			<Container>
				<Swapper />
			</Container>
			<Footer />
		</div>
	);
};

export default Home;
