'use client';

import { useEffect } from 'react';

interface TikTokEmbedProps {
  videoId: string;
}

export default function TikTokEmbed({ videoId }: TikTokEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="tiktok-embed"
      cite={`https://www.tiktok.com/@solucionesweb2025/video/${videoId}`}
      data-video-id={videoId}
      style={{ maxWidth: '605px', minWidth: '325px' }}
    >
      <section></section>
    </blockquote>
  );
}
