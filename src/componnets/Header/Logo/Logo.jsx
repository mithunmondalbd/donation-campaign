
import './logo.css'
const Logo = () => {
    return (
        <div className="flex items-center space-x-4">
            <img src="../src/assets/Group-removebg-preview.png" alt="Logo Icon" className="object-cover" />
            <div>
                <span className="text-red-500 text-3xl font-extrabold">Donation</span> <br />
                <h4 className="text-xl letter-spacing">Campaign</h4>
            </div>
        </div>
    );
};

export default Logo;