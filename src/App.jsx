import { RouterProvider } from "react-router-dom";
import LanguageProvider from "./contexts/language/languageProvider.jsx";
import { router } from "./routes.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
};

export default App;
