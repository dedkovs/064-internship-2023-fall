import { useMutation, useQueryClient } from "@tanstack/react-query";

const postMessage = async (message: string) => {
  return await fetch(`https://money-tracker.ru/api/data`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  }).then((res) => res.json());
};

export const useMutationPostMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["postMessage"],
    mutationFn: postMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["messages"],
      });
    },
  });
};
