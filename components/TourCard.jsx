import React, { useState } from "react";

export default function TourCard({ id, image, info, price, name, removeTour }) {
	const [readMore, setReadMore] = useState(false);

	return (
		<article className="flex flex-col justify-center w-4/5 max-w-3xl rounded-md bg-white">
			<img
				src={image}
				alt={name}
				className="w-full rounded-md object-cover aspect-[16/11]"
			></img>
			<footer className="flex flex-col flex-start mt-4">
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<h4 className="text-xl font-semibold">{name}</h4>
					<h4 className="text-lg font-semibold text-[#0070f3] border border-[#0070f3] p-2 rounded-md">
						${price}
					</h4>
				</div>
				<p className="mt-4 text-lg">
					{readMore ? info : info.slice(0, 200)}

					<button
						onClick={() => setReadMore(!readMore)}
						className="text-[#0070f3] font-semibold font-xl cursor-pointer px-1 py-0"
					>
						{" "}
						{readMore ? "See less..." : "Read more..."}
					</button>
				</p>
				<div className="mt-4 flex justify-center">
					<button
						onClick={() => removeTour(id)}
						className="text-lg font-semibold text-pink-600 border border-pink-600 p-2 rounded-md hover:bg-rose-600 hover:text-white hover:border-transparent active:bg-rose-500 ease-in-out duration-75"
					>
						{" "}
						Not Interested
					</button>
				</div>
			</footer>
		</article>
	);
}
