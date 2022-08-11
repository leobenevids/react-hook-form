import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// styles
import { FormContainer } from "./styles";

// schema validation
const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório."),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(6, "A senha deve ter pelo menos 6 dígitos"),
    confirmPassword: yup
      .string()
      .required("Confirmar a senha é obrigatório")
      .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
  })
  .required();

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendData = (formData) => {
    console.log(formData);
  };

  return (
    <FormContainer onSubmit={handleSubmit(sendData)}>
      <h1>Form</h1>
      <label>
        Nome
        <input type="text" {...register("name", { required: true })} />
        <span>{errors.name?.message}</span>
      </label>

      <label>
        Email
        <input type="email" {...register("email", { required: true })} />
        <span>{errors.email?.message}</span>
      </label>

      <label>
        Senha
        <input type="password" {...register("password", { required: true })} />
        <span>{errors.password?.message}</span>
      </label>

      <label>
        Confirmar Senha
        <input
          type="password"
          {...register("confirmPassword", { required: true })}
        />
        <span>{errors.confirmPassword?.message}</span>
      </label>

      <button type="submit">Cadastrar-se</button>
    </FormContainer>
  );
};

export default Form;
