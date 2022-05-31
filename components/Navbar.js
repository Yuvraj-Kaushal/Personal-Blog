import Link from 'next/link'

const Navbar = () => {
  return (

     
  <div className="flex flex-wrap p-5 flex-col md:flex-row items-center border-b">

    <Link href='/'>
      <p className="ml-6 text-4xl font-semibold cursor-pointer">Yuvraj</p>
    </Link>
    <Link href='/about'>
    <p className="ml-7 text-lg font-thin pt-4 cursor-pointer">About</p>
    </Link>  
  </div>
  )
}

export default Navbar