import NavBar from "../NavBar/NavBar";

export default function Home() {
	return (
		<>
			<div className="flex flex-col">
				<NavBar />
				<div className="flex flex-col">
					<section className="flex flex-col items-center p-6 bg-white w-96">
						<h2 className="font-bold">What is VALORANT?</h2>
						<p>
							VALORANT is a free to play, 5v5 first person shooter made by Riot
							Games. The game features playable agent characters with unique
							abilities to create dynamic team compositions where each game will
							always play out differently.
						</p>
					</section>
				</div>
			</div>
		</>
	);
}
