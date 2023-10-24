import { useEffect, useState } from "react";
import { Quick_API } from "../utils/config";
import Status from "./status";
import User from "./user"
import Priority from "./priority";
import { sortByName, sortByPriority } from "../utils/config";


const Body = () => {

    // State Varialbes
    const [isDisplay, setIsDisplay] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    const [toggleDisplay, setToggleDisplay] = useState(false);
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem('filterValue');
        return storedValue ? parseInt(storedValue, 10) : 0;
    });
    const [filter, setFilter] = useState(0);
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);


    // API call
    useEffect(() => {
        getData();
    }, []);

    //funtion to get data from API
    async function getData() {
        const rawData = await fetch(Quick_API);
        const json = await rawData.json();
        setData(json);
        setFilteredData(json);
    }

    //Each time filter gets update we set filteredData a new value.
    useEffect(() => {
        if (filter === 1) {
            const arr = JSON.parse(JSON.stringify(data));
            sortByPriority(arr);
            setFilteredData(arr);
        }
        else if (filter === 2) {
            const arr = JSON.parse(JSON.stringify(data));
            sortByName(arr);
            setFilteredData(arr);
        }
    }, [filter]);

    // Save filter value to localStorage whenever it changes so that we could save the state.
    useEffect(() => {
        localStorage.setItem('filterValue', state);
    }, [state]);

    return (
        <>

            <div style={{
                display: "flex", background: "white", marginTop: "0", width: "1525px",
                boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)", marginBottom: "10px", borderRadius: "5px", padding: "10px",
            }}>
                {(toggleDisplay === true) ? (<button onClick={() => { setToggleDisplay(false); }}>Display</button>)
                    : (<button onClick={() => { setToggleDisplay(true); }}>Display</button>)}

                {(toggleDisplay) ? (
                    <>
                        <div style={{}}>
                            {/* Toggling Switch for GroupBy */}

                            {(isDisplay === false) ? (
                                <button onClick={() => { setIsDisplay(true); }}>Group By</button>) : (
                                <button onClick={() => { setIsDisplay(false); }}>Group By</button>
                            )}

                            {/* Toggling Switch for OrderBy */}

                            {((isOrder === false)) ? (<button onClick={() => { setIsOrder(true); }}>Order By</button>) : (
                                <button onClick={() => { setIsOrder(false); }}>OrderBy</button>
                            )}
                        </div>
                        {(isDisplay === true) ?
                            (
                                <>
                                    <br></br>
                                    <button onClick={() => { setState(0); }}>By Status</button>
                                    <button onClick={() => { setState(1); }}>By User</button>
                                    <button onClick={() => { setState(2); }}>By Priority</button>
                                </>
                            ) :
                            (null)}

                        {/* show OrderBy Menu */}

                        {(isOrder === true) ? (
                            <>
                                <button onClick={() => { setFilter(1); }}>Priority</button>
                                <button onClick={() => { setFilter(2); }}>Title</button>
                            </>
                        ) : (null)}
                    </>) : (null)}
            </div>
            {/* Config Driven UI */}
            {(state === 0 && filteredData !== null) ? (<Status {...filteredData} />) : (null)}
            {(state === 1) && (filteredData != null) ? (< User {...filteredData} />) : (null)}
            {(state === 2) && (filteredData !== null) ? (<Priority {...filteredData} />) : (null)}

        </>
    );
};
export default Body;