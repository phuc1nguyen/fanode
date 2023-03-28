import { Joi, Segments } from 'celebrate';

export const register = {
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string()
      .min(6)
      .max(100)
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)
      .required(),
    employeeNumber: Joi.number().integer().positive().required(),
  }),
};
