import { useEffect, useState } from "react";
// import BlogCard from "../../Blogs/BlogCard";

const Donation = () => {
    
    const [favorite, setFavorite] = useState([]);
    const [noFound, setNoFound] = useState('')
    const[isShow, setIsShow] = useState(false); 

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))
        if (favoriteItems) {
            setFavorite(favoriteItems)
        }
        else {
            setNoFound('no data found')
        }

    }, [])
    console.log(favorite)
    return (
        <div>
            {noFound ? 'no data found' : <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {
                        favorite.map(phone => <div key={phone.id}>
                            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                        <img
                                            src={noFound.picture}
                                            alt="image"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                            startups
                                        </h6>
                                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                            Lyft launching cross-platform service this week
                                        </h4>
                                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                            Like so many organizations these days, Autodesk is a company in
                                            transition. It was until recently a traditional boxed software company
                                            selling licenses. Yet its own business model disruption is only part of
                                            the story
                                        </p>
                                        
                                    </div>
                                </div>
                        </div>)
                    }
                </div>
            </div>}
            <button onClick={() => setIsShow(!isShow)} className= "border px-2 text-center">{isShow ? "See more" : "See less"}</button>
        </div>
    );
};

export default Donation;