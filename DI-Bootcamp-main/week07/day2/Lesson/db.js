import dotenv from "dotenv";
import knex from "knex";
dotenv.config();

const { PGDATABASE, PGHOST, PGUSER, PGPASSWORD, PGPORT } = process.env;
// console.log(PGDATABASE, PGHOST, PGUSER, PGPASSWORD, PGPORT);

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    port: PGPORT,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

try {
  const { rows } = await db.raw(
    "SELECT name, price FROM products WHERE price = ?",
    [300]
  );
  console.log(rows);
} catch (error) {
  console.log(error);
}

db("products")
  .select("name", "price")
  .where({ id: 2 })
  .then((rows) => console.log(rows))
  .catch((error) => console.log(error));

// insert
// const rows = await db("products").insert([
//   { name: "iWatch", price: 444 },
//   { name: "iCar", price: 555 },
// ]);

// update
const rows = await db("products").where({ id: 2 }).update({ price: 333 });
console.log(rows);
