import { createContext, FC, useContext, useState } from 'react';

export type Wallet = {
	exists: boolean;
	id?: string;
	name?: string;
};
export type SetWallet = (a: Wallet) => void;

const WalletContext = createContext(
	{} as {
		wallet: Wallet;
		setWallet: SetWallet;
	}
);

export const useWallet = () => useContext(WalletContext);

export const WalletProvider: FC<{ children: JSX.Element | JSX.Element[] }> = ({
	children
}) => {
	const [wallet, setWallet] = useState<Wallet>({ exists: false });

	return (
		<WalletContext.Provider
			value={{
				wallet: wallet,
				setWallet: (a) => {
					// a.loading = true;
					// await fetch()
					// a.loading = false;
					setWallet(a);
				}
			}}>
			{children}
		</WalletContext.Provider>
	);
};
