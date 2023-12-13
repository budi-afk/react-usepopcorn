import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      window.addEventListener("keyup", callback);

      return function () {
        window.removeEventListener("keyup", callback);
      };
    },
    [key, action]
  );
}
