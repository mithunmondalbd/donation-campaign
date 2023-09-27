import { useLoaderData } from "react-router-dom";
import Banner from "../../componnets/Header/Banner/Banner";
import Card from "../../componnets/Card/Card";


const Home = () => {

    const card = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Card card={card}></Card>
        </div>
    );
};

export default Home;