import { Router, Express } from "express";
import { Database } from "sqlite";
import sqlite3 from "sqlite3";
import {
  get_all_honeytokens,
  get_honeytoken_by_token_id,
  get_honeytokens_by_type_id,
  get_honeytokens_by_group_id,
  delete_honeytoken_by_id,
  delete_honeytokens_by_type_id,
  delete_honeytokens_by_group_id,
} from "../../database/honeytokens";

export function serveHoneytokens(
  app: Express,
  database: Database<sqlite3.Database, sqlite3.Statement>
) {
  const router = Router();

  router.get("/honeytokens", async (req, res) => {
    try {
      const honeytokens = await get_all_honeytokens(database);
      res.json(honeytokens);
    } catch (error) {
      console.error("[-] Failed to fetch honeytokens:", error);
      res.status(500).json({ failure: error });
    }
  });

  router.get("/honeytokens/token/:token_id", async (req, res) => {
    const { token_id } = req.params;
    try {
      const honeytoken = await get_honeytoken_by_token_id(database, token_id);
      res.json(honeytoken);
    } catch (error) {
      console.error("[-] Failed to fetch honeytoken by token_id:", error);
      res.status(500).json({ failure: error });
    }
  });

  router.get("/honeytokens/type/:type_id", async (req, res) => {
    const { type_id } = req.params;
    try {
      const honeytokens = await get_honeytokens_by_type_id(database, type_id);
      res.json(honeytokens);
    } catch (error) {
      console.error("[-] Failed to fetch honeytokens by type_id:", error);
      res.status(500).json({ failure: error });
    }
  });

  router.get("/honeytokens/group/:group_id", async (req, res) => {
    const { group_id } = req.params;
    try {
      const honeytokens = await get_honeytokens_by_group_id(database, group_id);
      res.json(honeytokens);
    } catch (error) {
      console.error("[-] Failed to fetch honeytokens by group_id:", error);
      res.status(500).json({ failure: error });
    }
  });

  router.delete("/honeytokens/token/:token_id", async (req, res) => {
    const { token_id } = req.params;
    try {
      await delete_honeytoken_by_id(database, token_id);
      res.json({ success: true });
    } catch (error) {
      console.error("[-] Failed to delete honeytoken:", error);
      res.status(500).json({ failure: error });
    }
  });

  router.delete("/honeytokens/type/:type_id", async (req, res) => {
    const { type_id } = req.params;
    try {
      await delete_honeytokens_by_type_id(database, type_id);
      res.json({ success: true });
    } catch (error) {
      console.error("[-] Failed to delete honeytokens:", error);
      res.status(500).json({ failure: error });
    }
  });

  router.delete("/honeytokens/group/:group_id", async (req, res) => {
    const { group_id } = req.params;
    try {
      await delete_honeytokens_by_group_id(database, group_id);
      res.json({ success: true });
    } catch (error) {
      console.error("[-] Failed to delete honeytokens:", error);
      res.status(500).json({ failure: error });
    }
  });

  app.use("/api", router);
}
