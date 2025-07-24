import { createClient } from "@supabase/supabase-js"

const URL = "https://szjujupzftwxldyupekv.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6anVqdXB6ZnR3eGxkeXVwZWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTUxMzIsImV4cCI6MjA2ODg5MTEzMn0.xgIttiHsEyMQRMgo4wguqqByeXfN6LDT2yFgt09RS5o"

export const supabase = createClient(URL, API_KEY)
