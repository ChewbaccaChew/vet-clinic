import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IUserResponce } from "../types/auth/authenticationDTO";
import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../app/store/store";

export const useAuthSuccess = (path: string) => {
  const { role } = useSelector((state: { auth: IUserResponce }) => state.auth);
  const pathUpperCase = path.toUpperCase();

  return role === pathUpperCase;
};

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
