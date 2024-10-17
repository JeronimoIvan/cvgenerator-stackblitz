import { useHistory } from '../../../../hooks';

const DescriptionSection = ({
  data,
  index,
  formData,
  handleFormDataChange,
}) => {
  const handleDescriptionChange = (newDescription) => {
    const auxFormData = [...formData];
    auxFormData[index] = {
      ...auxFormData[index],
      sectionContent: newDescription,
    };
    handleFormDataChange(auxFormData);
  };

  return (
    <div>
      <input
        placeholder="Seccao Personalizada"
        value={data.sectionContent}
        onChange={(e) => handleDescriptionChange(e.target.value)}
      />
    </div>
  );
};

export default DescriptionSection;

//<DescriptionSection data={item} index={index} formData={formData} />
