import React from "react";
import ReactDOM from "react-dom/client";
import ParamEditor from "./ParamEditor";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const params = [
  {
    id: 1,
    name: "Назначение",
  },
  {
    id: 2,
    name: "Длина",
  },
];

const model = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ],
};

root.render(
  <React.StrictMode>
    <ParamEditor params={params} model={model} />
  </React.StrictMode>
);
