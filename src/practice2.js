// TODO 逻辑过长，嵌套过多，查一下splice的使用
// TODO 当sections内items顺序不是index顺序时会有问题(内存泄漏)
const inject = (items, sections) => {
    let currentIndex = 0;
    let result = [];
    items.reverse();
    for (const section of sections) {
        while(currentIndex !== section.index) {
            result.push(items.pop());
            currentIndex += 1;
        }
        result.push(section.content);

    }

    const leftCount = items.length;
    for (let i = 0; i < leftCount; i++) {
        result.push(items.pop());
    }
    return result;
};
export { inject };
