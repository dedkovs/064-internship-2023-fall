import { useQueryClient } from "@tanstack/react-query";

export const FetchCharactersButton = () => {
  const queryClient = useQueryClient();

  return (
    <button
      onClick={() =>
        queryClient.invalidateQueries({
          queryKey: ["character"],
        })
      }
    >
      Fetch characters
    </button>
  );
};
