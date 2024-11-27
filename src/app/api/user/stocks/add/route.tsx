import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function POST(req:Request) {
    const { stock } = req.json()

    const clerk = await clerkClient()
    



    return NextResponse.json({"status":true, "stocks":(await clerk.users.getUser()).publicMetadata.stocks})
}