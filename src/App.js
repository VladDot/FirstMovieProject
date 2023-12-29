import { Outlet } from "react-router-dom";

import { Footer, Header } from "./components";

function App() {
    return (
        <div>
            <Header />
            <div className=" min-h-[calc(100vh-214px)] minSm:min-h-[calc(100vh-184px)] ">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
