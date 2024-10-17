const Header = ({ data, index, formData, handleFormDataChange }) => {
  const handleSectionNameChange = (newSectionName) => {
    const auxFormData = [...formData];
    auxFormData[index] = { ...auxFormData[index], sectionName: newSectionName };
    handleFormDataChange(auxFormData);
  };

  const handleSectionRemove = () => {
    const auxFormData = [...formData];
    auxFormData.splice(index, 1);
    handleFormDataChange(auxFormData);
  };

  const handleSectionPositionChange = () => {
    const auxFormData = [...formData];
    auxFormData[index] = {
      ...auxFormData[index],
      layoutPosition:
        auxFormData[index].layoutPosition === 'left' ? 'right' : 'left',
    };
    handleFormDataChange(auxFormData);
  };

  return (
    <div>
      <input
        placeholder="Section Title"
        value={data.sectionName}
        onChange={(e) => handleSectionNameChange(e.target.value, index)}
      />
      {data.dataType !== 'personal' && (
        <>
          <button onClick={() => handleSectionRemove(index)}>
            Delete Section
          </button>
          <button onClick={() => handleSectionPositionChange(index)}>
            {data.layoutPosition === 'left' ? 'Move to right' : 'Move to left'}
          </button>
        </>
      )}
    </div>
  );
};

export default Header;
