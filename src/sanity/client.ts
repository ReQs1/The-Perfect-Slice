import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-02-19",
  useCdn: import.meta.env.NODE_ENV === "production",
});
