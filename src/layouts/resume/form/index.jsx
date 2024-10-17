import { customSections } from '../constants';
import {
  Header,
  PersonalSection,
  DescriptionSection,
  ListSection,
  SkillSection,
  ExperienceSection,
  EducationSection,
} from './sections';

const Form = ({ formData, setFormData, handleFormDataChange }) => {
  return (
    <div>
      {formData.map((item, index) => (
        <div key={index} style={{ marginTop: 30 }}>
          <Header
            data={item}
            index={index}
            formData={formData}
            handleFormDataChange={handleFormDataChange}
          />

          {item.dataType === 'personal' && (
            <PersonalSection
              data={item}
              index={index}
              formData={formData}
              handleFormDataChange={handleFormDataChange}
            />
          )}

          {item.dataType === 'description' && (
            <DescriptionSection
              data={item}
              index={index}
              formData={formData}
              handleFormDataChange={handleFormDataChange}
            />
          )}

          {item.dataType === 'list' && (
            <ListSection
              data={item}
              index={index}
              formData={formData}
              handleFormDataChange={handleFormDataChange}
            />
          )}

          {item.dataType === 'skill' && (
            <SkillSection
              data={item}
              index={index}
              formData={formData}
              handleFormDataChange={handleFormDataChange}
            />
          )}

          {item.dataType === 'experience' && (
            <ExperienceSection
              data={item}
              index={index}
              formData={formData}
              handleFormDataChange={handleFormDataChange}
            />
          )}

          {item.dataType === 'education' && (
            <EducationSection
              data={item}
              index={index}
              formData={formData}
              handleFormDataChange={handleFormDataChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Form;

/*
 {customSections.map((intem, index) => (
        <div>dsdsd</div>
      ))}

import { dataTypes } from '../../../constants/datatypes';
import { useHistory } from '../../../hooks/usehistory';
import { useTranslation } from 'react-i18next';

//COMPONENTS
import { TopBar } from '../components/topbar';

//SECTIONS
import { DescriptionSection } from '../sections';

export default function Form({ formData, setFormData }) {
  const { t } = useTranslation();
  const {
    isSaving,
    handleFormDataChange,
    handleUndo,
    handleRedo,
    history,
    historyIndex,
  } = useHistory(formData, setFormData);

  const handleAddNewSection = (data) => {
    const auxFormData = [...formData];
    auxFormData.push(data);
    handleFormDataChange(auxFormData);
  };

  const handleSectionRemove = (index) => {
    const auxFormData = [...formData];
    auxFormData.splice(index, 1);
    handleFormDataChange(auxFormData);
  };

  const handleSectionPositionChange = (index) => {
    const auxFormData = [...formData];
    auxFormData[index] = {
      ...auxFormData[index],
      position: auxFormData[index].position === 'left' ? 'right' : 'left',
    };
    handleFormDataChange(auxFormData);
  };

  const handleInputChange = () => {};

  return (
    <div>
      <div>
        <p>{isSaving ? 'Saving...' : 'Salvo'}</p>
        <button disabled={historyIndex === 0} onClick={() => handleUndo()}>
          {t('undo')}
        </button>
        <button
          disabled={historyIndex === history.length - 1}
          onClick={() => handleRedo()}
        >
          {t('redo')}
        </button>
      </div>

      {formData.map((item, index) => (
        <div key={index} style={{ marginTop: 30 }}>
          <div>
            <input value={t(item.sectionName)} />
            {item.dataType !== 'personal' && (
              <>
                <button onClick={() => handleSectionRemove(index)}>
                  {t('Remove Section')}
                </button>
                <button onClick={() => handleSectionPositionChange(index)}>
                  {item.position === 'left' ? 'Move to right' : 'Move to left'}
                </button>
              </>
            )}
          </div>

          <div style={{ marginTop: 5 }}>
            {item.dataType === 'aboutme' && (
              <input
                value={item.value}
                placeholder={t('Tell us a little about yourself')}
                onChange={(e) => {}}
              />
            )}

            {item.dataType === 'description' && <></>}
          </div>
        </div>
      ))}

      {dataTypes.map((item, index) => {
        const exists = formData.some(
          (formItem) => formItem.sectionName === item.sectionName
        );
        return !exists ? (
          <button
            key={index}
            style={{ marginTop: 30 }}
            onClick={() => handleAddNewSection(item)}
          >
            + {t(item.sectionName)}
          </button>
        ) : null;
      })}
    </div>
  );
}
*/
