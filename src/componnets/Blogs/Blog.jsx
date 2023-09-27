
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';
import { saveDonation } from "../../Utillity/LocalStorage";
// import { Link } from "react-router-dom";
const Blog = () => {

    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const card = cards?.find(blog => blog.id === idInt)

    const handleAddClick = () => {

        const addedFavoriteArray = [];
        const favoriteItems = JSON.parse(localStorage.getItem('favorites'))

        if (!favoriteItems) {
            addedFavoriteArray.push(card)
            localStorage.setItem('favorites', JSON.stringify(addedFavoriteArray))
        }
        else {
            const isExists = favoriteItems?.find(phone => phone.id === idInt)

            if (isExists) {
                addedFavoriteArray.push(...favoriteItems, card)
                localStorage.setItem('favorites', JSON.stringify(addedFavoriteArray))
                swal("Good job!", "You have successfully donation!", "success");
            }

            else{
                swal("No duplicate!", "You have already added!", "error");
            }

        }
        
    }
    return (
        <div className="pt-10">
            <div className="relative flex bg-blend-overlay  flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-[70vh] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={card.picture}
                        className="h-full w-full bg-center bg-cover bg-origin-content"
                    />
                </div>
                <div className="absolute top-4 md:top-[340px] ml-4">
                    <button onClick={handleAddClick} className="border p-2 bg-red-500 rounded font-bold">Donation: ${card.price}</button>
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {card.title}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {card.description}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;