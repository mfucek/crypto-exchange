type ButtonProps = {
	children: JSX.Element | string;
	onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
	return (
		<div
			className="p-4 px-5 rounded-2xl bg-defi-accent hover:bg-slate-700 cursor-pointer text-center text-white"
			onClick={onClick ? onClick : undefined}>
			<h4>{children}</h4>
		</div>
	);
};
