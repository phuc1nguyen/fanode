import { Joi, Segments } from 'celebrate';

export const create = {
  [Segments.BODY]: Joi.object().keys({
    customerNumber: Joi.number().integer().positive().required(),
    customerName: Joi.string().min(5).max(50).required(),
    contactLastName: Joi.string().min(3).max(50).required(),
    contactFirstName: Joi.string().min(3).max(50).required(),
    phone: Joi.string().min(8).max(20).required(),
    addressLine1: Joi.string().min(10).max(50).required(),
    addressLine2: Joi.string().min(10).max(50),
    city: Joi.string().min(2).max(50),
    state: Joi.string().min(2).max(50),
    postalCode: Joi.string().min(5).max(15),
    country: Joi.string().min(2).max(50).required(),
    salesRepEmployeeNumber: Joi.number().integer().positive().required(),
    creditLimit: Joi.number().positive().precision(2),
  }),
};

export const update = {
  [Segments.BODY]: Joi.object()
    .keys({
      // customerNumber: Joi.number().integer().positive(), --> not able to update
      customerName: Joi.string().min(5).max(50),
      contactLastName: Joi.string().min(3).max(50),
      contactFirstName: Joi.string().min(3).max(50),
      phone: Joi.string().min(8).max(20),
      addressLine1: Joi.string().min(10).max(50),
      addressLine2: Joi.string().min(10).max(50),
      city: Joi.string().min(2).max(50),
      state: Joi.string().min(2).max(50),
      postalCode: Joi.string().min(5).max(15),
      country: Joi.string().min(2).max(50),
      salesRepEmployeeNumber: Joi.number().integer().positive(),
      creditLimit: Joi.number().positive().precision(2),
    })
    .min(1),
};
