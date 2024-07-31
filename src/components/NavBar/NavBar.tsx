import { Link } from "react-router-dom";
export default function NavBar() {
	return (
		<nav className="fixed top-0 w-[100%]">
			<ul className="flex flex-row h-16 items-center bg-white">
				<h2 className="mr-auto ml-[3%] text-xl">VALORANT </h2>
				<span className="flex flex-row gap-4 ml-auto mr-[1%]">
					<Link className="transition duration-100 hover:scale-110" to="/">
						Home
					</Link>
					<Link
						className="transition duration-100 hover:scale-110"
						to="/agents"
					>
						Agents
					</Link>
					<Link className="transition duration-100 hover:scale-110" to="/maps">
						Maps
					</Link>
				</span>
			</ul>
		</nav>
	);
}
