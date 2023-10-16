// import { useState } from "react";


export const Quick_API = "https://api.quicksell.co/v1/internal/frontend-assignment";
function toDo(x) {
    return (x.status === "Todo");
};
// function inProg(x) {
//     return (x.status === "Todo");
// };
// function done(x) {
//     return (x.status === "Todo");
// };
function backlog(x) {
    return (x.status === "Backlog");
};
export const groupByStatus = (data) => {
    // const [filterData, setFilteredData] = useState();
    const toDoWorks = data?.tickets.filter(toDo);
    // console.log("todo data");
    // console.log(toDoWorks);
    const backlogWorks = data?.tickets.filter(backlog);
    return [toDoWorks, backlogWorks];
};