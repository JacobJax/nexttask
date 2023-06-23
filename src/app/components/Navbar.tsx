import Link from "next/link";

export default function Navbar() {
   return (
      <nav className="border-b">
         <div className="nav-container max-w-4xl mx-auto py-4 px-8 flex items-center justify-between">
            <div className="logo"><Link href='/' className="text-lg font-bold">Nexttask</Link></div>
            <div className="nav-item">
               <Link href='/task/new' className="text-sm border p-2 rounded-md hover:bg-slate-800">New task</Link>
            </div>
         </div>
      </nav>
   )
}