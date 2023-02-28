import { IoAlertCircleOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 p-4 w-full grid grid-cols-3">
      <div></div>
      <p className="text-white opacity-60 text-xs flex justify-center gap-1">
        Creado por <span className="underline"> Nicolas Pereira</span>
      </p>
      <div className="flex justify-end">
        <button type="button">
          <IoAlertCircleOutline className="text-white" />
        </button>
      </div>
    </footer>
  );
}
