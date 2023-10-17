import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-blue-100 min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h1 className='text-gray-800 text-3xl font-bold text-center mb-4'>Welcome to Home Page</h1>
        <p className='text-gray-700 text-center'>Hi,This is my first next js project implementing SSR,SSG </p>
      </div>
    </div>
  )
}
