import { useMutation, useQueryClient } from "@tanstack/react-query";

type Parameters = {
  id: number;
  message: string;
};

const editMessage = async ({ id, message }: Parameters) => {
  return await fetch(`https://money-tracker.ru/api/data`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, message }),
  }).then((res) => res.json());
};

export const useMutationEditMessage = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["editMessage", { id }],
    mutationFn: editMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
  });
};
