import "./header.css"
const Header = ({ title }) => {
    return (
        <div className="bg-gradient-to-b from-pink-500 via-pink-500 to-pink-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="ml-6">
                    <img src="src\assets\logo.png" alt="no image" />
                </div>
                <div>
                <h1 className="  text-6xl font-bold  border-gray-400" style={{ background: "-webkit-linear-gradient(left, #32CD32, #FFFF00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", WebkitTextStroke: "1.5px black" }}>{title}</h1>

                </div>
                <div className="text-xl font-bold"></div>
            </div>
        </div>
    );
}

export default Header;
