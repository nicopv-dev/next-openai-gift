import { useState } from "react";
import Loading from "./Loading";

export default function Suggestion({
  isLoading,
  onChangeIsLoading,
  onChangeStatus,
  onChangeResults,
}) {
  const [suggestion, setSuggestion] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    onChangeIsLoading(true);

    const data = {
      text: suggestion,
    };

    try {
      const response = await fetch(`/api/generate`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const result = await response.json();
        onChangeIsLoading(false);
        onChangeStatus(true);
        onChangeResults(result.data);
      }
    } catch (err) {
      console.log(err);
      onChangeIsLoading(false);
      onChangeStatus(false);
    }
  };

  return (
    <form
      className="flex flex-col sm:flex-row items-center h-full sm:h-12 shadow-md"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Ingrese el regalo que desea"
        className="h-10 sm:h-full focus:outline-none py-2 px-4 w-full"
        value={suggestion}
        onChange={(e) => setSuggestion(e.target.value)}
      />
      {!isLoading ? (
        <button
          className="text-white bg-blue-600 w-full sm:w-2/5 h-10 sm:h-full px-4 py-1 sm:py-0"
          type="submit"
        >
          BUSCAR
        </button>
      ) : (
        <button
          className="text-white bg-blue-600 w-full h-10 sm:h-full px-4 py-1 sm:py-0"
          type="button"
        >
          <Loading />
        </button>
      )}
    </form>
  );
}
