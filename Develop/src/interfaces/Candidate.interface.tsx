export interface Candidate {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name?: string | null;
  company?: string | null;
  blog?: string | null;
  location?: string | null;
  bio?: string | null;
}


// Check API for fields that are required