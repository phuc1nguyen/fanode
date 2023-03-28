import { Joi, Segments } from 'celebrate';

export const create = {
  [Segments.BODY]: Joi.object().keys({
    employeeNumber: Joi.number().integer().positive().required(),
    lastName: Joi.string().min(3).max(50).required(),
    firstName: Joi.string().min(3).max(50).required(),
    extension: Joi.string().max(50).required(),
    email: Joi.string().email().min(10).max(100).required(),
    officeCode: Joi.string().max(10).required(),
    reportsTo: Joi.number().integer().positive(),
    jobTitle: Joi.string().valid('President', 'Manager', 'Leader', 'Staff').required(),
  }),
};

export const update = {
  [Segments.BODY]: Joi.object()
    .keys({
      // employeeNumber: Joi.number().integer().positive().required(),  --> not able to update
      // lastName: Joi.string().min(3).max(50).required(),
      // firstName: Joi.string().min(3).max(50).required(),
      extension: Joi.string().max(50),
      email: Joi.string().email().min(10).max(100),
      officeCode: Joi.string().max(10),
      reportsTo: Joi.number().integer().positive(),
      jobTitle: Joi.string().valid('President', 'Manager', 'Leader', 'Staff'),
    })
    .min(1),
};
