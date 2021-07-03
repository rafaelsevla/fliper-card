import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { Card } from 'ui';
import { ALL_WEALTH_SUMARY } from 'service/queries';


function App () {
  const { loading, error, data } = useQuery(ALL_WEALTH_SUMARY);

  return (
    <RootContainer>
      {console.log(loading, error, data)}
      <Card />
    </RootContainer>
  );
}

export default App;

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
