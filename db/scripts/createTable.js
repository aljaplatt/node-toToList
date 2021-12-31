// import query from index.js
// create table function using query - how many cols ?
// call the function

import query from "../index.js";

export default async function createTaskTable() {
  const sqlString = `CREATE TABLE IF NOT EXISTS tasks (id SERIAL PRIMARY KEY, task TEXT);`;
  const res = await query(sqlString);
  console.log("Result:", res);
  return res;
}

createTaskTable();
