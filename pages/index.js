import Head from "next/head";
import Image from "next/image";
import Tours from "../components/Tours";
import { useEffect, useState } from "react";

export default function Home() {
	// Set tours state
	const [tours, setTours] = useState(null);

	// fetch tours on page load
	useEffect(() => {
		fetchTours();
	}, []);

	// function to fetch data and set tours state
	const fetchTours = async () => {
		try {
			// fetch data from api endpoint
			const response = await fetch("/api/tours");
			const tours = await response.json();
			// use respone to set tours state
			setTours(tours);
		} catch (error) {
			console.log(error);
		}
	};

	// remove tours
	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	return (
		<div>
			<Head>
				<title>Tours</title>
				<meta name="description" content="Tours offered by us" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<main className="flex flex-col items-center min-h-screen bg-white">
				<h1 className="mt-16 text-7xl font-bold">
					EURO<span className="text-[#0070f3]">TOURS</span>
				</h1>

				<p className="my-16 text-2xl font-base">
					{tours && tours.length > 0
						? "Get started by browsing our destinations"
						: "No Tours Left"}
				</p>

				{/* Display Tours */}
				{tours ? (
					tours.length > 0 ? (
						<Tours tours={tours} removeTour={removeTour} />
					) : (
						<div>
							<button
								onClick={() => fetchTours()}
								className="text-lg font-semibold text-pink-600 border border-pink-600 p-2 rounded-md hover:bg-rose-600 hover:text-white hover:border-transparent active:bg-rose-500 ease-in-out duration-75"
							>
								See All Tours
							</button>
						</div>
					)
				) : (
					<div>Ooops. Looks like something went wrong...</div>
				)}
				{/* <button onClick={() => console.log(tours)}>LOG RESULTS</button> */}
			</main>
			<footer className="mt-16 width-100% flex justify-center text-white font-normal bg-[#0070f3] ">
				<p className="my-4 text-md">EuroTours LLC 2022, All Rights Reserved</p>
			</footer>
		</div>
	);
}
