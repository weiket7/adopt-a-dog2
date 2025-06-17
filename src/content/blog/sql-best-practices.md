---
title: "SQL Best Practices"
description: "hello"
pubDate: "Jul 08 2022"
---

❌ `select * from customer where id = 1;`  
✅ `select id, name, email from customer where id = 1;`  
Select only necessary columns to reduce data which has to be queried and returned to application.

❌ `insert into customer values (1, "Luke", 100);`  
✅ `insert into customer (id, name, balance) values (1, "Luke", 100);`  
Specify column names so that it's clear. In the event there's a change in column order or new column in the middle, the query will still work.

❌ Write update or delete without selecting rows first  
✅ Select rows to update/delete first, then write update/delete part and ensure to highlight whole query then execute.

```sql
-- check selected rows are correct
select * from customer
where id = 1;

-- write update or delete on top of where then execute
update customer set name = 'Luke'
where id = 1;
```

❌ Update/delete without backup
✅ Backup then execute

```sql
--ms sql, backup first
SELECT * INTO #temp_customer FROM customer
where id = 1;

update customer set name = 'Luke'
where id = 1;
```

❌ Not having indexes  
✅ Indexes speed up queries and reduce DB load.

❌ Select a lot of rows to application to do sorting or pagination  
✅ For basic pagination, use `ORDER BY`, `OFFSET` AND `LIMIT` to select rows in DB. There are also advanced pagination techniques like keyset pagination.

❌ Business logic and calculation in queries  
✅ It can cause high DB load which can result in increased latency and possible downtime. It is difficult and uncommon to write tests for queries.

❌ Excessive use of triggers and jobs  
✅ In environments which have DB admins or people are used to managing triggers and jobs, this might be fine. However, as time passes and people come and go, there is decreased familiarity with what triggers and jobs there are, when they run, what they affect. This might make database changes difficult to trace.

<!-- Refactor queries using with / cte

**Joins**

Specify table alias and columns

select b.Custid, c.UserName, b.Stake from Bets as b with (nolock), inner join Customer as c with (nolock) on b.custid = c.custid

**Data types**

Specify column types based on storage and intention

Data size

Use smallest and reasonable data type

**Dates**

**Naming convention** -->
