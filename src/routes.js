import FullComment from "./pages/FullComment/FullComment";
import HomePage from "./pages/HomePage";
import NewComment from "./pages/NewComment/NewComment";
import NotFound from "./pages/NotFoundPage";

const routes = [
  { path: "/comment/:id", element: <FullComment /> },
  { path: "/new-comment", element: <NewComment /> },
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
];
export default routes;
