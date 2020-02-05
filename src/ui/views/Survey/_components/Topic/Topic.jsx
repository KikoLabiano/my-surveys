import React, { useEffect, useState } from 'react';

import styles from './Topic.module.css';

import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { Title } from './_components/Title';

const Topic = ({
  icon,
  id,
  name,
  onChangeSurveyValue,
  options = [
    'No sé de qué me estás hablando',
    'Algo me suena',
    'Me defiendo',
    'Lo entiendo bastante bien',
    'Soy el/la amo/ama'
  ],
  subtopic,
  topicSelectedOption,
  topicAdditionalInfo
}) => {
  const [selectedOption, setSelectedOption] = useState(topicSelectedOption);
  const [additionalInfo, setAdditionalInfo] = useState(topicAdditionalInfo);

  useEffect(() => {
    setSelectedOption(topicSelectedOption);
    setAdditionalInfo(topicAdditionalInfo);
  }, [topicSelectedOption, topicAdditionalInfo]);

  const renderMoreInfo = () => {
    return (
      <InputTextarea
        rows={5}
        cols={60}
        onChange={e => {
          setAdditionalInfo(e.target.value);
          onChangeSurveyValue(id, 'additionalInfo', e.target.value);
        }}
        value={additionalInfo}
      />
    );
  };

  const renderOptions = () => {
    return options.map((option, i) => (
      <div>
        <RadioButton
          checked={selectedOption === option}
          inputId={i}
          name={name}
          value={option}
          onChange={e => {
            setSelectedOption(e.target.value);
            onChangeSurveyValue(id, 'selectedOption', e.target.value);
          }}
        />
        <label htmlFor={i} className="p-radiobutton-label">
          {option}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <Title title={name} icon={icon} subtitle={subtopic} />
      <div className={styles.topicOptionsWrapper}>{renderOptions()}</div>
      <h5>
        ¿Algo más que añadir?{' '}
        <a href={'https://dle.rae.es/explayar'} target={'_blank'}>
          Expláyate
        </a>{' '}
        a gusto.
      </h5>
      {renderMoreInfo()}
    </div>
  );
};

export { Topic };
