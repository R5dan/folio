import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function Page() {
  const { userId } = await auth()
  if (userId) {
    redirect("/dashboard")
  }

  return (
    <div>
      <div className="flex h-screen ">
        <div className="m-auto w-1/2">
          <h1 className="text-7xl text-center">Welcome to Folio</h1><br/>
          <form action={"/sign-up"} method="GET">
            <div className="bg-white text-black h-10">
              <input placeholder="Create an account" type="email" name="email" required autoComplete="email" spellCheck="false" className="w-4/5 h-10"/>
              <button className="w-1/5 h-10 rounded from-red-700 bg-gradient-to-violet-800 rounded-lg">Sign Up</button>
            </div>    
          </form> 
        </div>
      </div>
    </div>
  );
}
