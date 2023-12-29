import { trandingBtns } from "./config";
import MainBanner from "../../components/MainBanner";
import TogglePoster from "../../components/TogglePoster/component";
import PosterToggleBg from "../../components/PosterWithBg/component";

import "./style.css";

const Home = () => {
    return (
        <div className="max-w-[1300px] m-auto pb-5 ">
            <MainBanner />
            <div className="relative">
                <span className="afterLinee"></span>

                <TogglePoster btns={trandingBtns} />

                <PosterToggleBg btns={trandingBtns} />
            </div>
        </div>
    );
};

export default Home;
