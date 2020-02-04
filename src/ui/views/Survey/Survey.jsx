import React, { useEffect, useReducer } from 'react';

import styles from './Survey.module.css';

import { Button } from 'primereact/button';
import { Topic } from './_components/Topic';

import { surveyReducer } from './_functions/Reducers/surveyReducer';

const Survey = () => {
  const initialSurveyState = {
    currentTopicIdx: 0,
    topics: [{ id: '', selectedOption: '', additionalInfo: '', name: '', subtopic: '' }]
  };
  const [surveyState, dispatchSurvey] = useReducer(surveyReducer, initialSurveyState);

  useEffect(() => {
    dispatchSurvey({ type: 'SET_INITIAL_TOPICS', payload: { allTheTopics } });
  }, []);

  const allTheTopics = [
    {
      icon: 'css3',
      id: 0,
      name: 'CSS',
      options: [
        'No sé de qué me estás hablando.',
        'Algo me suena.',
        'Me defiendo. Sé utilizar algunos.',
        'Los entiendo bastante bien.',
        'Soy el/la amo/ama. No se me escapa uno.'
      ],
      subtopic: 'Selectores'
    },
    {
      id: 1,
      icon: 'css3',
      name: 'CSS',
      options: [
        '¿Flex-qué?',
        'Algo me suena.',
        'Me defiendo. Sé alinear más o menos bien.',
        'Entiendo bastante bien el modelo.',
        'Controlo cada propiedad del modelo.'
      ],
      subtopic: 'Flexbox'
    },
    {
      id: 2,
      icon: 'css3',
      name: 'CSS',
      options: [
        'No sabía que existieran las variables en CSS...',
        'Sé que existen, pero poco más.',
        'Las he utilizado pero poco.',
        'Las controlo bastante bien.',
        'Soy un experto. Sueño con las var(--).'
      ],
      subtopic: 'Variables'
    },
    {
      id: 3,
      icon: 'css3',
      name: 'CSS',
      options: [
        'Sólo conozco las de Pixar.',
        'He hecho alguna copiándola de Stackoverflow.',
        'He creado alguna propia pero sencillita.',
        'He creado animaciones relativamente complejas.',
        'Veo la realidad en forma de keyframes.'
      ],
      subtopic: 'Animaciones'
    }
  ];

  const onChangeSurveyValue = (topicId, property, value) => {
    dispatchSurvey({ type: 'UPDATE_SURVEY', payload: { property, topicId, value } });
  };

  const onNextTopic = () => {
    dispatchSurvey({ type: 'NEXT_TOPIC' });
  };

  const onPreviousTopic = () => {
    dispatchSurvey({ type: 'PREVIOUS_TOPIC' });
  };

  // return topics.map(topic => (
  //   <Topic
  //     id={topic.id}
  //     icon={topic.icon}
  //     name={topic.name}
  //     onChangeSurveyValue={onChangeSurveyValue}
  //     options={topic.options}
  //     subtopic={topic.subtopic}
  //   />
  // ));
  return (
    <div>
      <h2>{`${surveyState.currentTopicIdx}/${allTheTopics.length - 1}`}</h2>
      <div className={styles.topicWrapper}>
        <Topic
          id={allTheTopics[surveyState.currentTopicIdx].id}
          icon={allTheTopics[surveyState.currentTopicIdx].icon}
          name={allTheTopics[surveyState.currentTopicIdx].name}
          onChangeSurveyValue={onChangeSurveyValue}
          options={allTheTopics[surveyState.currentTopicIdx].options}
          subtopic={allTheTopics[surveyState.currentTopicIdx].subtopic}
          topicSelectedOption={surveyState.topics[surveyState.currentTopicIdx].selectedOption}
          topicAdditionalInfo={surveyState.topics[surveyState.currentTopicIdx].additionalInfo}
        />
        <div className={styles.buttonsWrapper}>
          {surveyState.currentTopicIdx > 0 ? (
            <Button label={'Anterior'} icon="pi pi-chevron-left" onClick={onPreviousTopic} />
          ) : null}
          {surveyState.currentTopicIdx < allTheTopics.length - 1 ? (
            <Button
              label={'Siguiente'}
              icon="pi pi-chevron-right"
              onClick={onNextTopic}
              iconPos="right"
              style={{ marginLeft: 'auto' }}
            />
          ) : null}
          {surveyState.currentTopicIdx === allTheTopics.length - 1 ? (
            <Button
              className="p-button-success"
              disabled={surveyState.topics.filter(topic => topic.selectedOption === '').length > 0}
              label={'Enviar'}
              icon="pi pi-cloud-upload"
              // onClick={onNextTopic}
              iconPos="right"
              style={{ marginLeft: 'auto' }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { Survey };
