import MainContent from "./MainContent";
import Navigation from "./Navigation";

function NavMain(){
    return(
        <div className="navmain">
            <Navigation/>
            <MainContent/>
        </div>
    );
}
export default NavMain