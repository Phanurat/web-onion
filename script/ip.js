function validateIPAddress(ip) {
    // Regular Expression สำหรับตรวจสอบรูปแบบของ IP address
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
    // ตรวจสอบว่า IP address ที่รับเข้ามาตรงกับรูปแบบหรือไม่
    if(ipPattern.test(ip)) {
      return true;
    } else {
      return false;
    }
  }
  
  // เช็ค IP address
  const ipAddress = '192.168.1.1';
  if(validateIPAddress(ipAddress)) {
    console.log(`${ipAddress} เป็น IP address ที่ถูกต้อง`);
  } else {
    console.log(`${ipAddress} ไม่เป็น IP address ที่ถูกต้อง`);
  }
  