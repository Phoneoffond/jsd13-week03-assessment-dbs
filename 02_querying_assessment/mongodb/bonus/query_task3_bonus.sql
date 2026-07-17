-- Task 3 Bonus: Stock Replenishment Check
-- Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
-- that are already well-stocked. They need a list of every ingredient with a stock level
-- of 100 or more so those can be deprioritised in this week's order.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the name of all rows in the Ingredients table
-- where the stock_level is greater than or equal to 100.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking: เช็คสต็อคจ่ากฐานข้อมูล ingredients ด้วย FROM แล้วเลือกแสดงข้อมูลปริมาณสต๊อคและชื่อสินค้า
-- โดยมีเงื่อนไขว่าต้องมีจำนวนมากกว่าหรือเท่ากับ 100
SELECT name, stock_level
FROM ingredients
WHERE stock_level >= 100.00
