
export const initScrollAnimations = () => {
  // Initialize the intersection observer for reveal-on-scroll elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  // Observe all elements with the reveal-on-scroll class
  document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
    observer.observe(element);
  });
};

export default initScrollAnimations;
