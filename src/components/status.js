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

const status = ({ tickets, users }) => {
    var statusType = {
        0: "Backlog",
        1: "Todo",
        2: "In progress",
        3: "Done",
        4: "Canceled",
    };
    var statusIconMap = {
        "Backlog": Backlog,
        "Todo": Todo,
        "In progress": progress,
        "Done": Done,
        "Canceled": Canceled,
    };
    var priorityIconMap = {
        0: No,
        4: Urgent,
        3: high,
        2: medium,
        1: low,
    };
    var StatusArray = Array(5);
    for (let index = 0; index < 5; index++) {
        StatusArray[index] = [tickets.filter((ele) => (ele?.status === statusType[index])), statusType[index]]
    }
    // console.log(StatusArray);
    // console.log(users);
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {StatusArray.map((ele => {
                return (
                    <div style={{ width: "270px", marginLeft: "10px", marginRight: "10px" }}>
                        <div style={{
                            display: "flex", flexWrap: "wrap", background: "#dedcdc",
                            borderRadius: "5px", marginBottom: "20px"
                        }}>
                            {/* icon code conditional rendering for different status */}

                            <img src={statusIconMap[ele[1]]} style={{ width: "20px", height: "20px", marginTop: "20px", marginLeft: "20px" }}></img>
                            <h3 style={{
                                paddingLeft: "10px", paddingTop: "2px",
                                paddingBottom: "2px"
                            }}>{ele[1]}</h3>
                            <h4 style={{
                                marginLeft: "30px"
                            }}>{ele[0].length}</h4>

                        </div>
                        {ele[0].map((item) => {
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
                                        <img src={statusIconMap[item?.status]} style={{ flex: "1", width: "5px", height: "20px", marginTop: "0", marginBottom: "0px", marginLeft: "0px", marginRight: "0px", justifyContent: "flex-end" }}></img>
                                        {/* <p>✅</p> */}
                                        <p style={{ flex: "8", marginBottom: "10px", marginTop: "0" }}>{item?.title}</p>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <img src={priorityIconMap[item?.priority]} style={{ width: "20px", height: "20px", marginRight: "20px" }}></img>
                                        <p style={{ color: "black", borderRadius: "4px", background: "#dbdbdb", padding: "2px", marginTop: "0", marginBottom: "0", marginRight: "50px" }}>• {item?.tag[0]}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }))}
        </div>
    );
};
export default status;