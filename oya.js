document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    let slideInterval;
    const slideDuration = 4000; // 4 seconds per slide
    
    function updateSlides() {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'next', 'prev', 'leaving', 'entering');
        
        if (index === currentIndex) {
          slide.classList.add('active');
        } else if (index === (currentIndex + 1) % slides.length) {
          slide.classList.add('next');
        } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
          slide.classList.add('prev');
        }
      });
    }
    
    function nextSlide() {
      const currentSlide = slides[currentIndex];
      const nextIndex = (currentIndex + 1) % slides.length;
      const nextSlide = slides[nextIndex];
      
      // Add animation classes
      currentSlide.classList.add('leaving');
      nextSlide.classList.add('entering');
      
      // After animation completes
      setTimeout(() => {
        currentIndex = nextIndex;
        updateSlides();
      }, 800); // Match this with CSS transition duration
    }
    
    function startSlideshow() {
      updateSlides();
      slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
    
    slideshowContainer.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, slideDuration);
    });
    
    // Initialize
    startSlideshow();
    
    // Optional: Add navigation buttons
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&rarr;';
    nextBtn.classList.add('slide-btn', 'next-btn');
    nextBtn.addEventListener('click', nextSlide);
    
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&larr;';
    prevBtn.classList.add('slide-btn', 'prev-btn');
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    });
    
    slideshowContainer.appendChild(prevBtn);
    slideshowContainer.appendChild(nextBtn);
  });