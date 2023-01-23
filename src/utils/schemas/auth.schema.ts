import * as yup from "yup";

export const authSchema = yup.object().shape({
    username: yup.string()
    .min(4)
    .max(20)
    .label('username'),

    password: yup.string()
    .min(4)
    .max(20)
    .matches(new RegExp(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/),
    'Require one lowercase and one uppercase character and one special character'
    )
    .label('password'),
});