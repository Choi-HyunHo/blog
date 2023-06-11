import * as yup from "yup";
import { mailInfo } from "@/service/nodemail";

export interface EmailData {
    email: string;
    subject: string;
    message: string;
}

const vaildSchema = yup.object().shape({
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
});

export async function POST(req: Request) {
    const body = await req.json();
    if (!vaildSchema.isValidSync(body))
        return new Response("유효하지 않습니다", { status: 400 });

    return mailInfo(body) //
        .then(
            () =>
                new Response(JSON.stringify({ message: "메일 전송 성공" }), {
                    status: 200,
                })
        )
        .catch((error) => {
            console.error(error);
            return new Response(JSON.stringify({ message: "메일 전송 실패" }), {
                status: 500,
            });
        });
}
