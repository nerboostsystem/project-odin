import { useEffect, useState } from "react";
import GameList from "../components/Game/Gamelist";
import Layout from "../components/Layout";
import { formatGameList, getYearlyGames } from "../util";

function YearlyGames() {
	const [data, setData] = useState<RawgGameResponse | null>(null);
	const [games, setGames] = useState<RawgGame[][] | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const response = await getYearlyGames();
			setData(response);
			setGames(formatGameList(response.results as RawgGame[]));
			setLoading(false);
		}
		fetchData();
	}, []);

	return (
		<Layout>
			<h3 className="text-4xl font-extrabold">Trending Games this year</h3>
			{loading && <div>Loading....</div>}
			{!loading && (
				<div className="grid grid-cols-4 gap-6 pb-32 justify-center">
					{!games ? <div>No games found.</div> : <GameList data={games} />}
				</div>
			)}
		</Layout>
	);
}

export default YearlyGames;
