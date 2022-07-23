import { useEffect, useState } from "react";

export const useCopyButton = (value: string) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  }, [isCopied]);

  const onClick = () => {
    setIsCopied(true);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value);
    }
  };

  return {
    isCopied,
    onClick,
  };
};
