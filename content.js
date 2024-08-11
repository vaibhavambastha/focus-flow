function hideYouTubeRecommendations() {
    const youtubeSelectors = [
      "#related", // Video recommendations sidebar
      "#secondary", // Another section in the video page
      "#primary", // Home page video feed
      "#comments", // Comment section (optional)
      "ytd-watch-next-secondary-results-renderer", // Another sidebar section
      "ytd-shelf-renderer" // Sections on the home page
    ];
  
    youtubeSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => element.style.display = 'none');
    });
  }
  
  function hideInstagramFeed() {
    const instagramSelectors = [
      "main > div > div > div > div > div > div > div > div > div > div > div > div > div", // Main feed section
      "article > div > div > div > div > div > div > div > div > div > div" // Individual post containers
    ];
  
    instagramSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => element.style.display = 'none');
    });
  }
  
  function hideContent() {
    const url = window.location.hostname;
  
    if (url.includes("youtube.com")) {
      hideYouTubeRecommendations();
    } else if (url.includes("instagram.com")) {
      hideInstagramFeed();
    }
  }
  
  // Run the function immediately
  hideContent();
  
  // Optional: Monitor DOM changes to hide content that loads after the initial page load
  const observer = new MutationObserver(hideContent);
  observer.observe(document.body, { childList: true, subtree: true });
  