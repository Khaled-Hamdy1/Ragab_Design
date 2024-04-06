import { RouterProvider } from "react-router-dom";
import Provider from "../providers";
import { router } from "./router";

export default function Root() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}
