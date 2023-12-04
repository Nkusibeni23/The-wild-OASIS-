import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gmpzwibfivfpccdjwciw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtcHp3aWJmaXZmcGNjZGp3Y2l3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3MjE1MDksImV4cCI6MjAxNzI5NzUwOX0.S2YrAHQUFtTyczWhF8ZpiUsJAREl04ERWpzZ0KWNlXM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
