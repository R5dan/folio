import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'

export function TopNav() {
    return (
        <nav className="border-b-4 border-solid border-b-white w-full h-10 justify-center">
            <div className="topnav">
                <a href="/"><img src="/favicon.ico" height={40} width={40}></img></a>
            </div>
            <div className="topnav float-right">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}