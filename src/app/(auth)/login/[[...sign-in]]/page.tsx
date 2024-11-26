import { SignIn } from '@clerk/nextjs'

export default async function Page() {
  return <div className='h-screen flex items-center justify-center'><SignIn /></div>
}