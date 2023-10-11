import { useMutation, useQueryClient } from "@tanstack/react-query";

const deleteMessage = async (id: number) => {
  return await fetch(`https://money-tracker.ru/api/data/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

export const useMutationDeleteMessage = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteMessage", { id }],
    mutationFn: deleteMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
  });
};
