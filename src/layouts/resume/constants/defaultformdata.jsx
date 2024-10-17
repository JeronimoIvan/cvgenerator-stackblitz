export const defaultFormData = [
  {
    sectionName: 'Personal Information',
    defaultSectionName: 'Personal Information',
    dataType: 'personal',
    sectionAlignment: 'right',
    sectionContent: [
      {
        references: 'firstName',
        labelName: 'First Name',
        inputType: 'text',
        value: 'Jerónimo',
        canRemove: false,
        isRequired: true,
      },
      {
        references: 'lastName',
        labelName: 'Last Name',
        inputType: 'text',
        value: 'Sitefane',
        canRemove: false,
        isRequired: true,
      },
      {
        inputType: 'email',
        references: 'email',
        labelName: 'Email Address',
        value: 'jeronimoivanernesto@gmail.com',
        canRemove: false,
        isRequired: true,
      },
    ],
  },
];
