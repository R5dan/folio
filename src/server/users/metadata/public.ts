import { clerkClient } from "@clerk/nextjs/server";


export async function getUserMetadata(userId: string) {
    const client = (await clerkClient)
    const user = await client.users.getUser(userId)
    return user.publicMetadata
}

export async function setUserMetadata(userId: string, metadata: any) {
    const client = (await clerkClient)
    await client.users.updateUserMetadata(userId, {publicMetadata: metadata})
}