export interface Candidate {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  skills: string[];
  experience: number; // in years
  education: string;
  appliedDate: Date;
}

// Check API for fields that are required