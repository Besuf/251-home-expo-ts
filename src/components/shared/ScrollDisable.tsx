import { useEffect } from "react";

type ScrollDisableProps = {
  breakPointStart?: "xs" | "sm" | "md" | "lg" | "xl";
  callBack?: () => void;
};

const ScrollDisable = (props: ScrollDisableProps) => {
  const { breakPointStart, callBack } = props;
  let prefix = "";
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  if (breakPointStart) prefix = `${breakPointStart}:`;

  useEffect(() => {
    if (typeof window !== undefined) {
      const widthBefore = document.body.offsetWidth;

      // document.body.style.overflow = "hidden";
      document.body.classList.add(`${prefix}overflow-hidden`);
      document.body.style.marginRight =
        document.body.offsetWidth - widthBefore + "px";
      callBack && callBack();
    }
    return () => {
      document.body.classList.remove(`${prefix}overflow-hidden`);
      // document.body.style.overflow = "unset";
      document.body.style.marginRight = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default ScrollDisable;
