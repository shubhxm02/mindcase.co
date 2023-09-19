export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Conversations: {
        Row: {
          chatbot_id: string
          created_at: string
          id: string
          last_modified: string
          title: string
          user_id: string
        }
        Insert: {
          chatbot_id?: string
          created_at?: string
          id?: string
          last_modified?: string
          title?: string
          user_id?: string
        }
        Update: {
          chatbot_id?: string
          created_at?: string
          id?: string
          last_modified?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Conversations_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Messages: {
        Row: {
          conversation_id: string | null
          created_at: string
          id: string
          query: string | null
          response: string | null
          user_id: string | null
        }
        Insert: {
          conversation_id?: string | null
          created_at?: string
          id?: string
          query?: string | null
          response?: string | null
          user_id?: string | null
        }
        Update: {
          conversation_id?: string | null
          created_at?: string
          id?: string
          query?: string | null
          response?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Messages_conversation_id_fkey"
            columns: ["conversation_id"]
            referencedRelation: "Conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Messages_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
