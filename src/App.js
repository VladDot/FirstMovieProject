import Footer from "./components/Footer/component";
import Header from "./components/Header/component";

import Routes from "./routes";

function App() {
    return (
        <div>
            <Header />
            <div className=" min-h-[calc(100vh-214px)] minSm:min-h-[calc(100vh-184px)] ">
                <Routes />
            </div>
            <Footer />
        </div>
    );
}

export default App;
