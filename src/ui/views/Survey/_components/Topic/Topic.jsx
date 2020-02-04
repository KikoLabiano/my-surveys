import React from 'react';

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
  subtopic
}) => {
  console.log(icon);

  const renderMoreInfo = () => {
    return <InputTextarea rows={5} cols={60} />;
    // value={state.value} onChange={(e) => this.setState({value: e.target.value})} />
  };

  const renderOptions = () => {
    return options.map((option, i) => (
      <div>
        <RadioButton inputId={i} name={name} value={option} onChange={e => {}}></RadioButton>
        <label htmlFor={i} className="p-radiobutton-label">
          {option}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <Title title={name} icon={icon} subtitle={subtopic} />
      <div className={styles.topicWrapper}>{renderOptions()}</div>
      <h3>
        ¿Algo más que añadir?{' '}
        <a href={'https://dle.rae.es/explayar'} target={'_blank'}>
          Expláyate
        </a>{' '}
        a gusto.
      </h3>
      {renderMoreInfo()}
    </div>
  );
};

export { Topic };
