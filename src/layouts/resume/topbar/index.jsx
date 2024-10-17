import { useTranslation } from 'react-i18next';
const TopBar = ({
  isSaving,
  history,
  historyIndex,
  handleUndo,
  handleRedo,
}) => {
  const { t } = useTranslation();

  return (
    <div>
      {isSaving ? 'Saving...' : 'Salvo'}
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
  );
};

export default TopBar;
