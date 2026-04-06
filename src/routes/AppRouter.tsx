import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Index, NotFound, RecentProjects, TechStack, Blog, Posts } from "./NavigationRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route index element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts" element={<Posts />} />
        <Route path="/TechStack" element={<TechStack />} />
        <Route path="/RecentProjects" element={<RecentProjects />} />
      </Routes>
    </BrowserRouter>
  );
}