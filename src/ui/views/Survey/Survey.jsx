import React, { useEffect, useReducer } from 'react';
import * as emailjs from 'emailjs-com';
import { withRouter } from 'react-router-dom';

import { routes } from 'ui/routes';

import styles from './Survey.module.css';

import { Button } from 'primereact/button';
import { MoreInfoForm } from './_components/MoreInfoForm';
import { Topic } from './_components/Topic';

import { TopicService } from 'core/services/Topic';

import { surveyReducer } from './_functions/Reducers/surveyReducer';

const Survey = withRouter(({ match: { params }, history }) => {
  const initialSurveyState = {
    additionalFinalInfo: '',
    allTheTopics: [],
    currentTopicIdx: 0,
    developerName: '',
    sendingEmail: false,
    topics: [
      {
        id: '',
        selectedOption: '',
        additionalInfo: '',
        name: '',
        subtopic: ''
      }
    ]
  };
  const [surveyState, dispatchSurvey] = useReducer(surveyReducer, initialSurveyState);

  useEffect(() => {
    onLoadTopics();
  }, []);

  const onLoadTopics = async () => {
    const response = await TopicService.getAll();
    console.log({ response });
    dispatchSurvey({ type: 'SET_INITIAL_TOPICS', payload: { allTheTopics: response } });
  };

  // const surveyState.allTheTopics =
  // [
  //   {
  //     icon: 'css3',
  //     id: 0,
  //     name: 'CSS',
  //     options: [
  //       'No sé de qué me estás hablando.',
  //       'Algo me suena.',
  //       'Me defiendo. Sé utilizar algunos.',
  //       'Los entiendo bastante bien.',
  //       'Soy el/la amo/ama. No se me escapa uno.'
  //     ],
  //     subtopic: 'Selectores'
  //   },
  //   {
  //     id: 1,
  //     icon: 'css3',
  //     name: 'CSS',
  //     options: [
  //       '¿Flex-qué?',
  //       'Algo me suena.',
  //       'Me defiendo. Sé alinear más o menos bien.',
  //       'Entiendo bastante bien el modelo.',
  //       'Controlo cada propiedad del modelo.'
  //     ],
  //     subtopic: 'Flexbox'
  //   },
  //   {
  //     id: 2,
  //     icon: 'css3',
  //     name: 'CSS',
  //     options: [
  //       'No sabía que existieran las variables en CSS...',
  //       'Sé que existen, pero poco más.',
  //       'Las he utilizado pero poco.',
  //       'Las controlo bastante bien.',
  //       'Soy un experto. Sueño con las var(--).'
  //     ],
  //     subtopic: 'Variables'
  //   },
  //   {
  //     id: 3,
  //     icon: 'css3',
  //     name: 'CSS',
  //     options: [
  //       'Sólo conozco las de Pixar.',
  //       'He hecho alguna copiándola de Stackoverflow.',
  //       'He creado alguna propia pero sencillita.',
  //       'He creado animaciones relativamente complejas.',
  //       'Veo la realidad en forma de keyframes.'
  //     ],
  //     subtopic: 'Animaciones'
  //   },
  //   {
  //     id: 4,
  //     icon: 'javascript',
  //     name: 'JavaScript (ES6)',
  //     options: [
  //       '¯\\_(ツ)_/¯',
  //       'Sé lo justo.',
  //       'Entiendo bastante bien cómo funciona el ámbito/scope.',
  //       'Lo controlo a la perfección.',
  //       'Lo controlo tan bien que hago proposiciones al TC39.'
  //     ],
  //     subtopic: 'Scopes'
  //   },
  //   {
  //     id: 5,
  //     icon: 'javascript',
  //     name: 'JavaScript (ES6)',
  //     options: [
  //       'El único "var" que conozco es el Casa Manolo.',
  //       'Sé que existen tres pero no las termino de entender.',
  //       'Utilizo las tres aunque no siempre de la mejor manera.',
  //       'Sé perfectamente cuándo utilizar cada una de ellas.',
  //       'Se me quedan cortas y he inventado mi propio tipo de variable.'
  //     ],
  //     subtopic: 'Tipos de variable (var, let, const)'
  //   },
  //   {
  //     id: 6,
  //     icon: 'javascript',
  //     name: 'JavaScript (ES6)',
  //     options: [
  //       'Lo de prototype suena bien pero ni idea de qué estás hablando.',
  //       'Sé que existe el map y el filter pero poco más.',
  //       'Conozco bastantes funciones pero me faltan conceptos.',
  //       'Las conozco bien y, de algunas, sé si son puras o impuras.',
  //       'Me sé todas incluyendo cuáles son puras y cuáles impuras.'
  //     ],
  //     subtopic: 'Array prototype functions'
  //   },
  //   {
  //     id: 7,
  //     icon: 'javascript',
  //     name: 'JavaScript (ES6)',
  //     options: [
  //       'No sabía que en Javascript existían las referencias.',
  //       'Sé que existen, poco más.',
  //       'Las conozco y las he sufrido.',
  //       'No las he sufrido porque sé perfectamente cómo funcionan.',
  //       'Yo las inventé y arderé en el infierno por ello.'
  //     ],
  //     subtopic: 'Referencias'
  //   },
  //   {
  //     id: 8,
  //     icon: 'javascript',
  //     name: 'JavaScript (ES6)',
  //     options: [
  //       'Puedo prometer y prometo... que no tengo ni idea de promises.',
  //       'Funcionan muy bien después de copiar de stackoverflow.',
  //       'Las utilizo relativamente bien.',
  //       'Me he peleado con los callback-hells y bendigo al TC39 por el async/await.',
  //       'Como se me quedan cortas he propuesto la creación de los Observables.'
  //     ],
  //     subtopic: 'Promises (async/await)'
  //   },
  //   {
  //     id: 9,
  //     icon: 'javascript',
  //     name: 'JavaScript (ES6)',
  //     options: [
  //       'Arrow significa flecha. Nada más que añadir.',
  //       'Las utilizo a veces pero entiendo mejor las function() clásicas.',
  //       'Las utilizo a diario pero no conozco todos sus secretos.',
  //       'Vivo pensando en ()=>{} y nunca pongo un return de más.',
  //       'YO LAS INVENTÉ.'
  //     ],
  //     subtopic: 'Arrow functions'
  //   },
  //   {
  //     id: 10,
  //     icon: 'react',
  //     name: 'React',
  //     options: [
  //       'NPI.',
  //       'Entiendo lo justo.',
  //       'Lo entiendo a grandes rasgos pero sin entrar en detalles.',
  //       'Controlo y conozco los diferentes pasos que sigue un componente.',
  //       'Abramov es un paquete a mi lado.'
  //     ],
  //     subtopic: 'Ciclo de vida'
  //   },
  //   {
  //     id: 11,
  //     icon: 'react',
  //     name: 'React',
  //     options: [
  //       'Conozco al capitán Garfio. La película me gustó bastante.',
  //       'Sólo conozco el useState y el useEffect.',
  //       'Los conozco bastante bien pero me gustaría profundizar.',
  //       'Los entiendo muy bien y creo los míos propios.',
  //       'No paro de hacer custom hooks.'
  //     ],
  //     subtopic: 'Hooks'
  //   },
  //   {
  //     id: 12,
  //     icon: 'react',
  //     name: 'React',
  //     options: [
  //       'Una vez estuve en los estados unidos.',
  //       'El useState y el setState son lo único que he utilizado.',
  //       'He utilizado reducers para el manejo de estados.',
  //       'Me he peleado con estados complejos y he vivido para contarlo.',
  //       'El Estado soy yo (feat. Luis XIV).'
  //     ],
  //     subtopic: 'Manejo de estados'
  //   },
  //   {
  //     id: 13,
  //     icon: 'solid',
  //     name: 'SOLID',
  //     options: [
  //       'SOLID, LIQUID, GAS, ¿no?',
  //       'La S la controlo.',
  //       'La S y la O las controlo y entiendo algo del resto.',
  //       'Entiendo y aplico todo menos al dichoso Liskov.',
  //       'Las domino y las aplico a la perfección.'
  //     ],
  //     subtopic: 'Principios S.O.L.I.D'
  //   },
  //   {
  //     id: 14,
  //     icon: 'git',
  //     name: 'GIT',
  //     options: [
  //       'Mi repositorio de código es mi disco duro.',
  //       'Trabajo siempre en la master.',
  //       'Sé crear, mergear, stashear y hacer Pull requests de ramas.',
  //       'Utilizo también los rebases y demás historias.',
  //       'Entiendo todas las funcionalidades.'
  //     ],
  //     subtopic: 'Manejo de repositorio'
  //   },
  //   {
  //     id: 15,
  //     icon: 'scrum',
  //     name: 'SCRUM',
  //     options: [
  //       '¿Ein?.',
  //       'Conozco las dailys.',
  //       'La utilizo a diario pero no conozco los distintos perfiles existentes.',
  //       'Controlo muy bien todo el flujo.',
  //       'He sido PO, Scrum master y toda la pesca.'
  //     ],
  //     subtopic: 'Metodología ágil'
  //   }
  // ];

  const formatSurvey = survey => {
    return `<b>Developer</b>: ${survey.developerName}<br/>
    ${survey.topics
      .map(topic => {
        const currentTopicOptions = surveyState.allTheTopics[topic.id].options;
        return `<b>Topic:</b> ${topic.name}<br/>
      <b>Subtopic:</b> ${topic.subtopic}<br/>
      <b>Options:</b> <ul>${currentTopicOptions
        .map(
          currentOption =>
            `<li>${currentOption === topic.selectedOption ? `<b>${currentOption}</b>` : currentOption}</li>`
        )
        .join('')}</ul><br/>
      <b>Selected option:</b> ${topic.selectedOption}<br/>
      <b>Additional info:</b> ${topic.additionalInfo}<br/>
      <hr/>`;
      })
      .join('')}
    <b>Additional info:</b> ${survey.additionalFinalInfo}
    `;
  };

  const onChangeSurveyValue = (topicId, property, value) => {
    dispatchSurvey({ type: 'UPDATE_SURVEY', payload: { property, topicId, value } });
  };

  const onChangeSurveyDeveloperInfo = (property, value) => {
    dispatchSurvey({ type: 'UPDATE_SURVEY_DEVELOPER_INFO', payload: { property, value } });
  };

  const onEmailSend = () => {
    let templateParams = {
      from_name: 'kikolabi@gmail.com',
      to_name: 'Kiko',
      subject: `${surveyState.developerName}'s survey`,
      message_html: formatSurvey(surveyState)
    };
    dispatchSurvey({ type: 'TOGGLE_SENDING', payload: { sending: true } });
    emailjs.send('gmail', 'template_srR2f0wZ', templateParams, 'user_jbFeAE0hpcmCWTYyR9VfD').then(response => {
      if (response.status >= 200 && response.status <= 299) {
        dispatchSurvey({ type: 'TOGGLE_SENDING', payload: { sending: false } });
        history.push(routes.SURVEY_SENDED);
      }
    });
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
      <h2>
        {surveyState.currentTopicIdx !== surveyState.allTheTopics.length
          ? `${surveyState.currentTopicIdx}/${surveyState.allTheTopics.length}`
          : 'Info adicional'}
      </h2>
      <div className={styles.topicWrapper}>
        {surveyState.allTheTopics.length > 0 && surveyState.currentTopicIdx !== surveyState.allTheTopics.length ? (
          <Topic
            id={surveyState.allTheTopics[surveyState.currentTopicIdx].id}
            icon={surveyState.allTheTopics[surveyState.currentTopicIdx].icon}
            name={surveyState.allTheTopics[surveyState.currentTopicIdx].name}
            onChangeSurveyValue={onChangeSurveyValue}
            options={surveyState.allTheTopics[surveyState.currentTopicIdx].options}
            subtopic={surveyState.allTheTopics[surveyState.currentTopicIdx].subtopic}
            topicSelectedOption={surveyState.topics[surveyState.currentTopicIdx].selectedOption}
            topicAdditionalInfo={surveyState.topics[surveyState.currentTopicIdx].additionalInfo}
          />
        ) : null}
        {console.log(surveyState.allTheTopics)}
        {surveyState.allTheTopics.length > 0 && surveyState.currentTopicIdx === surveyState.allTheTopics.length ? (
          <MoreInfoForm
            additionalFinalInfoProp={surveyState.additionalFinalInfo}
            developerNameProp={surveyState.developerName}
            onChangeSurveyDeveloperInfo={onChangeSurveyDeveloperInfo}
          />
        ) : null}
        <div className={styles.buttonsWrapper}>
          {surveyState.currentTopicIdx > 0 ? (
            <Button label={'Anterior'} icon="pi pi-chevron-left" onClick={onPreviousTopic} />
          ) : null}
          {surveyState.currentTopicIdx < surveyState.allTheTopics.length ? (
            <Button
              label={'Siguiente'}
              icon="pi pi-chevron-right"
              onClick={onNextTopic}
              iconPos="right"
              style={{ marginLeft: '20rem', marginTop: '1rem' }}
            />
          ) : null}
          {surveyState.currentTopicIdx === surveyState.allTheTopics.length ? (
            <Button
              className="p-button-success"
              disabled={
                surveyState.topics.filter(topic => topic.selectedOption === '').length > 0 || surveyState.sendingEmail
              }
              label={'Enviar'}
              icon={surveyState.sendingEmail ? 'pi pi-spin pi-spinner' : 'pi pi-cloud-upload'}
              onClick={onEmailSend}
              iconPos="right"
              style={{ marginLeft: '20rem', marginTop: '1rem' }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
});

export { Survey };
