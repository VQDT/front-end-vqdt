import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function Layout() {
    return(
        <>
            <Header />
            <main className="w-full max-w-[1200px] m-auto py-8">
                <Outlet></Outlet>
            </main>
        </>
    );
}

export default Layout;