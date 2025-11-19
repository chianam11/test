const sum = (data = []) => {
    if (data.length <= 1 || !Array.isArray(data)) { // validate array 
        throw new Error(
            "Data phải có ít nhất 2 phần tử.|| data không phải là 1 array"
        )
    }
    let max1 = -Infinity;//đảm bảo mọi số thực đều lớn hơn
    let max2 = -Infinity;
    for (num of data) {
        if (typeof num !== "number") throw Error("Có phần tử mảng không phải là số");

        if (num > max1) {
            max2 = max1// đẩy max1 cũ xuống max2
            max1 = num// cập nhật max1 mới
        } else if (num > max2) {
            max2 = num;//max2 luôn là số lớn thứ 2
        }
    }
    return max1 + max2

}

console.log("============Test case task 2============")
console.log("Test1 ví dụ đề bài:")
//test 1
console.log("Input:", [1, 4, 2, 3, 5]);
console.log("giá trị trả về với mảng theo yêu cầu", sum([1, 4, 2, 3, 5]));
console.log("====================================================");

// Test 2: mảng rỗng
console.log("Test 2:")
try {
    console.log("Input:", []);
    console.log("Output:", sum([]));
} catch (err) {
    console.log("Error:", err.message);
}
console.log("====================================================");
// Test 3: phần tử không phải số
console.log("Test 3:")
try {
    console.log("Input:", ["ssd", 1, 2, 3, 1, 4, 9, {}]);
    console.log("Output:", sum(["ssd", 1, 2, 3, 1, 4, 9, {}]));
} catch (err) {
    console.log("Error:", err.message);
}
console.log("============End test case============")