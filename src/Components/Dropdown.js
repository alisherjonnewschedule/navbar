import { useState } from 'react';

export const Dropdown = ({ title, children }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className='dropdown'>
			<div className='dropdown-title' onClick={() => setOpen(!open)}>
				{title}
			</div>
			{open && <div className='dropdown-list'>{children}</div>}
		</div>
	);
};

export const DropdownItem = ({ children }) => {
	return <div className='dropdown-list-item'>{children}</div>;
};
