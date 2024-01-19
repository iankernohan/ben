import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./UI/Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div style={{ position: "relative" }}>
      {isLoading && <Loader />}
      <Outlet />
    </div>
  );
}
