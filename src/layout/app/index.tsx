import { Outlet } from "react-router-dom";
import HeaderOpt from "../../components/HeaderOpt";

function Layout() {
    return(
        <>
            <HeaderOpt/>
            <main className="w-full max-w-[1200px] m-auto py-8">
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout;