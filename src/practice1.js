const parseData = ({data, column}) => {
    // TODO 数组与数组的转化用map，无需声明parseResult
    let parseResult = [];
    for (const row of data) {
        let dataEntity = {};
        // TODO 尝试使用 非for 循环
        for (let i = 0; i < column.length; i++) {
            dataEntity[column[i].name] = row[i];
        }
        parseResult.push(dataEntity);
    }
    return parseResult;
}
export { parseData };
