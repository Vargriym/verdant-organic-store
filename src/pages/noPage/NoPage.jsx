import notFoundIcon from "../../../public/img/notfound.jpg";


const NoPage = () => {
    return (
        <div className="flex flex-col justify-center items-center py-48">
        <img className="w-[260px] m-auto mb-2" src={notFoundIcon} alt="notfoundicon" />
        <p className="font-poppins text-lg">No results found. Try searching for something else.</p>
        </div>
    );
}

export default NoPage;
