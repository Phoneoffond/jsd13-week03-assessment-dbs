// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking: เจนต้องการดึงชื่อออเดอร์กับราคามาให้ผู้จัดการดู โดยไม่ใส่รายละเอียดอย่างอื่น 
// ตอนแรกให้ดึงข้อมูลมาจากฐานข้อมูลที่มีชื่อว่า staff โดยใช้ find() หาชื่อ Jane และ นามสกุล Doe
// ใส่เงื่อนไขว่าจะดูเฉพาะ order_date (วันที่) และ total_price (ราคาสุทธิ) ด้วยค่า true
// ตอนรันโค้ดมี _id ขึ้นมาด้วย เลยแก้ด้วยการใส่ false เพื่อไม่แสดงผล _id

use("chrome-burger-db");


db.orders.find( {"staff.first_name" : "Jane", "staff.last_name" : "Doe"},
    {"_id": false, "order_date": true, "total_price": true}
);