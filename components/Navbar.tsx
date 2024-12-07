import Link from "next/link";


export default function Navbar (){
    return(
        <nav className="flex justify-between items-center bg-blue-500 text-drak  px-8 py-3">
           <Link href="/">GTCoding.</Link>
           <Link className="bg-white p-2"  href="/addTopic">Add Topic</Link>

        </nav>
    )
}