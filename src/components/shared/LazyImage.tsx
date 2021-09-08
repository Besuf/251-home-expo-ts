/* eslint-disable @next/next/no-img-element */
import React, { ReactChild } from "react";
import useNativeLazyLoading from "@charlietango/use-native-lazy-loading";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";

type LazyImageProps = {
  src: string;
  srcSet?: string;
  alt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: string | any;
};

const LazyImage: React.FC<LazyImageProps> = (props) => {
  const supportsLazyLoading = useNativeLazyLoading();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const { src, srcSet, alt, className, style, ...rest } = props;

  function renderLayoutImage(): ReactChild {
    return (
      <img
        className={className}
        style={style}
        alt={alt}
        {...rest}
        src={src}
        srcSet={srcSet}
        loading="lazy"
      />
    );
  }

  return (
    <div
      ref={!supportsLazyLoading ? ref : undefined}
      className={className}
      style={style}
    >
      {inView || supportsLazyLoading ? renderLayoutImage() : null}
    </div>
  );
};

export default LazyImage;

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
};
