import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Navbar(props) {
    const {searchBar} = props;
    return (
        <div className="bg-red flex flex-row items-center justify-between shadow-sm w-full">
            <Logo />
            {searchBar && <Searchbar />}
            <div style={{ width: '265.94px' }}></div>
        </div>
    )
}