import React from "react";
import TourCard from "./TourCard";

export default function Tours({ tours, removeTour }) {
	return (
		<div className="flex flex-col items-center gap-20">
			{tours.map((tour) => {
				return <TourCard key={tour.id} {...tour} removeTour={removeTour} />;
			})}
		</div>
	);
}
