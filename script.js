//gsap.fromTo('h1', {xPercent: 100, ease: "power1", duration: 1}, {xPercent: -100, ease: "power1", duration: 1, repeat: -1})

    const content = document.querySelector('.marquee-content');
    const marqueeTexts = document.querySelectorAll('.marquee-text');
   
    if(marqueeTexts.length > 0){
        // Check if both elements are found
        const speed = 50; // Adjust the speed based on your preference
        const contentWidth = content.offsetWidth;
        const marqueeWidth = marqueeTexts[0].offsetWidth;
        
        // Initial position
        gsap.set(content, { x: marqueeWidth });

        // Animation timeline
        const timeline = gsap.timeline({ repeat: -1 });
        timeline.to(content, { x: -contentWidth, duration: contentWidth / speed, ease: 'linear' });

        // Pause and play the timeline on mouseenter and mouseleave

        marqueeTexts.forEach((marquee) => {
            marquee.addEventListener('mouseenter', () => {
                console.log("mouseenter");
                timeline.pause();
            });
            marquee.addEventListener('mouseleave', () => {
                console.log("mouseleave");
                timeline.play();
            });
        });

    }
    
