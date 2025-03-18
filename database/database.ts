import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

async function init_honeytokens_table(
  database: Database<sqlite3.Database, sqlite3.Statement>
) {
  await database.exec(`
    CREATE TABLE IF NOT EXISTS honeytokens (
      token_id VARCHAR PRIMARY KEY,
      group_id VARCHAR,
      type_id INTEGER,
      creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      expire_date DATETIME,
      notes TEXT,
      data TEXT,
      FOREIGN KEY (type_id) REFERENCES types(id)
    );
  `);
}

export async function startDatabase() {
  try {
    const database: Database<sqlite3.Database, sqlite3.Statement> = await open({
      filename: "./database.sqlite",
      driver: sqlite3.Database,
    });

    await init_honeytokens_table(database);

    return database;
  } catch (error) {
    console.error("Failed to initialize database:", error);
    process.exit(-1);
  }
}
