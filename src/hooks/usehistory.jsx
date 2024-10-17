import { useState } from 'react';
import { useConfigContext } from '../contexts/configprovider';

export const useHistory = (formData, setFormData) => {
  const { maxHistorySize, debounceDelayTime } = useConfigContext();
  const [isSaving, setIsSaving] = useState(false);
  const [history, setHistory] = useState([formData]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleFormDataChange = (newFormData) => {
    setIsSaving(true);
    setFormData(newFormData);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const newTimeoutId = setTimeout(() => {
      const auxHistory = history.slice(0, historyIndex + 1);
      if (auxHistory.length > maxHistorySize) {
        auxHistory.shift();
      }
      auxHistory.push(newFormData);
      setHistory(auxHistory);
      setHistoryIndex(auxHistory.length - 1);
      setIsSaving(false);
    }, debounceDelayTime);

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

  return {
    isSaving,
    handleFormDataChange,
    handleUndo,
    handleRedo,
    history,
    historyIndex,
  };
};

/*
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






// src/hooks/useHistory.js
import { useState } from 'react';

const maxHistorySize = 10;

export const useHistory = (initialData) => {
  const [history, setHistory] = useState([initialData]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const saveToHistory = (data) => {
    const newHistory = history.slice(0, historyIndex + 1);
    if (newHistory.length > maxHistorySize) {
      newHistory.shift();
    }
    newHistory.push(data);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
    }
  };

  return { history, historyIndex, saveToHistory, undo, redo };
};


*/

/*
import { useState, useEffect } from 'react';



/*import { useState, useEffect, useRef } from 'react';

const useUndoRedo = (initialValue, limit = 10) => {
  const [history, setHistory] = useState([initialValue]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef(null);

  const set = (value) => {
    let newHistory = history.slice(0, currentIndex + 1);
    newHistory.push(value);

    if (newHistory.length > limit) {
      newHistory = newHistory.slice(newHistory.length - limit);
    }

    setHistory(newHistory);
    setCurrentIndex(newHistory.length - 1);
    console.log(newHistory);
  };

  const undo = () => {
    setCurrentIndex((currentIndex) => Math.max(currentIndex - 1, 0));
  };

  const redo = () => {
    setCurrentIndex((currentIndex) =>
      Math.min(currentIndex + 1, history.length - 1)
    );
  };

  useEffect(() => {});
x
  return [history[currentIndex], set, undo, redo];
};
export default useUndoRedo;
*/
