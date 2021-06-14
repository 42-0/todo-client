import React from 'react';

const Todos = () => {
  const [state, setState] = React.useState<string>('init');

  return (
    <>
      <div>
        {state}
      </div>
    </>
  );
};

export default Todos;
