import { gql } from '@apollo/client';

// Mutation to register a new lead
export const REGISTER_LEAD = gql`
  mutation RegisterLead($input: RegisterInput!) {
    register(input: $input) {
      id
      name
      email
      mobile
      postcode
      services
      createdAt
    }
  }
`;

// Query to get all leads
export const GET_LEADS = gql`
  query GetLeads {
    leads {
      id
      name
      email
      mobile
      postcode
      services
      createdAt
    }
  }
`;

// Query to get a single lead by ID
export const GET_LEAD = gql`
  query GetLead($id: ID!) {
    lead(id: $id) {
      id
      name
      email
      mobile
      postcode
      services
      createdAt
    }
  }
`;

