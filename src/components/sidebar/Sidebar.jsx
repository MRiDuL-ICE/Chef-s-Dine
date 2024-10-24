

const Sidebar = ({cooks}) => {
    const {recipe_name, preparing_time, calories} = cooks;
    return (
        <div className="md:w-1/3 min-h-screen border-2 mt-16 rounded-lg p-5">
            <h1 className="text-3xl font-bold text-center">Want to cook: {cooks?.length}</h1>
        </div>
    );
};

export default Sidebar;