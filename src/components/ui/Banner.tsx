import React from "react";

export interface BannerData {
    message: string;
    state: "sucess" | "error" | "pending";
}

export default function Banner({
    banner: { message, state },
}: {
    banner: BannerData;
}) {
    let stateIcon;

    switch (state) {
        case "pending":
            stateIcon = "🙏";
            break;
        case "sucess":
            stateIcon = "✅";
            break;
        case "error":
            stateIcon = "❌";
            break;
    }

    return (
        <div className="mb-2 p-2">
            <p className="font-semibold">
                {stateIcon} &nbsp;
                {message}
            </p>
        </div>
    );
}
