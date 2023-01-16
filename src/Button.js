import { data } from "./data";

function Buttons({ filterProps}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filterProps("dress")}>Dresses</button>
            <button className="change" onClick={() => filterProps("pants")}>Pants</button>
            <button className="change" onClick={() => filterProps("skirt")}>Skirts</button>
            <button className="change" onClick={() => filterProps("shoes")}>Shoes</button>
            <button className="change" onClick={() => filterProps("shirt")}>Shirts</button>
        </div>
    );
}

export default Buttons;