export const level1 = (list, property, value) => {
    return (
        list.filter((item) => {
            const value_1 = item[property]?.toLowerCase();
            const value_2 = value.toLowerCase();
            return value_1?.includes(value_2);
        }) || []
    );
};

export const level2 = (list, property1, property2, value) => {
    return (
        list.filter((item) => {
            const value_1 = item[property1][property2]?.toLowerCase();
            const value_2 = value.toLowerCase();
            return value_1?.includes(value_2);
        }) || []
    );
};
