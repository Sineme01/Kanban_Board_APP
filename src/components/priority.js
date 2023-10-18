import Todo from "../assets/todo.png";
import Backlog from "../assets/backlog.png";
import Done from "../assets/done.png";
import Canceled from "../assets/canceled.png";
import progress from "../assets/progress.png";
import No from "../assets/no.png";
import Urgent from "../assets/urgent.png";
import high from "../assets/high.png";
import high from "../assets/high.png";
import medium from "../assets/medium.png";
import low from "../assets/low.png";
var statusIconMap = {
    "Backlog": Backlog,
    "Todo": Todo,
    "In progress": progress,
    "Done": Done,
    "Canceled": Canceled,
};
var priorityIconMap = {
    "No Priority": No,
    "Urgent": Urgent,
    "High": high,
    "Medium": medium,
    "Low": low,
};
const Priority = ({ tickets, users }) => {
    console.log("in priority");
    console.log(tickets);
    console.log(users);
    var priorityWork = Array(5);
    for (let index = 4; index >= 0; index--) {
        const tempPriority = tickets.filter((ele) => (ele?.priority === index));
        console.log(tempPriority);
        let pname = "No Priority";
        if (index == 4) {
            pname = "Urgent";
        }
        else if (index == 3) {
            pname = "High";
        }
        else if (index == 2) {
            pname = "Medium";
        }
        else if (index == 1) {
            pname = "Low";
        }
        priorityWork[4 - index] = [tempPriority, pname];
    }
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    for (let index = 1; index <= 4; index++) {
        swap(priorityWork, 0, index);
    }
    // console.log(priorityWork);
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {priorityWork.map((ele) => {
                return (
                    <div style={{ width: "270px", marginLeft: '20px' }}>
                        <div style={{
                            display: "flex", flexWrap: "wrap", background: "#dedcdc",
                            borderRadius: "5px", marginBottom: "20px"
                        }}>
                            <img src={priorityIconMap[ele[1]]} style={{ width: "20px", height: "20px", marginTop: "20px", marginLeft: "20px" }}></img>
                            <h3 style={{
                                paddingLeft: "20px", paddingTop: "2px",
                                paddingBottom: "2px"
                            }}>{ele[1]}</h3>
                        </div>
                        {
                            // card code
                            ele[0].map((item) => {
                                return (
                                    <div style={{
                                        background: "white", boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)", marginBottom: "10px", borderRadius: "5px",
                                        padding: "5px"
                                    }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", margin: "0" }}>
                                            <p style={{ color: "grey", fontSize: "15px", margin: "0" }}>{item?.id}</p>
                                            <p style={{ fontFamily: "sans-serif", background: "#757575", padding: "5px", borderRadius: "5px", color: "white", margin: "0" }}>{users[item?.userId[4] - '1']?.name}</p>
                                        </div>
                                        <div style={{ display: "flex", margin: "0" }}>
                                            <img src={statusIconMap[item?.status]} style={{ flex: "1", width: "20px", height: "20px", marginTop: "0", marginBottom: "0px", marginLeft: "0px", marginRight: "0px", justifyContent: "flex-end" }}></img>
                                            {/* <p>✅</p> */}
                                            <p style={{ flex: "8", marginBottom: "10px", marginTop: "0" }}>{item?.title}</p>
                                        </div>
                                        <div>
                                            <p style={{ color: "black", borderRadius: "4px", background: "#dbdbdb", padding: "2px", marginTop: "0", marginBottom: "0", marginRight: "140px" }}>• {item?.tag[0]}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    );
};
export default Priority;