import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";
import searchIcon from "../../../public/img/searchicon.png";
import notFoundIcon from "../../../public/img/notfound.jpg";


const SearchBar = () => {
    const context = useContext(myContext);
    const { getallProductss } = context
    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
    const filterSearchData = getallProductss.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

    const navigate = useNavigate();

    return (
        <div>
            {/* search input  */}
            <div className="input flex justify-center relative">
                <input
                    type="text"
                    placeholder='Search here'
                    onChange={(e) => setSearch(e.target.value)}
                    className='bg-green-50 placeholder-black text-sm rounded-lg px-3 py-2 w-96 lg:grow lg:max-w-72 md:w-96 outline-none text-black '
                />
                <img src={searchIcon} className="w-4 h-4 hidden lg:block absolute right-3 top-2" alt="searchIcon" />
            </div>

            {/* search drop-down  */}
            <div className=" flex justify-center">
                {search && <div className="block absolute bg-white w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
                    {filterSearchData.length > 0 ?
                        <>
                            {filterSearchData.map((item) => {
                                return (
                                    <div key={item.id} className="py-1 px-1 cursor-pointer" onClick={() => navigate(`/productinfo/${item.id}`)}>
                                        <div className="flex items-center bg-green-50 gap-2 p-2 rounded justify-between">
                                          <div className="flex items-center gap-2 ">
                                            <img className="w-10 h-10" src={item.productImageUrl} alt="titleImg" />
                                            <div className="font-poppins text-xs">{item.title}</div>
                                          </div>
                                            <div className="font-poppins text-xs mr-1">EGP {item.price}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                            <div className="text-center justify-center">
                                <img className="w-[130px] m-auto mb-2" src={notFoundIcon} alt="notfoundicon" />
                                <p className="font-poppins text-xs">No results found. Try searching for something else.</p>
                            </div>
                        </>}
                </div>
                }
            </div>
        </div>
    );
}

export default SearchBar;
