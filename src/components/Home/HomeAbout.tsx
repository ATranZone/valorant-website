export default function HomeAbout() {
	return (
		<div className="flex flex-col">
			<span>
				<span className="flex flex-row gap-10 justify-center mt-10">
					<section className="flex flex-col items-center p-6 bg-white w-96">
						<h2 className="font-bold text-black hover:text-red-500 h-10">
							What is VALORANT?
						</h2>
						<p>
							VALORANT is a free to play, 5v5 first person shooter made by Riot
							Games. The game features playable characters called agents with
							unique abilities to create dynamic team compositions where each
							game will always play out differently. With great skills and team
							work, players will be able to climb the ladder to become the
							ultimate rank of Radiant.
						</p>
					</section>
					<section className="flex flex-col items-center p-6 bg-white w-96">
						<h2 className="font-bold text-black hover:text-red-500 h-10">
							Riot Games
						</h2>
						<p>
							Riot Games is an American video game developer based in Los
							Angeles, California. They are a subsidiary of Tencent and are the
							creators of some of the biggest titles in PC gaming. Besides
							VALORANT, Riot Games is also home to League of Legends, Teamfight
							Tactics, and League of Legends: Wild Rift.
						</p>
					</section>
					<section className="flex flex-col items-center p-6 bg-white w-96">
						<h2 className="font-bold text-black hover:text-red-500 h-10">
							What Platforms is VALORANT on?
						</h2>
						<p>
							VALORANT originally released on PC in 2020 and has been growing at
							a fast rate ever since it launched. The Xbox and PlayStation
							consoles currently are holding open beta tests for the console
							version of VALORANT. Riot Games has not announced whether or not
							there will be a version coming out for mobile devices but there
							have been speculations and leaks spread across the internet.
						</p>
					</section>
				</span>
			</span>
		</div>
	);
}
