import { SupabaseClient } from "@supabase/supabase-js";
import { supabase } from "./supabaseClient";

export interface Message {
  id: string;
  conversation_id: string;
  content: string;
  role: "user" | "assistant";
  created_at: string;
}

export interface Conversations {
  id: string;
  user_id: string;
  title: string;
  created_at: string;
  updated_at: string;
}

// for signing up
export const signUp = async (
  email: string,
  password: string,
  metadata?: { firstName: string; lastName: string }
) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: metadata?.firstName,
        last_name: metadata?.lastName,
      },
    },
  });
  return { data, error };
};

// for signing in
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};

// for signing with google

export const signInWithGoogle = async () => {
  sessionStorage.setItem("googleLoginIntent", "true");
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/chat`,
    },
  });

  return { data, error };
};

// for signing out
export const signOut = async () => {
  let { error } = await supabase.auth.signOut();
  return { error };
};

// for resesting password
export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  return { data, error };
};

// chat functions
export const createConversations = async (title: string): Promise<string> => {
  const { data, error } = await supabase
    .from("conversations")
    .insert({ title })
    .select("id")
    .single();

  if (error) throw error;
  return data.id;
};

export const getConversations = async (): Promise<Conversations[]> => {
  const { data, error } = await supabase
    .from("conversations")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data || [];
};

export const getMessages = async (
  conversationId: string
): Promise<Message[]> => {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);

  return data || [];
};

export const addMessage = async (
  conversationId: string,
  content: string,
  role: "user" | "assistant"
) => {
  const { error } = await supabase.from("message").insert({
    conversation_id: conversationId,
    content,
    role,
  });

  if (error) throw new Error(error.message);
};

export const updateConversationTitle = async (id: string, title: string) => {
  const { error } = await supabase
    .from("conversations")
    .update({ title, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);
};
