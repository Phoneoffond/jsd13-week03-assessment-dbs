// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking: ให้นับจำนวนออเดอร์ที่ cashiers ทำยอดได้ทั้งหมดของเดือนนี้ โดยดึงชื่อนามสกุล และจำนวนออเดอร์สะสมเรียงลำดับจากมากไปน้อย
// ต้องไปกรองชื่อกับนามกุลและรหัสของคนที่เป็น Cashier มาจากฐานข้อมูล Staff ก่อน แล้วค่อยรหัสมานับออเดอร์ ใครมากสุดอยู่ข้างบน 
//
use("chrome-burger-db");

db.staff.find( 
    {{"role" : "cashier"} => {order_id.count()}},
    {_id: false, first_name: true, last_name: true}
);