import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DataQualityReportAnalysis from "./pages/SocialMedia";
import Main from "./pages/main";
import Invoices from "./pages/second";
import Second2 from "./pages/secondnavbar";
import Mainpage from "./pages/mainpage";
import FilterComponent from "./pages/checkbox";
import Code from "./pages/nextdaycode";
import SideMenu from "./pages/form";
import Sample from "./pages/sample";
import Dashboard from "./pages/sample2";
import Dashboard2 from "./pages/sample3";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      {/* import Invoices from "./pages/second";
import Second2 from "./pages/secondnavbar";
import Mainpage from "./pages/mainpage"; */}
      {/* <Route path="/" element={<DataQualityReportAnalysis />} />
      <Route path="/main" element={<FilterComponent />} />
      <Route path="/main2" element={<Code />} /> */}
      {/* <Route path="/form" element={<SideMenu />} /> */}
      {/* <Route path="/form" element={<SideMenu />} /> */}
      <Route path="/" element={<Sample />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard2" element={<Dashboard2 />} />
    </Routes>
  );
}
export default App;
