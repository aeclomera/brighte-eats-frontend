// Service types matching the backend enum
export enum ServiceType {
  DELIVERY = "DELIVERY",
  PICKUP = "PICKUP",
  PAYMENT = "PAYMENT",
}

// Lead type matching the backend GraphQL schema
export interface Lead {
  id: string;
  name: string;
  email: string;
  mobile: string;
  postcode: string;
  services: ServiceType[];
  createdAt: string;
}

// Input type for registering a new lead
export interface RegisterLeadInput {
  name: string;
  email: string;
  mobile: string;
  postcode: string;
  services: ServiceType[];
}

// GraphQL mutation response
export interface RegisterLeadResponse {
  register: Lead;
}

// GraphQL query responses
export interface GetLeadsResponse {
  leads: Lead[];
}

export interface GetLeadResponse {
  lead: Lead;
}
