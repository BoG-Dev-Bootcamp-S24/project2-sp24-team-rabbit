import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Navbar(props) {
    const {searchBar} = props;
    return (
        <div className="h-20 w-full border border-gray-200 flex flex-row items-center justify-between shadow-sm">
            <Logo />
            {searchBar && <Searchbar />}
            <div style={{ width: '265.94px' }}></div>
        </div>
    )
}