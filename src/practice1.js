const parseData = ({data, column}) => {
    let parseResult = [];
    for (const row of data) {
        let dataEntity = {};
        for (let i = 0; i < column.length; i++) {
            dataEntity[column[i].name] = row[i];
        }
        parseResult.push(dataEntity);
    }
    return parseResult;
}
export { parseData };
