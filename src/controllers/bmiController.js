// Import các hàm calculateBMI và classifyBMI từ bmi.js

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

// Xuất hàm getBMI

// Lưu ý: Tham khảo mã trong tệp nameController.js
// Import các hàm calculateBMI và classifyBMI từ bmi.js
const { calculateBMI, classifyBMI } = require('../models/bmi');  // Đảm bảo đường dẫn đúng với tệp bmi.js

// Hàm getBMI xử lý yêu cầu từ client
const getBMI = (req, res) => {
    const { weight, height } = req.body;  // Lấy cân nặng và chiều cao từ request body

    // Tính toán BMI
    const bmi = calculateBMI(weight, height);
    
    // Phân loại BMI
    const classification = classifyBMI(bmi);
    
    // Trả về JSON chứa bmi và classification
    res.json({ bmi, classification });
};

// Xuất hàm getBMI
module.exports = { getBMI };
