import "./Body.css"
import NavbarContent from "./NavbarContent.tsx";
function Body() {
    return <div>
        <div className="fixed" id={"navbar"}>
            <NavbarContent></NavbarContent>
        </div>
    </div>;
}



export default Body;