import React, { useEffect, useReducer } from 'react';

import { Topic } from './_components/Topic';

import { surveyReducer } from './_functions/Reducers/surveyReducer';

const Survey = () => {
  const initialSurveyState = {
    topics: [{ id: '', selectedOption: '', additionalInfo: '', name: '' }]
  };
  const [surveyState, dispatchSurvey] = useReducer(surveyReducer, initialSurveyState);

  useEffect(() => {
    dispatchSurvey({ type: 'SET_INITIAL_TOPICS', payload: { topics } });
  }, []);

  const topics = [
    {
      icon: 'css3',
      id: 0,
      name: 'CSS',
      options: [
        'No sé de qué me estás hablando',
        'Algo me suena',
        'Me defiendo. Sé utilizar algunos',
        'Los entiendo bastante bien',
        'Soy el/la amo/ama. No se me escapa uno'
      ],
      subtopic: 'Selectores'
    },
    {
      id: 1,
      icon: 'flexbox',
      name: 'CSS',
      options: [
        '¿Flex-qué?',
        'Algo me suena',
        'Me defiendo. Sé alinear más o menos bien ',
        'Entiendo bastante bien el modelo',
        'Controlo cada propiedad del modelo'
      ],
      subtopic: 'Flexbox'
    }
  ];

  const onChangeSurveyValue = (topicId, property, value) => {};

  return topics.map(topic => (
    <Topic
      id={topic.id}
      icon={topic.icon}
      name={topic.name}
      onChangeSurveyValue={onChangeSurveyValue}
      options={topic.options}
      subtopic={topic.subtopic}
    />
  ));
};

export { Survey };
