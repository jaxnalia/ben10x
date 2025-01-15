export function useIntersectionObserver(node, options = {}) {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      node.dispatchEvent(new CustomEvent('intersection', {
        detail: entry
      }));
    });
  }, defaultOptions);

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
      observer.disconnect();
    }
  };
}