import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://nyypopdngefbljsmqlow.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eXBvcGRuZ2VmYmxqc21xbG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDU3NjQsImV4cCI6MTk4Mzc4MTc2NH0.GmmKZ_-gzxduHAYB699vFkpG7Lc_nv78pJCBu1UfzNo";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
