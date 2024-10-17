import { useState, useEffect } from 'react';
import { defaultFormData } from './constants/defaultformdata';

const maxHistorySize = 10;
const DEBOUNCE_DELAY = 2000; // 1 segundo

export default function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const [history, setHistory] = useState([defaultFormData]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const saveToHistory = (data) => {
    const auxHistory = history.slice(0, historyIndex + 1);
    if (auxHistory.length > maxHistorySize) {
      auxHistory.shift();
    }
    auxHistory.push(data);
    setHistory(auxHistory);
    setHistoryIndex(auxHistory.length - 1);
    setIsSaving(false);
  };

  const handleFormDataChange = (newFormData) => {
    setIsSaving(true);
    setFormData(newFormData);

    // Limpa o timeout anterior se existir
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Define um novo timeout para salvar o histórico
    const newTimeoutId = setTimeout(() => {
      saveToHistory(newFormData);
    }, DEBOUNCE_DELAY);

    setDebounceTimeout(newTimeoutId);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setFormData(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setFormData(history[newIndex]);
      setHistoryIndex(newIndex);
    }
  };

  const handleSectionNameChange = (newSectionName, index) => {
    const auxFormData = [...formData];
    auxFormData[index] = { ...auxFormData[index], sectionName: newSectionName };
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

  //DESCRIPTION SECTION

  const handleAddDescriptionSection = () => {
    const auxFormData = [...formData];
    auxFormData.push({
      sectionName: '',
      dataType: 'description',
      position: 'left',
      value: '',
    });
    handleFormDataChange(auxFormData);
  };

  const handleDescriptionDataChange = (newDescription, index) => {
    const auxFormData = [...formData];
    auxFormData[index] = {
      ...auxFormData[index],
      value: newDescription,
    };
    handleFormDataChange(auxFormData);
  };

  //LIST SECTION
  const handleAddListSection = () => {};

  const handleAddListInput = () => {};

  //LANGUAGE SECTION
  const handleAddLanguageSection = () => {
    const auxFormData = [...formData];
    auxFormData.push({
      sectionName: 'Languages',
      dataType: 'languages',
      position: 'left',
      value: [{ language: '', proficiency: 'Beginner' }],
    });
    handleFormDataChange(auxFormData);
  };

  const handleAddLanguage = (index) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: [...item.value, { language: '', proficiency: 'Beginner' }],
        };
      }
      return item;
    });
    handleFormDataChange(updatedFormData);
  };

  const handleLanguageTitleChange = (newTitle, index, key) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: item.value.map((lang, j) => {
            if (j === key) {
              return { ...lang, language: newTitle };
            }
            return lang;
          }),
        };
      }
      return item;
    });
    handleFormDataChange(updatedFormData);
  };

  const handleLanguageProficiencyChange = (newProficiency, index, key) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: item.value.map((lang, j) => {
            if (j === key) {
              return { ...lang, proficiency: newProficiency };
            }
            return lang;
          }),
        };
      }
      return item;
    });
    handleFormDataChange(updatedFormData);
  };

  const handleLanguageRemove = (index, key) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: item.value.filter((_, j) => j !== key), // Filtra o idioma
        };
      }
      return item;
    });
    handleFormDataChange(updatedFormData);
  };

  //HOBBIES SECTION
  const handleAddHobbySection = () => {
    const auxFormData = [...formData];
    auxFormData.push({
      sectionName: 'Hobbies',
      dataType: 'hobbies',
      position: 'left',
      value: [{ hobby: '' }],
    });
    handleFormDataChange(auxFormData);
  };

  const handleAddHobby = (index) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: [...item.value, { Hobby: '' }],
        };
      }
      return item;
    });
    handleFormDataChange(updatedFormData);
  };

  const handleHobbyTitleChange = (newHobby, index, key) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: item.value.map((hobby, j) => {
            if (j === key) {
              return { ...hobby, hobby: newHobby };
            }
            return hobby;
          }),
        };
      }
      return item;
    });
    handleFormDataChange(updatedFormData);
  };

  const handleHobbyRemove = (index, key) => {
    const updatedFormData = formData.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          value: item.value.filter((_, j) => j !== key), // Filtra o idioma
        };
      }
      return item;
    });
    handleFormDataChange(updatedFormData);
  };

  //REFACTORING FUNCTIONS

  const handleAddNewSection = () => {};

  return (
    <div>
      <p>{isSaving ? 'Salvando...' : 'Salvo'}</p>
      <div>
        <button onClick={handleUndo} disabled={historyIndex === 0}>
          Undo
        </button>
        <button
          onClick={handleRedo}
          disabled={historyIndex === history.length - 1}
        >
          Redo
        </button>
      </div>
      {formData.map((item, index) => (
        <div key={index}>
          <div style={{ marginTop: 50 }}>
            <input
              placeholder="Section Title"
              value={item.sectionName}
              onChange={(e) => handleSectionNameChange(e.target.value, index)}
            />
            {item.dataType !== 'personal' && (
              <>
                <button onClick={() => handleSectionRemove(index)}>
                  Delete Section
                </button>
                <button onClick={() => handleSectionPositionChange(index)}>
                  {item.position === 'left' ? 'Move to right' : 'Move to left'}
                </button>
              </>
            )}
          </div>

          {item.dataType === 'personal' && (
            <div>
              <input value={item.value.firstName} />
              <input value={item.value.lastName} />
            </div>
          )}

          {item.dataType === 'description' && (
            <input
              placeholder="Description"
              value={item.value}
              onChange={(e) =>
                handleDescriptionDataChange(e.target.value, index)
              }
            />
          )}

          {item.dataType === 'languages' && (
            <div>
              {item.value.map((languageItem, key) => (
                <div key={key}>
                  <input
                    value={languageItem.language}
                    onChange={(e) =>
                      handleLanguageTitleChange(e.target.value, index, key)
                    }
                  />
                  <select
                    value={languageItem.proficiency} // Define o valor do select
                    onChange={(e) =>
                      handleLanguageProficiencyChange(
                        e.target.value,
                        index,
                        key
                      )
                    }
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Elementary">Elementary</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Fluent">Fluent</option>
                  </select>
                  <button onClick={() => handleLanguageRemove(index, key)}>
                    Delete Language
                  </button>
                </div>
              ))}
              <button onClick={() => handleAddLanguage(index)}>
                + Add Language
              </button>
            </div>
          )}

          {item.dataType === 'hobbies' && (
            <div>
              {item.value.map((item, key) => (
                <div>
                  <input
                    value={item.hobby}
                    onChange={(e) =>
                      handleHobbyTitleChange(e.target.value, index, key)
                    }
                  />
                  <button onClick={() => handleHobbyRemove(index, key)}>
                    Delete Hobby
                  </button>
                </div>
              ))}
              <button onClick={() => handleAddHobby(index)}>+ Add Hobby</button>
            </div>
          )}

          {item.dataType === 'experience' && (
            <div>
              {item.value.map((item, key) => (
                <div>
                  <input value={item.description} />
                </div>
              ))}
            </div>
          )}

          {item.dataType === 'education' && (
            //INCLUIR BOTOES PARA ADICIONAR NOVOS CAMPOS DISNECESSARIOS NO INICIO
            <div>
              {item.value.map((item, key) => (
                <div>
                  <input value={item.institution} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div style={{ marginTop: 30 }}>
        <button
          onClick={() =>
            handleAddNewSection({
              sectionName: 'Hobbies',
              dataType: 'hobbies',
              position: 'left',
              value: [{ hobby: '' }],
            })
          }
        >
          + Add Hobbies Section
        </button>

        <button onClick={() => handleAddHobbySection()}>
          + Add Hobbies Section
        </button>
        <button onClick={() => handleAddLanguageSection()}>
          + Add Languages Section
        </button>
        <button onClick={() => handleAddDescriptionSection()}>
          Add Description Section
        </button>
        <button onClick={() => handleAddListSection()}>Add List Section</button>
      </div>
    </div>
  );
}

/*

import { useState } from 'react';
import { defaultFormData } from './constants';

export default function App() {
  const [formData, setFormData] = useState(defaultFormData);
  const [history, setHistory] = useState([defaultFormData]);

  const editHistoryOnArray = (newText, position) => {
    const auxHistory = [...history];
    auxHistory[position] = { ...auxHistory[position], sectionName: newText }; // Atualiza a seção corretamente
    setHistory(auxHistory);
    setFormData(auxHistory);
  };

  return (
    <div>
      {formData.map((item, index) => (
        <div key={index}>
          <input
            value={item.sectionName}
            onChange={(e) => editHistoryOnArray(e.target.value, index)}
          />
        </div>
      ))}
    </div>
  );
}


import { useState, useEffect } from 'react';
import { defaultFormData } from './constants';
import { useUndoRedo } from './hooks';

export default function App() {
  // const [formData, setFormData] = useState(defaultFormData);
  const [formData, setFormData, undo, redo] = useUndoRedo(defaultFormData, 25);

  const handleSectionNameChange = (e, index) => {
    const auxFormData = [...formData];
    auxFormData[index].sectionName = e.target.value;
    setFormData(auxFormData);
  };

  return (
    <div>
      <div>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
      {formData.map((item, index) => (
        <div key={index}>
          <input
            value={item.sectionName}
            onChange={(e) => handleSectionNameChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
}*/

/*
  //const [value, setValue, undo, redo, inputRef] = useUndoRedo('', 25);

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>


import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState('');
  const [history, setHistory] = useState([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  const handleFormDataChange = (newFormData) => {
    console.log(newFormData);
    setFormData(newFormData);
    const newHistory = history.slice(0, currentHistoryIndex + 1);
    newHistory.push(newFormData);
    setHistory(newHistory);
    setCurrentHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    setCurrentHistoryIndex((currentHistoryIndex) =>
      Math.max(currentHistoryIndex - 1, 0)
    );
    setFormData(history[currentHistoryIndex]);
  };

  const handleRedo = () => {
    setCurrentHistoryIndex((currentHistoryIndex) =>
      Math.min(currentHistoryIndex + 1, history.length - 1)
    );
    setFormData(history[currentHistoryIndex]);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleUndo()}>undo</button>
        <button onClick={() => handleRedo()}>redo</button>
      </div>
      <input
        value={formData}
        onChange={(e) => handleFormDataChange(e.target.value)}
      />
      hello
      <div></div>
    </div>
  );
}

*/
