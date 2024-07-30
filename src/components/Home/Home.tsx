import NavBar from "../NavBar/NavBar";
import HomeAbout from "./HomeAbout";
export default function Home() {
	return (
		<>
			<div className="flex flex-col">
				<NavBar />
				<HomeAbout />
			</div>
		</>
	);
}
