export type Condition =
  | "En espera"
  | "Diagnosis"
  | "Espera recambio"
  | "Inicio Reparacion"
  | "Pruebas"
  | "Limpieza"
  | "Acabado"
  | "Peritado"
  | "Recambio Solicitado"
  | "Desmontaje"
  | "Reparacion Carroceria"
  | "Reparacion Pintura"
  | "Montaje"
  | "Limpieza"
  | "Acabado";

export interface UpdateConditionBody {
  condition: Condition;
}
