import { FC } from 'react';

export const Container: FC<any> = ({ children }) => {
	return (
		<>
			<div className="px-8 py-4 flex-grow">{children}</div>
		</>
	);
};
