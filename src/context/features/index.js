import React, { createContext, useState } from 'react';
import propTypes from 'prop-types';

export const FeaturesContext = createContext();

const items = [
  {
    title: 'jeden',
  },
  {
    title: 'dwa',
  },
  {
    title: 'trzy',
  },
];

const FeaturesProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState(items[0]);

  const changeItem = (index) => {
    setActiveItem(items[index]);
  };

  return (
    <FeaturesContext.Provider
      value={{
        changeItem,
        activeItem,
        items,
      }}
    >
      {children}
    </FeaturesContext.Provider>
  );
};

FeaturesProvider.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.arrayOf(propTypes.node)]).isRequired,
};

export default FeaturesProvider;
