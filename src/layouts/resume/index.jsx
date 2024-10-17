import { useState, useEffect } from 'react';
import { defaultFormData } from './constants/defaultformdata';
import { useHistory } from '../../hooks';

import Form from './form';
import TopBar from './topbar';
import ResumeViewer from './viewer';

export default function Resume() {
  const [formData, setFormData] = useState(defaultFormData);
  const {
    isSaving,
    handleFormDataChange,
    handleUndo,
    handleRedo,
    history,
    historyIndex,
  } = useHistory(formData, setFormData);

  return (
    <div>
      <TopBar
        formData={formData}
        setFormData={setFormData}
        isSaving={isSaving}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        history={history}
        historyIndex={historyIndex}
      />
      <Form
        formData={formData}
        setFormData={setFormData}
        handleFormDataChange={handleFormDataChange}
      />
      {/*<ResumeViewer />*/}
    </div>
  );
}

/*
formData={formData} setFormData={setFormData}
*/
