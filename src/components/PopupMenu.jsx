import { Link } from "react-router-dom";
function PopupMenu({onClose, onConfirm, detail}) {
  return (
   <div className="fixed inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
        <h2 className="text-xl mb-4 text-gray-800">Are you sure?</h2>
        <p className="mb-6 text-gray-600">{detail}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
          >
            Cancel
          </button>
          <Link to={'/'}><button
            onClick={onConfirm}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
          >
            Confirm
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default PopupMenu;