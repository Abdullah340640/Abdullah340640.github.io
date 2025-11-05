// TikTok Video Downloader - Frontend JavaScript
// Note: This is a frontend demo. For production, you'll need a backend API to fetch TikTok videos.

document.addEventListener('DOMContentLoaded', function() {
    const videoUrlInput = document.getElementById('videoUrl');
    const downloadBtn = document.getElementById('downloadBtn');
    const loadingSpinner = document.getElementById('loadingSpinner');
    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    const resultSection = document.getElementById('resultSection');

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Download button click handler
    downloadBtn.addEventListener('click', handleDownload);

    // Enter key handler
    videoUrlInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleDownload();
        }
    });

    // Download options click handler
    document.addEventListener('click', function(e) {
        if (e.target.closest('.option-btn')) {
            const quality = e.target.closest('.option-btn').dataset.quality;
            handleDownloadOption(quality);
        }
    });

    function handleDownload() {
        const url = videoUrlInput.value.trim();
        
        // Hide previous messages
        hideAllMessages();

        // Validate URL
        if (!url) {
            showError('Please enter a TikTok video URL');
            return;
        }

        if (!isValidTikTokUrl(url)) {
            showError('Please enter a valid TikTok video URL (e.g., https://www.tiktok.com/@username/video/...)');
            return;
        }

        // Show loading
        loadingSpinner.style.display = 'block';

        // Simulate API call (In production, this would be a real API call to your backend)
        setTimeout(() => {
            fetchVideoInfo(url);
        }, 2000);
    }

    function isValidTikTokUrl(url) {
        const tiktokRegex = /tiktok\.com|vm\.tiktok\.com|vt\.tiktok\.com/i;
        return tiktokRegex.test(url);
    }

    function fetchVideoInfo(url) {
        // In production, this would make an actual API call to your backend
        // Your backend would then fetch the video from TikTok's API
        
        // Demo data for demonstration purposes
        const demoData = {
            title: "Amazing TikTok Video - Check this out! 🔥",
            author: "@tiktoker",
            thumbnail: "https://via.placeholder.com/400x400/fe2c55/ffffff?text=TikTok+Video",
            likes: "125.4K",
            comments: "3.2K",
            videoUrl: url
        };

        loadingSpinner.style.display = 'none';
        displayVideoInfo(demoData);
    }

    function displayVideoInfo(data) {
        // Update video information
        document.getElementById('videoThumbnail').src = data.thumbnail;
        document.getElementById('videoTitle').textContent = data.title;
        document.getElementById('videoAuthor').textContent = data.author;
        document.getElementById('videoLikes').textContent = data.likes;
        document.getElementById('videoComments').textContent = data.comments;

        // Show result section
        resultSection.style.display = 'block';

        // Smooth scroll to results
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function handleDownloadOption(quality) {
        // In production, this would trigger the actual download from your backend
        const qualityNames = {
            'hd': 'HD Quality (No Watermark)',
            'sd': 'SD Quality (No Watermark)',
            'audio': 'Audio Only (MP3)'
        };

        // Show info message about backend requirement
        showError(
            `⚠️ Backend Required: To enable actual downloads, you need to set up a backend API. ` +
            `The backend should:\n\n` +
            `1. Receive the TikTok video URL\n` +
            `2. Fetch video data from TikTok (using unofficial APIs or web scraping)\n` +
            `3. Return download links for different quality options\n\n` +
            `Selected quality: ${qualityNames[quality]}\n\n` +
            `Popular solutions:\n` +
            `- Use TikTok unofficial APIs\n` +
            `- Use libraries like tikmate, tiktok-scraper\n` +
            `- Set up a Node.js/Python backend\n` +
            `- Use third-party API services`,
            'info'
        );

        // In production, this would be something like:
        /*
        fetch('/api/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                url: videoUrlInput.value,
                quality: quality
            })
        })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `tiktok_video_${quality}.mp4`;
            a.click();
        });
        */
    }

    function showError(message, type = 'error') {
        errorText.textContent = message;
        errorMessage.style.display = 'flex';
        
        if (type === 'info') {
            errorMessage.style.background = 'rgba(37, 244, 238, 0.1)';
            errorMessage.style.borderColor = '#25f4ee';
            errorMessage.style.color = '#25f4ee';
        } else {
            errorMessage.style.background = 'rgba(255, 59, 92, 0.1)';
            errorMessage.style.borderColor = '#ff3b5c';
            errorMessage.style.color = '#ff3b5c';
        }

        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function hideAllMessages() {
        loadingSpinner.style.display = 'none';
        errorMessage.style.display = 'none';
        resultSection.style.display = 'none';
    }

    // Add some visual feedback for paste
    videoUrlInput.addEventListener('paste', function() {
        this.style.borderColor = 'var(--secondary-color)';
        setTimeout(() => {
            this.style.borderColor = 'transparent';
        }, 1000);
    });
});

// Add smooth animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and steps
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .step, .faq-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});
