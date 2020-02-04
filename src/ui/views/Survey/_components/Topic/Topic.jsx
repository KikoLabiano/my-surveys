import React from 'react';

import { Title } from './_components/Title';
import { RadioButton } from 'primereact/radiobutton';

const Topic = (icon, name, options) => {
  const renderOptions = () => {
    // return options.map(option=><RadioButton value={option.value})
  };

  return (
    <div>
      <Title title={name} icon={icon} iconSize="1.5rem" />
      {renderOptions()}
    </div>
  );
};

export { Topic };
