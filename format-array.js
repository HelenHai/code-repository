// 格式化数组以键值对的形式输出

let ret = []

for (let index in arrays) {
    let key = index, 
        value = arrays[key]
    ret.push({ key: key, value: value })
}