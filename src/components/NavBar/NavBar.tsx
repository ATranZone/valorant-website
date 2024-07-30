import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<nav>
			<ul className="flex flex-row gap-2">
				<Link className="" to="/">
					Home
				</Link>
				<Link className="" to="/agents">
					Agents
				</Link>
				<Link className="" to="/maps">
					Maps
				</Link>
			</ul>
		</nav>
	);
}
