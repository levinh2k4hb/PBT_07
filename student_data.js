const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Khởi tạo các biến để lưu trữ kết quả cho các câu 4, 5, 6, 7
let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;

let maxStudent = null;
let minStudent = null;

let sumMath = 0, sumPhysics = 0, sumCs = 0;

let sumMaleTB = 0, countMale = 0;
let sumFemaleTB = 0, countFemale = 0;

// Câu 3: In tiêu đề bảng
console.log("| STT | Tên      | TB  | Xếp loại   |");
console.log("|-----|----------|-----|------------|");

// Vòng lặp chính xử lý TẤT CẢ các yêu cầu
for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // Câu 1: Tính điểm trung bình
    let tb = (student.math * 0.4) + (student.physics * 0.3) + (student.cs * 0.3);
    // Làm tròn 1 chữ số thập phân để hiển thị đẹp hơn
    tb = Math.round(tb * 10) / 10;
    student.tb = tb; // Lưu lại điểm TB vào object

    // Câu 2: Xếp loại
    let loai = "";
    if (tb >= 8.0) {
        loai = "Giỏi";
        countGioi++; // Phục vụ Câu 4
    } else if (tb >= 6.5) {
        loai = "Khá";
        countKha++;
    } else if (tb >= 5.0) {
        loai = "Trung bình";
        countTB++;
    } else {
        loai = "Yếu";
        countYeu++;
    }

    // Câu 3: In dữ liệu từng dòng (sử dụng padEnd để căn lề cho giống bảng)
    let sttStr = String(i + 1).padEnd(3, ' ');
    let nameStr = student.name.padEnd(8, ' ');
    let tbStr = tb.toFixed(1).padEnd(3, ' ');
    let loaiStr = loai.padEnd(10, ' ');

    console.log(`| ${sttStr} | ${nameStr} | ${tbStr} | ${loaiStr} |`);

    // Câu 5: Tìm SV cao điểm nhất và thấp nhất
    if (i === 0) {
        maxStudent = student;
        minStudent = student;
    } else {
        if (tb > maxStudent.tb) maxStudent = student;
        if (tb < minStudent.tb) minStudent = student;
    }

    // Câu 6: Cộng dồn điểm để tính TB môn toàn lớp
    sumMath += student.math;
    sumPhysics += student.physics;
    sumCs += student.cs;
    
    // Câu 7: Cộng dồn điểm để tính TB theo giới tính
    if (student.gender === "M") {
        sumMaleTB += tb;
        countMale++;
    } else if (student.gender === "F") {
        sumFemaleTB += tb;
        countFemale++;
    }
}


console.log("\n4. Số SV mỗi xếp loại:");
console.log(`- Giỏi: ${countGioi}`);
console.log(`- Khá: ${countKha}`);
console.log(`- Trung bình: ${countTB}`);
console.log(`- Yếu: ${countYeu}`);

console.log("\n5. Sinh viên có điểm TB cao nhất và thấp nhất:");
console.log(`- Cao nhất: ${maxStudent.name} (${maxStudent.tb} điểm)`);
console.log(`- Thấp nhất: ${minStudent.name} (${minStudent.tb} điểm)`);

console.log("\n6. Điểm TB toàn lớp cho từng môn:");
let totalStudents = students.length;
console.log(`- Math: ${(sumMath / totalStudents).toFixed(2)}`);
console.log(`- Physics: ${(sumPhysics / totalStudents).toFixed(2)}`);
console.log(`- CS: ${(sumCs / totalStudents).toFixed(2)}`);

console.log("\n7. Bonus: Điểm TB theo giới tính:");
let avgMale = countMale > 0 ? (sumMaleTB / countMale).toFixed(2) : 0;
let avgFemale = countFemale > 0 ? (sumFemaleTB / countFemale).toFixed(2) : 0;
console.log(`- Nam (M): ${avgMale}`);
console.log(`- Nữ (F): ${avgFemale}`);