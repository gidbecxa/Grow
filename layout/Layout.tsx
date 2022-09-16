import Sidebar from "./components/Sidebar";


interface ChildrenProps{
    children: any
}

export default function Layout({children}: ChildrenProps) {
    return(
        <div className='flex items-center space-y-0 md:space-y-0 '>
        <aside className="flex flex-col space-y-12 md:w-1/3">
            <Sidebar />
        </aside>
        <div className="md:w-2/3">{children}</div>
        </div>
    )
}