import NavBar from "../NavBar/NavBar";
import HomeAbout from "./HomeAbout";
export default function Home() {
	return (
		<>
			<div className="flex flex-col">
				<NavBar />
				<span className="h-64 flex items-center justify-center">
					<section>
						<h3 className="text-xl text-white font-bold">
							A 5v5 Tactical Shooter
						</h3>
					</section>
				</span>
				<HomeAbout />
			</div>
		</>
	);
}
