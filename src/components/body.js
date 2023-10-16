import React, { useEffect, useState } from "react";
import { DMenu, OrderByMenu } from "../utils/Menu";
import { Quick_API, groupByStatus } from "../utils/helper";
// import Info from "./random";

const Body = () => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [isOrder, setIsOrder] = useState(false);
    const [data, setData] = useState(null);
    // API call

    useEffect(() => {
        getData();
    }, [])
    async function getData() {
        const rawData = await fetch(Quick_API);
        const json = await rawData.json();
        setData(json);
        // console.log(data);
    }
    const [toDo, setToDo] = useState();
    const [backlog, setBacklog] = useState();
    if (data != null) {
        const [tempToDo, tempBacklog] = groupByStatus(data);
        setToDo(tempToDo);
        setBacklog(tempBacklog);
    }
    return (
        <>
            {/* Toggling Switch for Display */}

            {(isDisplay === false) ? (<button onClick={() => { setIsDisplay(true); }}>display</button>) : (
                <button onClick={() => { setIsDisplay(false); }}>display</button>
            )}

            {/* Toggling Switch for OrderBy */}

            {((isOrder === false)) ? (<button onClick={() => { setIsOrder(true); }}>OrderBy</button>) : (
                <button onClick={() => { setIsOrder(false); }}>OrderBy</button>
            )}

            {/* Show Display Menu */}

            {(isDisplay === true) ? (<DMenu></DMenu>) : (null)}

            {/* show OrderBy Menu */}

            {(isOrder === true) ? (<OrderByMenu />) : (null)}

            {/* <br></br> */}
            {/* used just to print random things */}
            {/* <Info></Info> */}

        </>
    );
};
export default Body;