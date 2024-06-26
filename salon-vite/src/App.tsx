import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StylistImageHero from "./components/StylistImageHero";
import LogoImageHero from "./components/LogoImageHero";

function App() {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 d-flex flex-wrap justify-content-center align-content-between">
                    <StylistImageHero src="sarah" />
                    <StylistImageHero src="olivia" />
                </div>
                <div className="col-lg-4 d-flex justify-content-center align-items-center">
                    <LogoImageHero />
                </div>
                <div className="col-lg-4 d-flex flex-wrap justify-content-center align-content-between">
                    <StylistImageHero src="jiffy" />
                    <StylistImageHero src="kimy" />
                </div>
            </div>
        </>
    );
}

export default App;
