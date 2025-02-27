import { useEffect } from "react";

type Props = {
  ref: React.RefObject<HTMLElement | null>;
  handler: () => void;
};

export function useClickOutside({ ref, handler }: Props) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      // check if it's main button
      if (event.button === 0) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler();
        }
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handler, ref]);
}
