import { gql } from '@apollo/client';

export const ALL_WEALTH_SUMARY = gql`
  query MyQuery {
    wealthSummary {
      total
      cdi
      gain
      hasHistory
      id
      profitability
    }
  }
`