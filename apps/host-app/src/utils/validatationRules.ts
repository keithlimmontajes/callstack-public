import * as Yup from 'yup';

const nameRegExp = new RegExp("^[a-zA-Z-.',]+( [a-zA-Z-.',]+)*$");

const firstLastEmailCharLimit = 50;
const maxCharacters = (label: string) =>
  `${label} must be at most ${firstLastEmailCharLimit} characters`;

const firstNameSchema = Yup.string()
  .required('First name is required')
  .max(firstLastEmailCharLimit, maxCharacters('First name'))
  .matches(nameRegExp, 'Please enter a valid first name');

const lastNameSchema = Yup.string()
  .required('Last name is required')
  .max(firstLastEmailCharLimit, maxCharacters('Last name'))
  .matches(nameRegExp, 'Please enter a valid last name');

const emailSchema = Yup.string()
  .email('Please input a valid email')
  .max(firstLastEmailCharLimit, maxCharacters('Email'))
  .required('Email is required');

const phoneSchema = Yup.string()
  .required('Phone number is required')
  .matches(/^[0-9]+$/, 'Phone number must be only digits')
  .min(10, 'Phone number must be exactly 10 digits')
  .max(10, 'Phone number must be exactly 10 digits')
  .matches(/^[9]\d{9}$/, 'Invalid Phone number')
  .typeError('Phone number must be a number');

const passwordSchema = Yup.string()
  .required('Password is required')
  .min(8)
  .label('Password');

const confirmPasswordSchema = Yup.string()
  .required()
  .min(8)
  .label('Confirm Password');

const oldPasswordSchema = confirmPasswordSchema.label('Old Password');

const newPasswordSchema = confirmPasswordSchema.label('New Password');

const confirmNewPasswordSchema = confirmPasswordSchema.oneOf(
  [Yup.ref('newPassword'), null],
  'Please make sure your passwords match.',
);

// sample card schema
const cardNumberSchema = Yup.number()
  .typeError('Card Number must be a number')
  .required()
  .label('Card Number');

const monthSchema = Yup.number()
  .typeError('Month must be a number')
  .required()
  .label('Month');
const yearSchema = Yup.number()
  .typeError('Year must be a number')
  .required()
  .label('Year');
const cvvSchema = Yup.number()
  .typeError('CVV must be a number')
  .required()
  .label('CVV');
const zipSchema = Yup.string().required().label('Zip Code');

function createSchema(object: any) {
  return Yup.object().shape(object);
}

function fieldRequired(label: string, type: any) {
  return Yup[type]().required().label(label);
}

function typeSchema(label: string, type: any) {
  return Yup[type]().label(label);
}

export default {
  firstLastEmailCharLimit,
  firstNameSchema,
  lastNameSchema,
  emailSchema,
  phoneSchema,
  passwordSchema,
  confirmPasswordSchema,
  oldPasswordSchema,
  newPasswordSchema,
  confirmNewPasswordSchema,
  cardNumberSchema,
  monthSchema,
  yearSchema,
  cvvSchema,
  zipSchema,
  createSchema,
  fieldRequired,
  typeSchema,
};
