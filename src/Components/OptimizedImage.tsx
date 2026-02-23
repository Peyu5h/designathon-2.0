import { useState, useCallback } from "react";
import type { ImgHTMLAttributes } from "react";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  eager?: boolean;
  fadeIn?: boolean;
  wrapperClassName?: string;
}

// drop-in <img> replacement with fade-in + lazy loading
const OptimizedImage = ({
  eager = false,
  fadeIn = true,
  wrapperClassName,
  className = "",
  style,
  onLoad,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad]
  );

  const imgStyle: React.CSSProperties = {
    ...style,
    ...(fadeIn
      ? {
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }
      : {}),
  };

  const img = (
    <img
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={className}
      style={imgStyle}
      onLoad={handleLoad}
      {...props}
    />
  );

  if (wrapperClassName) {
    return <div className={wrapperClassName}>{img}</div>;
  }

  return img;
};

export default OptimizedImage;
