import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Components/Donations/Donation";
import DonationFav from "../Pages/DonationFav/DonationFav";
import Statistics from "../Pages/Statistics/Statistics";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donation",
        element: <DonationFav></DonationFav>,
      },
      {
        path: "/donations/:id",
        element: <Donation></Donation>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

export default myCreatedRouter;
