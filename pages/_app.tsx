import type { AppProps } from 'next/app';
import { WalletProvider } from '../components/WalletContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WalletProvider>
			<Component {...pageProps} />
		</WalletProvider>
	);
}

export default MyApp;
