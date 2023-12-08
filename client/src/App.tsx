import { Route, Routes } from "react-router-dom";
import RootLayout from "./Layout";
import HomeScreen from "./pages/HomeScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import TeamsScreen from "./pages/TeamsScreen";

function App() {
  return (
    <>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/teams" element={<TeamsScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </RootLayout>
    </>
  );
}

export default App;
