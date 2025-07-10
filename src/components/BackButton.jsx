import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="cursor-pointer absolute left-9 top-9 px-4 py-2 bg-white/10 rounded-lg flex items-center gap-2 text-cyan-200"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="size-5" />
      Go Back
    </button>
  );
}

export default BackButton;
