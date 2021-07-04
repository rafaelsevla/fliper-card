import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { Card } from 'ui';
import { ALL_WEALTH_SUMARY } from 'service/queries';
import { WealthProps } from 'utils/wealth';

interface DataProps {
  wealthSummary: WealthProps[];
}

function App () {
  const { loading, error, data } = useQuery<DataProps>(ALL_WEALTH_SUMARY);

  return (
    <RootContainer>
      {console.log(loading, error, data)}
      {loading && (
        <Card
          id={-1}
          loading
          cdi={0}
          gain={0}
          profitability={0}
          total={0}
        />
      )}
      
      {error && (
        <span>Infelizmente um erro aconteceu :(</span>
      )}
      
      {data && data.wealthSummary.map((wealth) => (
        <Card
          key={wealth.id}
          id={wealth.id}
          gain={wealth.gain}
          cdi={wealth.cdi}
          profitability={wealth.profitability}
          total={wealth.total}
        />
      ))}

    </RootContainer>
  );
}

export default App;

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
