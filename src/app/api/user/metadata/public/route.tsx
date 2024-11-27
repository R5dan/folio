import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'
import { RedirectToSignIn } from '@clerk/nextjs'

export async function POST(req:Request) {
  const { metadata } = await req.json()

  const user = await currentUser()

  if (!user) {
    throw new Error("Must be authenitacted as clerk middle ware configgered")
  }

  const client = await clerkClient()

  await client.users.updateUserMetadata(user.id, {
    publicMetadata: metadata,
  })
  return NextResponse.json({ success: true })
}