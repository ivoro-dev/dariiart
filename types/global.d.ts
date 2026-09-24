import type Lenis from "lenis";

declare global {
  interface Window {
    __preloaderDone?: boolean;
    __lenis?: Lenis;
  }
}

export {};
