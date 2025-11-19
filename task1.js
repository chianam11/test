
const getMostfrequentString = (data = []) => {
    // bước 1 check 
    if (!Array.isArray(data)) {
        throw new Error("Đầu vào phải là một mảng");
    }

    if (data.length === 0) {
        return [];
    }

    const lengthCount = {};

    for (let i = 0; i < data.length; i++) {
        const currentString = data[i];

        //Bước 2 Kiểm tra phần tử có phải string không
        if (typeof currentString !== 'string') {
            throw new Error(`Phần tử tại vị trí ${i} không phải chuỗi: ${currentString}`);
        }

        const length = currentString.length;
        lengthCount[length] = (lengthCount[length] || 0) + 1;
    }

    // Bước 3 tìm tần xuất cao nhất.
    let maxFrequency = 0;
    for (const length in lengthCount) {
        if (lengthCount[length] > maxFrequency) {
            maxFrequency = lengthCount[length];
        }
    }

    // Bước 4 tìm độ dài tần xuất
    const mostFrequentLengths = [];
    for (const length in lengthCount) {
        if (lengthCount[length] === maxFrequency) {
            mostFrequentLengths.push(Number(length));
        }
    }

    // Bước 5 lọc và trả về kết quả
    const result = [];
    for (let i = 0; i < data.length; i++) {
        if (mostFrequentLengths.includes(data[i].length)) {
            result.push(data[i]);
        }
    }
    return result;
};

console.log("============Test case task 1============")


console.log("Test 1 Ví dụ đề bài:");
const test1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
console.log("Input:", test1);
console.log("Output:", getMostfrequentString(test1));
console.log("--------------------------------------------------");
//mảng rỗng
console.log("Test 2 - Mảng rỗng:");
console.log("Input:", []);
console.log("Output:", getMostfrequentString([]));
console.log("--------------------------------------------------");
// mảng một phần tử
console.log("Test 3 - Một phần tử:");
console.log("Input:", ['hello']);
console.log("Output:", getMostfrequentString(['hello']));
console.log("--------------------------------------------------");

console.log("test 4 dữ liệu thực tế:");
const test4 = ["a", "aa", "bbc", "sss", "1cccwa", "asd", "1-12121"];
console.log("Input:", test4);
console.log("Output:", getMostfrequentString(test4));


console.log("============End test case task 1============")
