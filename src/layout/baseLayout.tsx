import Navbar from "../components/navbar";
import SalePage from "../pages/sale";

export default function BaseLayout() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <SalePage />
      </div>
    </>
  );
}
