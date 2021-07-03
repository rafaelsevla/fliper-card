import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_WEALTH_SUMARY } from 'queries';


function App () {
  const { loading, error, data } = useQuery(ALL_WEALTH_SUMARY, {
    variables: { limit: 10 },
  });

  return (
    <div>
      {console.log(loading, error, data)}
      hello world
    </div>
  );
}

export default App;
