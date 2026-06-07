// Version 1: Classic FizzBuzz
console.log("--- VERSION 1: CLASSIC FIZZBUZZ ---");

function classicFizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        // Nếu output vẫn là chuỗi rỗng (không chia hết cho 3 hay 5), in ra số i
        console.log(output || i);
    }
}

classicFizzBuzz();

// Version 2: Custom FizzBuzz
console.log("\n--- VERSION 2: CUSTOM FIZZBUZZ ---");

function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        // Duyệt qua từng rule trong mảng rules
        for (let rule of rules) {
            if (i % rule.divisor === 0) {
                output += rule.word; // Nối thêm từ tương ứng nếu chia hết
            }
        }
        
        // In ra kết quả, nếu không khớp luật nào thì in ra số i
        console.log(output || i);
    }
}

// Test case theo yêu cầu đề bài (Mình set n = 105 để test được trường hợp FizzBuzzJazz)
customFizzBuzz(105, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);