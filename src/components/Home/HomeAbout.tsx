export default function HomeAbout() {
	return (
		<div className="flex flex-col">
			<span>
				<span className="flex flex-row gap-20 justify-center">
					<section className="transition duration-300 flex flex-col items-center p-6 bg-white w-96 group hover:scale-105">
						<h2 className="transition font-bold text-black group-hover:text-red-500 h-10">
							What is VALORANT?
						</h2>
						<p>
							VALORANT is a free to play, 5v5 first person tactical shooter made
							by Riot Games. The game features playable characters called agents
							with unique abilities to create dynamic team compositions where
							each game will always play out differently. With great skills and
							team work, players will be able to climb the ladder to become the
							ultimate rank of Radiant.
						</p>
					</section>
					<section className="transition duration-300 flex flex-col items-center p-6 bg-white w-96 group hover:scale-105">
						<h2 className="transition font-bold text-black group-hover:text-red-500 h-10">
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
					<section className="transition duration-300 flex flex-col items-center p-6 bg-white w-96 group hover:scale-105">
						<h2 className="transition font-bold text-black group-hover:text-red-500 h-10">
							What Platforms is VALORANT on?
						</h2>
						<p>
							VALORANT is currently available to play on PC, PlayStation 5, and
							Xbox Series X and Series S consoles. Riot Games is currently
							developing the mobile version of VALORANT with an unknown release
							date.
						</p>
					</section>
				</span>
			</span>
		</div>
	);
}
