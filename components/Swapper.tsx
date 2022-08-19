import { createRef, FC, useEffect, useState } from 'react';
import { Button } from './Button';
import { useWallet } from './WalletContext';

type Currency = {
	symbol: string;
	value_usd: number;
};

const Eth: Currency = { symbol: 'ETH', value_usd: 1686.51 };
const Dog: Currency = { symbol: 'DOG', value_usd: 0.0012 };

interface MultiInputProps {
	currency: Currency;
	onChange?: (a: number) => void;
	overrideValue?: number;
}

const MultiInput: FC<MultiInputProps> = ({
	currency,
	onChange,
	overrideValue
}) => {
	useEffect(() => {
		if (overrideValue && ref.current && typeof overrideValue === 'number') {
			ref.current.value = overrideValue.toFixed(2); //.toString();
		}
	});
	const ref = createRef<HTMLInputElement>();
	return (
		<>
			<div className="w-full bg-defi-dark border border-defi-border rounded-2xl p-4 text-white">
				<div className="inline-block mb-6">
					<div className="p-3 bg-defi-light rounded-full flex gap-3 items-end">
						<div className="bg-white rounded-full w-6 h-6 inline-block"></div>
						<h2 className="inline-block">{currency.symbol}</h2>
						<p className="inline-block">~$ {currency.value_usd}</p>
					</div>
				</div>
				<div className="flex px-3 items-end">
					<input
						ref={ref}
						type="text"
						placeholder="0.00"
						className="bg-transparent outline-none flex-1"
						onChange={(e) => {
							onChange && onChange(Number(e.currentTarget.value));
						}}
					/>
					<p className="flex-grow-0">Balance: 0</p>
				</div>
			</div>
		</>
	);
};

export const Swapper: FC<any> = () => {
	const [first, setFirst] = useState<Currency>(Dog);
	const [second, setSecond] = useState<Currency>(Eth);

	const [firstOverride, setFirstOverride] = useState<number | undefined>(
		undefined
	);
	const [secondOverride, setSecondOverride] = useState<number | undefined>(
		undefined
	);

	const { wallet, setWallet } = useWallet();

	return (
		<>
			<div className="w-full max-w-[400px] bg-defi-light mx-auto p-4 rounded-3xl text-white  flex flex-col gap-4">
				<h4>Swap</h4>
				{/* <p>{wallet.exists ? wallet.name : 'none'}</p> */}

				<div className="flex flex-col gap-2">
					<MultiInput
						currency={first}
						onChange={(a) => {
							setFirstOverride(undefined);
							setSecondOverride((a * first.value_usd) / second.value_usd);
						}}
						overrideValue={firstOverride}
					/>
					<MultiInput
						currency={second}
						onChange={(a) => {
							setSecondOverride(undefined);
							setFirstOverride((a * second.value_usd) / first.value_usd);
						}}
						overrideValue={secondOverride}
					/>
				</div>

				{wallet.exists ? (
					<>
						<Button
							onClick={() => {
								setWallet({ exists: true, id: 'string', name: 'string' });
							}}>
							Convert
						</Button>
					</>
				) : (
					<>
						<Button
							onClick={() => {
								let id = prompt(
									'Please enter your wallet ID:',
									'0x123412341234'
								);
								if (id) {
									setWallet({ exists: true, id: id, name: id });
								}
							}}>
							Connect to Wallet
						</Button>
					</>
				)}
			</div>
		</>
	);
};
