document.addEventListener("DOMContentLoaded", () => {
  const videos = [
    {
      url: "https://www.youtube.com/shorts/aBpQtkj-6bo",
      title: "A Rattlesnake Kiss - Pour House"
    },
    {
      url: "https://www.youtube.com/shorts/IoLd8EnSqm4",
      title: "Choosin' Texas - Pour House"
    },
    {
      url: "https://www.youtube.com/watch?v=sF-X4dzZmtc",
      title: "Dancing at Derby"
    },
    {
      url: "https://www.youtube.com/watch?v=ul6sk1PW3dU",
      title: "Line Dance Practice Sampler"
    },
    {
      url: "https://youtu.be/PkjgxE0PaLk",
      title: "Saddle On Up Demo"
    },
    {
      url: "https://www.youtube.com/watch?v=wmqT5_pZ37Q",
      title: "Girlie Girlie Demo"
    },
    {
      url: "https://www.youtube.com/watch?v=n72uqgeB3Z0",
      title: "Electric Slide at Broken Earth"
    },
    {
      url: "https://www.youtube.com/watch?v=a_rFN8fGCB4",
      title: "Dancing at Tooth & Nail"
    },
  ];



  const videoGallery = document.getElementById("video-gallery");

  if (!videoGallery) {
    console.error("Video gallery container was not found.");
    return;
  }

  function getYouTubeVideoId(videoUrl) {
    try {
      const url = new URL(videoUrl);

      // Standard link:
      // https://www.youtube.com/watch?v=VIDEO_ID
      if (url.hostname.includes("youtube.com")) {
        if (url.pathname === "/watch") {
          return url.searchParams.get("v");
        }

        // Shorts:
        // https://www.youtube.com/shorts/VIDEO_ID
        if (url.pathname.startsWith("/shorts/")) {
          return url.pathname.split("/shorts/")[1].split("/")[0];
        }

        // Embed:
        // https://www.youtube.com/embed/VIDEO_ID
        if (url.pathname.startsWith("/embed/")) {
          return url.pathname.split("/embed/")[1].split("/")[0];
        }
      }

      // Shortened link:
      // https://youtu.be/VIDEO_ID
      if (url.hostname === "youtu.be") {
        return url.pathname.slice(1).split("/")[0];
      }

      return null;
    } catch (error) {
      console.error(`Invalid video URL: ${videoUrl}`);
      return null;
    }
  }

  videos.forEach(video => {
    const videoId = getYouTubeVideoId(video.url);

    if (!videoId) {
      console.error(`Could not find a YouTube video ID in: ${video.url}`);
      return;
    }

    const videoItem = document.createElement("div");
    videoItem.classList.add("video-item");

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    iframe.title = video.title;
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    const caption = document.createElement("p");
    caption.classList.add("video-caption");
    caption.textContent = video.title;

    videoItem.appendChild(iframe);
    videoItem.appendChild(caption);
    videoGallery.appendChild(videoItem);
  });
});