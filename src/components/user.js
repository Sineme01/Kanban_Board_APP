import white from "../assets/white.png";
import green from "../assets/green.png";
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
    0: No,
    4: Urgent,
    3: high,
    2: medium,
    1: low,
};
const user = ({ tickets, users }) => {

    const len = users.length;
    var userWork = Array(len);
    for (let index = 0; index < users.length; index++) {
        const uId = users[index]?.id;

        const tempWork = (tickets.filter(ele => ele?.userId === uId));
        console.log(tempWork);

        userWork[index] = [tempWork, [users[index]?.name, users[index]?.available]];
    }
    console.log("user Work");
    console.log(userWork);
    return (
        <>

            <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
                {userWork.map((ele) => {
                    return (
                        <div style={{ width: "270px", marginLeft: "10px", marginRight: "10px" }}>
                            <div style={{
                                display: "flex", justifyContent: "flex-end",
                                background: "#dedcdc", paddingRight: '20px', borderRadius: "5px", justifyContent: "flex-end", marginBottom: "20px"
                            }}>
                                {(ele[1][1] === true) ? (<img src={green} style={{ width: "10px", height: "10px", marginTop: "25px", marginRight: "2px" }}></img>) : (<img src={white} style={{ width: "10px", height: "10px", marginTop: "25px", marginRight: "2px" }}></img>)}
                                <h3>{ele[1][0]}</h3>
                            </div>
                            {ele[0].map((item) => {
                                return (

                                    <div style={{
                                        background: "white", boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)", marginBottom: "10px", borderRadius: "5px",
                                        padding: "5px"
                                    }}>
                                        <p style={{ color: "grey", fontSize: "15px", marginBottom: "5px", marginTop: "2px" }}>{item?.id}</p>

                                        <div style={{ display: "flex", margin: "0" }}>
                                            <img src={statusIconMap[item?.status]} style={{ flex: "1", width: "20px", height: "20px", marginTop: "0", marginBottom: "0px", marginLeft: "0px", marginRight: "0px", justifyContent: "flex-end" }}></img>
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
                })}
            </div>
        </>
    );
};
export default user;