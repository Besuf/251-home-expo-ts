export type ImageFormat = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
};

export function getLargeImagePath(picture: ImageFormat): string {
  return picture.lg || picture.md || picture.sm || picture.xs;
}

export function getMediumImagePath(picture: ImageFormat): string {
  return picture.md || picture.sm || picture.xs;
}

export function getSmallImagePath(picture: ImageFormat): string {
  return picture.sm || picture.xs;
}

export function getPictureSrcSet(picture: ImageFormat): string {
  return `${getSmallImagePath(picture)} 500w, ${getMediumImagePath(
    picture
  )} 1000w, ${getLargeImagePath(picture)} 1500w`;
}

export function getImageVariationFormats(picture: ImageFormat): ImageFormat {
  return {
    xs: picture.xs,
    sm: getSmallImagePath(picture),
    md: getMediumImagePath(picture),
    lg: getLargeImagePath(picture),
  };
}
