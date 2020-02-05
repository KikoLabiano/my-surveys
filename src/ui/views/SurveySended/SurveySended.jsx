import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SurveySended.module.css';

import { AwesomeIcons } from 'conf/AwesomeIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SurveySended = withRouter(() => {
  return (
    <div>
      <FontAwesomeIcon className={styles.emailSended} icon={AwesomeIcons('envelope')} />
      <FontAwesomeIcon className={styles.emailSendedIcon} icon={AwesomeIcons('check')} />
      <h3 className={styles.emailSendedMessage}>Email enviado. ¡Gracias!</h3>
    </div>
  );
});

export { SurveySended };
