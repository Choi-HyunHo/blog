import React from "react";

export interface BannerData {
	message: string;
	state: "sucess" | "error";
}

export default function Banner({
	banner: { message, state },
}: {
	banner: BannerData;
}) {
	const isSuccess = state === "sucess";
	const stateIcon = isSuccess ? "✅" : "❌";

	return (
		<div className="mb-2 p-2">
			<p className="font-semibold">
				{stateIcon} &nbsp;
				{message}
			</p>
		</div>
	);
}
