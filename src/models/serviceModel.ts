import connection from "../database/config.db";
import { type Condition } from "../types/types";

export const getById = (
  id: number,
  callback: (error: any, results: any) => void
) => {
  const sql = `SELECT service_condition, service_type, estimated_completion_date, licene_plate, brand, model, contact_phone, first_name, last_names  FROM vehicle_maintenance
              LEFT JOIN vehicles on vehicle_maintenance.vehicle_id = vehicles.vehicle_id LEFT JOIN owners on vehicles.owner_id = owners.owner_id
              WHERE service_id = ?`;

  connection.query(sql, [id], callback);
};

export const updateCondition = (
  id: number,
  condition: Condition,
  callback: (error: any, results: any) => void
) => {
  const sql = `UPDATE vehicle_maintenance
              SET service_condition = ?
              WHERE vehicle_id = ?`;

  connection.query(sql, [condition, id], callback);
};

export const updateDate = (
  id: number,
  date: string,
  callback: (error: any, results: any) => void
) => {
  const sql = `UPDATE vehicle_maintenance
              SET estimated_completion_date = ?
              WHERE vehicle_id = ?`;

  connection.query(sql, [date, id], callback);
};
