import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from 'openai';


const configuration = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})


export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { message } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API Key not configuration", { status: 500 });
        }

        if (!message) {
            return new NextResponse("Message are required", { status: 400 });
        }

    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error);
        return new NextResponse("Internal error", { status: 500 })
    }
}
