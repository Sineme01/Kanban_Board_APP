let ab = {
    "id": "520",
    "name": "Anand",
    "class": "7",
    "roll": "2001cb07",
    "college": "iit p",
};

const Display = ({name,roll, college}) => {
    return (
        <>
            <h1>My name is {name}</h1>
            <h1>My roll is {roll}</h1>
            <h1>My college is {college}</h1>
        </>
    );
};

const Info = () => {
    return (
        <>
            <Display {...ab} />
        </>
    );
};

export default Info;