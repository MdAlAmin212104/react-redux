
const State = ({totalCount}) => {
    return (
        <div className="p-4 h-40 flex flex-col items-center bg-white rounded shadow justify-center space-y-5">
            <div className="text-3xl font-semibold">
                Total Count : {totalCount}
            </div>
        </div>
    );
};

export default State;
