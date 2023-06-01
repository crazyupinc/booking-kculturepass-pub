import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/main";
import EventDetail from "./pages/event-detail";
import EventExhibitionExperience from "./pages/event-exhibition-experience";
import EventFestival from "./pages/event-festival";
import EventConcert from "./pages/event-concert";
import { useEffect } from "react";

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
      case "/eventdetail":
        title = "";
        metaDescription = "";
        break;
      case "/eventexhibitionexperience":
        title = "";
        metaDescription = "";
        break;
      case "/eventfestival":
        title = "";
        metaDescription = "";
        break;
      case "/eventconcert":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/eventdetail" element={<EventDetail />} />
      <Route
        path="/eventexhibitionexperience"
        element={<EventExhibitionExperience />}
      />
      <Route path="/eventfestival" element={<EventFestival />} />
      <Route path="/eventconcert" element={<EventConcert />} />
    </Routes>
  );
}
export default App;
