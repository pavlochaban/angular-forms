import { FormControlConfig } from "@modules/forms/models/form-control-config";

export const FORM_CONFIG: FormControlConfig = {
  firstName: {
    controlType: 'input',
    type: 'text',
    label: 'First Name',
    placeholder: 'Enter your name',
    autocomplete: 'username',
    order: 0,
  },
  lastName: {
    controlType: 'input',
    type: 'text',
    label: 'Last Name',
    placeholder: 'Enter your last name',
    order: 1,
  },
  nickname: {
    controlType: 'input',
    type: 'text',
    label: 'Nickname',
    placeholder: 'Enter your nickname',
    order: 2,
  },
  email: {
    controlType: 'input',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email',
    order: 3,
  },
  birthday: {
    controlType: 'date',
    label: 'Choose a date',
    order: 4,
  },
  address: {
    controlType: 'group',
    label: 'Address',
    htmlClass: 'td-form__address-fieldset',
    order: 5,
    controls: {
      fullAddress: {
        controlType: 'input',
        type: 'text',
        label: 'Full Address',
        placeholder: 'Street name and house number',
        htmlClass: 'td-form__full-address',
        order: 0,
      },
      city: {
        controlType: 'input',
        type: 'text',
        label: 'City',
        placeholder: 'Enter city',
        htmlClass: 'td-form__city',
        order: 1,
      },
      postalCode: {
        controlType: 'input',
        type: 'number',
        label: 'Post Code',
        placeholder: 'Enter postal code',
        htmlClass: 'td-form__postal-code',
        order: 2,
      },
    }
  },
  phones: {
    controlType: 'custom_phones',
    label: 'Phones',
    htmlClass: 'td-form__phones-fieldset',
    order: 6,
  },
  skills: {
    controlType: 'custom_skills',
    label: 'Skills',
    htmlClass: 'td-form__skills-fieldset',
    order: 7,
  },
  credentials: {
    controlType: 'group',
    label: 'Credentials',
    htmlClass: 'td-form__password-fieldset',
    order: 8,
    controls: {
      password: {
        controlType: 'input',
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        autocomplete: 'new-password',
        order: 0,
      },
      confirmPassword: {
        controlType: 'input',
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
        order: 1,
      },
    }
  }
};
