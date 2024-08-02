import React from "react";

const Error = ({ message }) => {
  console.log(message);
  return (
    <div className="bg-red-400 rounded h-fit p-4 flex flex-col gap-5">
      <p className="text-2xl">
        Üzgünüz bir hata oluştu daha sonra tekrar deneyiniz.
      </p>
      <h2 className="underline font font-semibold">{message}</h2>
    </div>
  );
};

export default Error;
