# MySQL 优化之路

## like 替代品

- LOCATE(substr,str,pos)
  > 返回子符串 substr 在字符串 str，从 pos 处开始的第一次出现的位置。如果 substr 不在 str 中，则返回值为 0
  > select c.\* from counselor c where LOCATE('个人成长',c.expertise_area_label) > 0
  > select c.\* from counselor c where c.expertise_area_label like '%个人成长%'

## 日期格式化

- date_format(start_time, '%Y-%m-%d %H:%i:%s') as start_time,

## 状态判断

- ( CASE WHEN now() < a.start_time THEN - 1 WHEN now() > a.end_time THEN 0 ELSE 1 END ) AS status
