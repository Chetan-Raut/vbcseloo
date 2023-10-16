const newsItems = document.querySelectorAll('.news-item');
        let currentIndex = 0;

        function showNextNews() {
            newsItems[currentIndex].style.display = 'none';
            currentIndex = (currentIndex + 1) % newsItems.length;
            newsItems[currentIndex].style.display = 'block';
        }

        // Initially show the first news item
        newsItems[currentIndex].style.display = 'block';

        // Set a timer to move to the next news item every 5 seconds
        setInterval(showNextNews, 5000);
        
        
        
document.addEventListener("DOMContentLoaded", function() {
        const imageContainer = document.getElementById("event-images-carousel");
        const images = imageContainer.querySelectorAll(".carousel-item");
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }

        setInterval(showNextImage, 5000); // 5000 milliseconds (5 seconds)
    });
