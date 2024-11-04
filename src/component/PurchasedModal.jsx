import { useGadgetContext } from "../contexts/GadgetContext";
import successImg from "../assets/success.png";
import { useNavigate } from "react-router-dom";

export function Modal() {
  const { isModalOpen, setIsModalOpen, cart } = useGadgetContext();
  const navigate = useNavigate();

  const total = cart.reduce((acc, cur) => acc + cur.price, 0).toFixed(2);

  function handleClosing() {
    setIsModalOpen(false);
    navigate("/");
  }

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto w-1/2">
        <img
          src={successImg}
          alt="Successful"
          className="w-16 aspect-square mx-auto mb-4"
        />
        <h1 className="text-center text-2xl font-bold">Payment Successful</h1>
        <div className="text-center my-4">
          <h1 className="mb-3">Thanks for purchasing</h1>
          <p>Total:${total}</p>
        </div>
        <button
          className="w-full bg-gray-400 text-black text-lg py-3 font-semibold rounded-lg hover:bg-gray-500"
          onClick={handleClosing}
        >
          Close
        </button>
      </div>
    </div>
  );
}
