
const Banner = () => {
    return (
        <div className="h-[50vh] space-y-6  flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
            <div>
                <input type="text" name="" id="" placeholder="Search here..." className="p-2 rounded w-80" />

                <button className="bg-red-500 py-2 px-4 font-medium  rounded">Search</button>
            </div>
        </div>
    );
};

export default Banner;