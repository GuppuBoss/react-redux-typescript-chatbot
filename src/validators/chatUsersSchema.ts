import * as Yup from 'yup';

export const ChatUsersSchema =  Yup.object().shape({
    userName1: Yup.string().min(3, 'First Username is Too Short!').max(20, 'First Username is Too Long!').required('First Username is Required'),
    userName2: Yup.string().min(3, 'Second Username is Too Short!').max(20, 'Second Username is Too Long!').required('Second Username is Required')
});