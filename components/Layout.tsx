import Sidebar from './layout/Sidebar'
import FollowBar from './layout/followBar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px30 max-w-5xl">
                <div className="grid grid-cols-4 h-full">
                    <Sidebar />
                    <div className="col-span-3 lg:col-span-2 border-x-[1] border-neutral-800">
                        {children}
                    </div>
                    <FollowBar/>
                </div>
            </div>
        </div>
    )
}
export default Layout;