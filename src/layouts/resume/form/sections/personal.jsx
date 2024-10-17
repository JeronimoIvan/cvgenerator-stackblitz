import { Button } from '@mui/material';
import { DataTypePopover } from '../../components/popover';

const PersonalSection = ({ data, index, formData, handleFormDataChange }) => {
  const handleAddCustomField = () => {};

  return (
    <div>
      <Button
        sx={{
          border: '1px solid #e9e9ea',
          marginBottom: 2,
          marginLeft: -0.9,
          borderRadius: '6px',
          padding: '6px',
        }}
        onClick={() => addSKILL(index)}
      >
        + Adicionar competência
      </Button>
      <div />
    </div>
  );
};

export default PersonalSection;

/*

 {data.sectionContent.map((item, key) => (
        <div>
          {item.labelName}
          {item.inputType === 'text' && (
            <input type={item.inputType} value={item.value} />
          )}
          {item.inputType === 'email' && (
            <input type={item.inputType} value={item.value} />
          )}
        </div>
      ))}
      <div />




      <Button sx={{ height: 30 }} variant="outlined">
        + Disabled
      </Button>
 inputType: 'text',
        references: 'firstName',
        labelName: 'First Name',
        value: 'Jerónimo',
        canRemove: false,
        isRequired: true,
*/
