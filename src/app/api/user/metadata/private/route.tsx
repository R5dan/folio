import { NextResponse } from 'next/server'
import { clerkClient } from '@clerk/nextjs/server'

export async function GET(request: Request) {
  const { userId }: {userId: string} = await request.body.json()

  const client = await clerkClient()

  const user = await client.users.getUser(userId)
  return NextResponse.json(user.privateMetadata)
}

export async function POST() {
    const { metadata, userId }: {metadata: {[key: string]: {value: string|number|boolean|Array<string|number|boolean>, method: string}}, userId: string} = await body.json()
    const client = await clerkClient()
    const user = (await client.users.getUser(userId))
    const privateMetadata = user.privateMetadata

    for (const [key, value] of Object.entries(metadata)) {
        if (value.method === "set") {
            privateMetadata[key] = value.value
        }
        else if (value.method === "add") {
            if (privateMetadata[key]) {
                privateMetadata[key].push(value.value)
            }
            else {
                privateMetadata[key] = [value.value]
            }
        }  else if (value.method === "remove") {
            if (privateMetadata[key]) {
                privateMetadata[key].splice(privateMetadata[key].indexOf(value.value), 1)
            }
        }
    }

    await client.users.updateUserMetadata(userId, {
        privateMetadata: metadata,
    })
    return NextResponse.json({ success: true })
}