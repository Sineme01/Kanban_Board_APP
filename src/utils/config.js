export const Quick_API = "https://api.quicksell.co/v1/internal/frontend-assignment";

// Deep Copy Function.
export function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(deepCopy);
    }

    const copy = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}
// sort by title function, it sorts it in ascending order.
export function sortByName(arr) {
    arr?.tickets.sort((a, b) => {
        const titleA = a?.title;
        const titleB = b?.title;
        if (titleA < titleB)
            return -1;
        if (titleA > titleB)
            return 1;
        return 0;
    });
}
// sort by priority function, it sorts it in descending order.
export function sortByPriority(arr) {
    arr?.tickets.sort((a, b) => {

        if (a?.priority < b?.priority)
            return 1;
        if (a?.priority > b?.priority)
            return -1;
        return 0;
    });
}

export const GreenCircle = () => {
    return (
        <div
            style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'green',
            }}
        ></div>
    );
};