import React, { useEffect, useState, useRef } from 'react';

import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';

const MoreInfoForm = ({ additionalFinalInfoProp, developerNameProp, onChangeSurveyDeveloperInfo }) => {
  const [developerName, setDeveloperName] = useState(developerNameProp);
  const [additionalFinalInfo, setAdditionalFinalInfo] = useState(additionalFinalInfoProp);

  const opRef = useRef();
  const opInsultRef = useRef();
  const opStalkerRef = useRef();

  useEffect(() => {
    setDeveloperName(developerNameProp);
    setAdditionalFinalInfo(additionalFinalInfoProp);
  }, [developerNameProp, additionalFinalInfoProp]);

  const renderNameInfo = () => {
    return (
      <div>
        <label htmlFor="developerNameInput">{'Tu nombre: '}</label>
        <InputText
          id="developerNameInput"
          onChange={e => {
            setDeveloperName(e.target.value);
            onChangeSurveyDeveloperInfo('developerName', e.target.value);
          }}
          value={developerName}
        />
      </div>
    );
  };

  const renderFinalInfo = () => {
    return (
      <div>
        <h5>
          ¿Te gustaría comentar algo más? Si quieres{' '}
          <a onMouseEnter={e => opInsultRef.current.toggle(e)} onMouseLeave={() => opInsultRef.current.hide()}>
            insultarme
          </a>{' '}
          , opinar, o{' '}
          <a onMouseEnter={e => opRef.current.toggle(e)} onMouseLeave={() => opRef.current.hide()}>
            quejarte de la juventud
          </a>
          , aquí puedes hacerlo.
        </h5>
        <h5>
          Estaré{' '}
          <a onMouseEnter={e => opStalkerRef.current.toggle(e)} onMouseLeave={() => opStalkerRef.current.hide()}>
            atento.
          </a>
        </h5>
        <OverlayPanel ref={opInsultRef} style={{ width: '400px' }}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F87505d34cc7430500dd696805aa99668%2Ftumblr_mj0xkz3GCD1r6gt8vo1_400.gif&f=1&nofb=1"
            style={{ width: '350px' }}
          />
        </OverlayPanel>
        <OverlayPanel ref={opRef} style={{ width: '250px' }}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FtJ-LivK4-78%2Fhqdefault.jpg&f=1&nofb=1"
            style={{ width: '200px' }}
          />
        </OverlayPanel>
        <OverlayPanel ref={opStalkerRef} style={{ width: '250px' }}>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.reactiongifs.com%2Fwp-content%2Fuploads%2F2011%2F06%2Fhomer_lurk.gif&f=1&nofb=1"
            style={{ width: '200px' }}
          />
        </OverlayPanel>
        <Editor
          onTextChange={e => {
            onChangeSurveyDeveloperInfo('additionalFinalInfo', e.htmlValue);
          }}
          style={{ height: '320px' }}
          value={additionalFinalInfo}
        />
      </div>
    );
  };

  return (
    <div>
      {renderNameInfo()}
      {renderFinalInfo()}
    </div>
  );
};

export { MoreInfoForm };
