import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface Props {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useElementVisibility = <T extends HTMLElement>({
  root,
  rootMargin,
  threshold,
}: Props = {}): [MutableRefObject<T | null>, boolean] => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root,
      rootMargin,
      threshold,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsElementVisible(true);
        } else {
          setIsElementVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, [root, rootMargin, threshold]);

  return [targetRef, isElementVisible];
};

export default useElementVisibility;
