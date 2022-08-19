import { FC } from 'react';

export const Header: FC<any> = () => {
	return (
		<div className="w-full p-4 flex-grow-0">
			<a className="p-2 text-[12px] m-1 bg-defi-light hover:bg-defi-dark rounded-md text-white cursor-pointer">
				Home
			</a>
			<a className="p-2 text-[12px] m-1 bg-defi-light hover:bg-defi-dark rounded-md text-white cursor-pointer">
				About
			</a>
			<a className="p-2 text-[12px] m-1 bg-defi-light hover:bg-defi-dark rounded-md text-white cursor-pointer">
				Contact
			</a>
		</div>
	);
};
