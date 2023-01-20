import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { TEXT_UA } from "@/CONSTANTS";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) =>
    (window.location.href = `mailto:bsshul@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`);
  return (
    <>
      <h3 className="sectionTitle">{TEXT_UA.contact}</h3>
      <div className="flex relative overflow-hidden flex-col text-left md:flex-row px-5 pb-14 justify-evenly items-center mx-auto z-0">
        <div className="flex flex-col gap-4">
          {/* <h4 className="text-2xl md:text-3xl font-semibold text-center px-5">
            Контакти
          </h4> */}

          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-5">
              <PhoneIcon className="text-[#5ED3F3] h-7 w-7 animate-pulse" />
              <p className="text-2xl">+380672785349</p>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <EnvelopeIcon className="text-[#5ED3F3] h-7 w-7 animate-pulse" />
              <p className="text-2xl">bsshul@gmail.com</p>
            </div>
            <div className="flex items-center justify-center space-x-5">
              <MapPinIcon className="text-[#5ED3F3] h-7 w-7 animate-pulse" />
              <p className="text-2xl">Київ</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder={`Ім'я`}
                className="contactInput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Тема"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Повiдомлення"
              className="contactInput"
            />
            <button
              type="submit"
              className="bg-[#5ED3F3] py-5 px-10 rounded-md text-black font-bold text-lg hover:bg-[#9eeaff] transition-all"
            >
              Вiдправити
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
