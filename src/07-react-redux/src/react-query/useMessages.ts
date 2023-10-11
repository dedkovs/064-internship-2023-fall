import { useQuery } from "@tanstack/react-query";

type Messages = { id: number; message: string }[];

const fetchMessages = async (): Promise<Messages> => {
  return await fetch("https://money-tracker.ru/api/data/all").then((res) =>
    res.json(),
  );
};

export const useMessages = () =>
  useQuery({
    queryKey: ["messages"],
    queryFn: fetchMessages,
    refetchOnWindowFocus: false,
  });
