/* eslint-disable import/no-anonymous-default-export */
import * as Yup from "yup";

export default async (data) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Este campo é obrigatório."),
    description: Yup.string().required("Este campo é obrigatório."),
    address: Yup.object().shape({
      country: Yup.string(),
      state: Yup.string(),
      complement: Yup.string(),
    }),
    remote: Yup.boolean(),
  });

  await schema.validate(data, { abortEarly: false });
};
