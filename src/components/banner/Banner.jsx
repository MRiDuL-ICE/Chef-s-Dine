

const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-[700px] rounded-full w-10/12 mx-auto mt-10">
                    <img className="h-[700px] w-full rounded-2xl object-cover" src="https://i.ibb.co.com/Bgpq3n3/chef-5993951-1920.jpg" alt="" />
                <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-10/12">
                        <h1 className="mb-5 text-6xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 text-lg w-full text-white">
                        Welcome to our restaurant, where culinary excellence meets personalized experiences.Immerse yourself in diverse cuisines and enjoy a welcoming atmosphere that celebrates the art of cooking.
                        </p>
                        <div className="flex gap-5 mx-auto justify-center">
                        <button className="btn border-none bg-green-400 rounded-full font-bold">Explore Now</button>
                        <button className="btn btn-primary bg-transparent border-white rounded-full hover:bg-green-100 hover:text-black">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;