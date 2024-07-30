import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<nav>
			<ul className="flex flex-row h-16 items-center bg-white">
				<h2 className="mr-auto ml-[3%] text-xl">VALORANT </h2>
				<span className="flex flex-row gap-2 ml-auto mr-[1%]">
					<Link className="" to="/">
						Home
					</Link>
					<Link className="" to="/agents">
						Agents
					</Link>
					<Link className="" to="/maps">
						Maps
					</Link>
				</span>
			</ul>
		</nav>
	);
}
