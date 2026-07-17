-- Task 2 Bonus: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the order_date and total_price from the Orders table
-- for all orders handled by Jane Doe. You will need to join with the Staff table
-- to filter by the staff member's name.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking: เข้าไปอ่านฐานข้อมูลใน staff เห็น staff_id ของ ๋Jane Doe คือ 1
-- จากนั้นเข้าไปในฐานข้อมูล oders พบว่าใช้เลข staff_id คือ 1 ตรงกัน ใน WHERE
-- เลยสร้าเงื่อนไขว่า ให้เปิดข้อมูลเฉพาะ staff_id = 1 เท่านั้น และเลือกเปิดเฉพาะ order_date และ total_price ด้วย SELECT
-- โดยข้อมูบทั้งหมดจะดึงมาจากไฟล์ orders ด้วย FROM

SELECT order_date, total_price 
FROM orders
WHERE staff_id = 1
