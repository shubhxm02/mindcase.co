import type { Database } from "./database.types";

export type Conversations = Database["public"]["Tables"]["Conversations"]["Row"]
export type Messages = Database["public"]["Tables"]["Messages"]["Row"]