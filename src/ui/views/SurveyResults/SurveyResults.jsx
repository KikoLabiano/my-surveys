import React from 'react';
import { withRouter } from 'react-router-dom';

import { AwesomeIcons } from 'conf/AwesomeIcons';
import { Chart } from 'primereact/chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SurveyResults = withRouter(() => {
  const options = {
    legend: {
      labels: {
        fontColor: 'white',
        fontSize: 16
      }
    },
    scale: {
      angleLines: {
        color: '#fff'
      },
      pointLabels: {
        fontColor: '#fff',
        fontSize: 16
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 5
      },
      gridLines: { color: '#fff' }
    }
  };

  const data = {
    labels: [
      'CSS-Selectores',
      'CSS-Flexbox',
      'CSS-Variables',
      'CSS-Animaciones',
      'JS-Scope',
      'JS-TiposVariables',
      'JS-ArrayPrototypeFunc',
      'JS-Referencias',
      'JS-Promises',
      'JS-ArrowFunc',
      'React-CicloVida',
      'React-Hooks',
      'React-Estados',
      'SOLID',
      'GIT',
      'SCRUM'
    ],
    datasets: [
      {
        label: 'Developer 1',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [4, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 2, 2, 4, 3, 5]
      },
      {
        label: 'Developer 2',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [4, 4, 3, 3, 4, 4, 3, 2, 4, 4, 3, 4, 3, 3, 3, 4]
      },
      {
        label: 'Developer 3',
        backgroundColor: 'rgba(125,99,132,0.2)',
        borderColor: 'rgba(125,99,132,1)',
        pointBackgroundColor: 'rgba(125,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [3, 3, 3, 2, 3, 3, 3, 2, 3, 4, 3, 3, 3, 3, 3, 4]
      },
      {
        label: 'Developer 4',
        backgroundColor: 'rgba(220,199,132,0.2)',
        borderColor: 'rgba(220,199,132,1)',
        pointBackgroundColor: 'rgba(220,199,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [4, 3, 4, 3, 3, 4, 4, 3, 4, 4, 3, 3, 4, 3, 3, 4]
      },
      {
        label: 'Developer 5',
        backgroundColor: 'rgba(0,199,132,0.2)',
        borderColor: 'rgba(0,199,132,1)',
        pointBackgroundColor: 'rgba(0,199,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [5, 5, 4, 4, 4, 4, 3, 3, 4, 4, 4, 4, 1, 3, 3]
      },
      {
        label: 'Developer 6',
        backgroundColor: 'rgba(0,99,132,0.2)',
        borderColor: 'rgba(0,99,132,1)',
        pointBackgroundColor: 'rgba(0,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [4, 3, 3, 3, 2, 3, 3, 2, 2, 3, 2, 3, 3, 3, 3]
      },
      {
        label: 'Developer 7',
        backgroundColor: 'rgba(0,9,132,0.2)',
        borderColor: 'rgba(0,9,132,1)',
        pointBackgroundColor: 'rgba(0,9,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [3, 3, 2, 3, 3, 4, 3, 1, 3, 3, 4, 3, 2, 2, 2, 3]
      },
      {
        label: 'Developer 8',
        backgroundColor: 'rgba(255,9,32,0.2)',
        borderColor: 'rgba(255,9,32,1)',
        pointBackgroundColor: 'rgba(255,99,32,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [3, 3, 3, 2, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 3, 2]
      }
    ]
  };

  return (
    <div>
      {/* <FontAwesomeIcon className={styles.emailSended} icon={AwesomeIcons('envelope')} />
      <FontAwesomeIcon className={styles.emailSendedIcon} icon={AwesomeIcons('check')} /> */}
      <Chart type="radar" data={data} height={'1000px'} options={options} width={'1000px'} />
    </div>
  );
});

export { SurveyResults };
