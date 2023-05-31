import { useRouter } from "vue-router";

export function useAnchor(element: string, offset: number) {
  const myElement = document.getElementById(element);
  if (myElement) {
    myElement.style.scrollMarginTop = `${offset}px`; // Apply the offset
    myElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    myElement.style.scrollMarginTop = "0"; // Reset the scroll-margin-top value
  }
  const router = useRouter();
  router.push({ name: "home", query: { nav: element } });
}
