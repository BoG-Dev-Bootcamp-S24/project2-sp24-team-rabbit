import Logo from "./Logo";
import Searchbar from "./Searchbar";

const searchbarActive = true;

export default function Navbar() {
    return (
        <div className="h-20 w-full border border-gray-200 flex flex-row items-center justify-between">
            <Logo />
            <Searchbar />
            <div style={{ width: '265.94px' }}></div>
        </div>
    )
}