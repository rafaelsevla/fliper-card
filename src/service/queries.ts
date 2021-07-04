import { gql } from '@apollo/client';

export const ALL_WEALTH_SUMARY = gql`
  query MyQuery {
    wealthSummary {
      id
      total
      cdi
      gain
      profitability
    }
  }
`;
