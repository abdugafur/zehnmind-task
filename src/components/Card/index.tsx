import { useEffect, useState } from "react";
import type { IContent } from "../../types";

const ContentCard: React.FC<{ item: IContent }> = ({ item }) => {
  const lang = "en";

  const [videoSrc, setVideoSrc] = useState("");

  const [isLoadingVideo, setIsLoadingVideo] = useState(false);

  useEffect(() => {
    setIsLoadingVideo(true);
    const loadVideoSource = async () => {
      try {
        setVideoSrc(item.videoUrl.split("shorts")[1]);
      } catch {
        setVideoSrc("");
      } finally {
        setTimeout(() => {
          setIsLoadingVideo(false);
        }, 1000);
      }
    };

    loadVideoSource();
  }, [item.videoUrl]);

  return (
    <div>
      {isLoadingVideo ? (
        "loading..."
      ) : (
        <div>
          <span>
            {new Date(item.createdAt).toLocaleDateString(lang, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
          <h3>{item.title?.[lang]}</h3>
          <iframe
            src={`https://www.youtube.com/embed/${videoSrc}?controls=0&modestbranding=1&rel=0&showinfo=0&autoplay=0&loop=1&playsinline=1&mute=0&title=0&fs=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen={false}
          />
        </div>
      )}
    </div>
  );
};
export default ContentCard;
