import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const AutocompletionContext = createContext();

function AutocompletionContextProvider({ children }) {
  const [isAutocomplete, setIsAutocomplete] = useState(false);

  return (
    <AutocompletionContext.Provider
      value={
        useMemo(
          () => ({ isAutocomplete, setIsAutocomplete }),
          [isAutocomplete, setIsAutocomplete],
        )
      }
    >
      {children}
    </AutocompletionContext.Provider>
  );
}

AutocompletionContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AutocompletionContext, AutocompletionContextProvider };
