import React, { useRef, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";

/*

blue-dark-0: #0b0f1c
blue-dark-1: #131725
greadien-1: blue & violet || #2196F3 & #9C27B0
text-gray: #9e9db2
text-white: #ebebf0

*/

export default function App() {
  return <RouterProvider router={router}/>
}
