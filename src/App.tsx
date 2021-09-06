import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { ALL_WEALTH_SUMARY } from '@service/queries';
import { Card } from '@service/ui';
import { WealthProps } from '@service/utils/wealth';

import { WealthProps as WealthPropsI } from './service/utils/wealth';

interface DataProps {
  wealthSummary: WealthProps[];
  ii: WealthPropsI
}

const i = 'abobora';

function App () {
  const { loading, error, data } = useQuery<DataProps>(ALL_WEALTH_SUMARY);

  return (
    <RootContainer>
      {loading && (
        <ItemContainer>
          <Card
            id={-1}
            loading
            cdi={0}
            gain={0}
            profitability={0}
            total={0}
          />
        </ItemContainer>
      )}

      {error && (
        <span>Infelizmente um erro aconteceu :(</span>
      )}

      {data && data.wealthSummary.map((wealth) => (
        <ItemContainer key={wealth.id}>
          <Card
            id={wealth.id}
            gain={wealth.gain}
            cdi={wealth.cdi}
            profitability={wealth.profitability}
            total={wealth.total}
          />
        </ItemContainer>
      ))}

    </RootContainer>
  );
}

export default App;

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ItemContainer = styled.div`
  margin: 20px;
`;
