import * as Yup from 'yup'

export const feedbackSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phoneNumber: Yup
        .string()
        .matches(/^[0-9]+$/, 'Phone number must contain only numeric digits')
        .min(10, 'Phone number must be at least 10 digits')
        .max(10, 'Phone number can be at most 10 digits')
        .required('Phone number is required'),
});
