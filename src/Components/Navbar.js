import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem } from './Dropdown';

const Navbar = ({ status, logOut }) => {
	return (
		<header className='nav-bar'>
			{!status ? (
				<h1>Please login</h1>
			) : (
				<>
        <Link to='/'>
          Home
        </Link>
					<Dropdown title={`${status} 1`}>
						<Link to={`${status}/1/1`}>
							<DropdownItem>{`${status} 1.1 `}</DropdownItem>
						</Link>
						<Link to={`${status}/1/2`}>
							<DropdownItem>{`${status} 1.2 `}</DropdownItem>
						</Link>
						<Link to={`${status}/1/3`}>
							<DropdownItem>{`${status} 1.3 `}</DropdownItem>
						</Link>
					</Dropdown>
					<Dropdown title={`${status} 2`}>
						<Link to={`${status}/2/1`}>
							<DropdownItem>{`${status} 2.1 `}</DropdownItem>
						</Link>
						<Link to={`${status}/2/2`}>
							<DropdownItem>{`${status} 2.2 `}</DropdownItem>
						</Link>
						<Link to={`${status}/2/3`}>
							<DropdownItem>{`${status} 2.3 `}</DropdownItem>
						</Link>
					</Dropdown>
					<Dropdown title={`${status} 3`}>
						<Link to={`${status}/3/1`}>
							<DropdownItem>{`${status} 3.1 `}</DropdownItem>
						</Link>
						<Link to={`${status}/3/2`}>
							<DropdownItem>{`${status} 3.2 `}</DropdownItem>
						</Link>
						<Link to={`${status}/3/3`}>
							<DropdownItem>{`${status} 3.3 `}</DropdownItem>
						</Link>
					</Dropdown>
					<div
						onClick={() => {
							if (window.confirm('Are you sure to log out')) {
								logOut();
							}
						}}
					>
						Log Out
					</div>
				</>
			)}
		</header>
	);
};

export default Navbar;
