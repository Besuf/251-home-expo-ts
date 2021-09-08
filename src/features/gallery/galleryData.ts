import { ImageFormat } from "lib/image";

export type GalleryCategory =
  | "Apartment"
  | "Villa"
  | "Kitchen"
  | "Bedroom"
  | "Furniture"
  | "Other";

export type GalleryType = {
  picture: ImageFormat;
  alt: string;
  category: GalleryCategory;
};

export const gallery: GalleryType[] = [
  {
    alt: "Apartment - 01",
    picture: {
      xs: "/images/expoGallery/apartments/ap-01/ap-01-low.jpg",
      sm: "/images/expoGallery/apartments/ap-01/ap-01-1x.jpg",
      md: "/images/expoGallery/apartments/ap-01/ap-01-2x.jpg",
      lg: "/images/expoGallery/apartments/ap-01/ap-01-3x.jpg",
    },
    category: "Apartment",
  },
  {
    alt: "Apartment - 02",
    picture: {
      xs: "/images/expoGallery/apartments/ap-02/ap-02-low.jpg",
      sm: "/images/expoGallery/apartments/ap-02/ap-02-1x.jpg",
      md: "/images/expoGallery/apartments/ap-02/ap-02-2x.jpg",
      lg: "/images/expoGallery/apartments/ap-02/ap-02-3x.jpg",
    },
    category: "Apartment",
  },
  {
    alt: "Apartment - 03",
    picture: {
      xs: "/images/expoGallery/apartments/ap-03/ap-03-low.jpg",
      sm: "/images/expoGallery/apartments/ap-03/ap-03-1x.jpg",
      md: "/images/expoGallery/apartments/ap-03/ap-03-2x.jpg",
      lg: "/images/expoGallery/apartments/ap-03/ap-03-3x.jpg",
    },
    category: "Apartment",
  },
  {
    alt: "Apartment - 04",
    picture: {
      xs: "/images/expoGallery/apartments/ap-04/ap-04-low.jpg",
      sm: "/images/expoGallery/apartments/ap-04/ap-04-1x.jpg",
      md: "/images/expoGallery/apartments/ap-04/ap-04-2x.jpg",
      lg: "/images/expoGallery/apartments/ap-04/ap-04-3x.jpg",
    },
    category: "Apartment",
  },
  {
    alt: "Apartment - 05",
    picture: {
      xs: "/images/expoGallery/apartments/ap-05/ap-05-low.jpg",
      sm: "/images/expoGallery/apartments/ap-05/ap-05-1x.jpg",
      md: "/images/expoGallery/apartments/ap-05/ap-05-2x.jpg",
      lg: "/images/expoGallery/apartments/ap-05/ap-05-3x.jpg",
    },
    category: "Apartment",
  },
  {
    alt: "Apartment - 06",
    picture: {
      xs: "/images/expoGallery/apartments/ap-06/ap-06-low.jpg",
      sm: "/images/expoGallery/apartments/ap-06/ap-06-1x.jpg",
      md: "/images/expoGallery/apartments/ap-06/ap-06-2x.jpg",
      lg: "/images/expoGallery/apartments/ap-06/ap-06-3x.jpg",
    },
    category: "Apartment",
  },
  {
    alt: "Apartment - 07",
    picture: {
      xs: "/images/expoGallery/apartments/ap-07/ap-07-low.jpg",
      sm: "/images/expoGallery/apartments/ap-07/ap-07-1x.jpg",
      md: "/images/expoGallery/apartments/ap-07/ap-07-2x.jpg",
      lg: "/images/expoGallery/apartments/ap-07/ap-07-3x.jpg",
    },
    category: "Apartment",
  },
  {
    alt: "Bedroom - 01",
    picture: {
      xs: "/images/expoGallery/bedroom/bd-01/bd-01-low.jpg",
      sm: "/images/expoGallery/bedroom/bd-01/bd-01-1x.jpg",
      md: "/images/expoGallery/bedroom/bd-01/bd-01-2x.jpg",
      lg: "/images/expoGallery/bedroom/bd-01/bd-01-3x.jpg",
    },
    category: "Bedroom",
  },
  {
    alt: "Bedroom - 02",
    picture: {
      xs: "/images/expoGallery/bedroom/bd-02/bd-02-low.jpg",
      sm: "/images/expoGallery/bedroom/bd-02/bd-02-1x.jpg",
      md: "/images/expoGallery/bedroom/bd-02/bd-02-2x.jpg",
      lg: "/images/expoGallery/bedroom/bd-02/bd-02-3x.jpg",
    },
    category: "Bedroom",
  },
  {
    alt: "Bedroom - 03",
    picture: {
      xs: "/images/expoGallery/bedroom/bd-03/bd-03-low.jpg",
      sm: "/images/expoGallery/bedroom/bd-03/bd-03-1x.jpg",
      md: "/images/expoGallery/bedroom/bd-03/bd-03-2x.jpg",
      lg: "/images/expoGallery/bedroom/bd-03/bd-03-3x.jpg",
    },
    category: "Bedroom",
  },
  {
    alt: "Bedroom - 04",
    picture: {
      xs: "/images/expoGallery/bedroom/bd-04/bd-04-low.jpg",
      sm: "/images/expoGallery/bedroom/bd-04/bd-04-1x.jpg",
      md: "/images/expoGallery/bedroom/bd-04/bd-04-2x.jpg",
      lg: "/images/expoGallery/bedroom/bd-04/bd-04-3x.jpg",
    },
    category: "Bedroom",
  },
  {
    alt: "Furniture - 01",
    picture: {
      xs: "/images/expoGallery/furniture/fr-01/fr-01-low.jpg",
      sm: "/images/expoGallery/furniture/fr-01/fr-01-1x.jpg",
      md: "/images/expoGallery/furniture/fr-01/fr-01-2x.jpg",
      lg: "/images/expoGallery/furniture/fr-01/fr-01-3x.jpg",
    },
    category: "Furniture",
  },
  {
    alt: "Furniture - 02",
    picture: {
      xs: "/images/expoGallery/furniture/fr-02/fr-02-low.jpg",
      sm: "/images/expoGallery/furniture/fr-02/fr-02-1x.jpg",
      md: "/images/expoGallery/furniture/fr-02/fr-02-2x.jpg",
      lg: "/images/expoGallery/furniture/fr-02/fr-02-3x.jpg",
    },
    category: "Furniture",
  },
  {
    alt: "Furniture - 03",
    picture: {
      xs: "/images/expoGallery/furniture/fr-03/fr-03-low.jpg",
      sm: "/images/expoGallery/furniture/fr-03/fr-03-1x.jpg",
      md: "/images/expoGallery/furniture/fr-03/fr-03-2x.jpg",
      lg: "/images/expoGallery/furniture/fr-03/fr-03-3x.jpg",
    },
    category: "Furniture",
  },
  {
    alt: "Furniture - 04",
    picture: {
      xs: "/images/expoGallery/furniture/fr-04/fr-04-low.jpg",
      sm: "/images/expoGallery/furniture/fr-04/fr-04-1x.jpg",
      md: "/images/expoGallery/furniture/fr-04/fr-04-2x.jpg",
      lg: "/images/expoGallery/furniture/fr-04/fr-04-3x.jpg",
    },
    category: "Furniture",
  },
  {
    alt: "Furniture - 05",
    picture: {
      xs: "/images/expoGallery/furniture/fr-05/fr-05-low.jpg",
      sm: "/images/expoGallery/furniture/fr-05/fr-05-1x.jpg",
      md: "/images/expoGallery/furniture/fr-05/fr-05-2x.jpg",
      lg: "/images/expoGallery/furniture/fr-05/fr-05-3x.jpg",
    },
    category: "Furniture",
  },
  {
    alt: "Furniture - 06",
    picture: {
      xs: "/images/expoGallery/furniture/fr-06/fr-06-low.jpg",
      sm: "/images/expoGallery/furniture/fr-06/fr-06-1x.jpg",
      md: "/images/expoGallery/furniture/fr-06/fr-06-2x.jpg",
      lg: "/images/expoGallery/furniture/fr-06/fr-06-3x.jpg",
    },
    category: "Furniture",
  },
  {
    alt: "Kitchen - 01",
    picture: {
      xs: "/images/expoGallery/kitchen/ki-01/ki-01-low.jpg",
      sm: "/images/expoGallery/kitchen/ki-01/ki-01-1x.jpg",
      md: "/images/expoGallery/kitchen/ki-01/ki-01-2x.jpg",
      lg: "/images/expoGallery/kitchen/ki-01/ki-01-3x.jpg",
    },
    category: "Kitchen",
  },
  {
    alt: "Kitchen - 02",
    picture: {
      xs: "/images/expoGallery/kitchen/ki-02/ki-02-low.jpg",
      sm: "/images/expoGallery/kitchen/ki-02/ki-02-1x.jpg",
      md: "/images/expoGallery/kitchen/ki-02/ki-02-2x.jpg",
      lg: "/images/expoGallery/kitchen/ki-02/ki-02-3x.jpg",
    },
    category: "Kitchen",
  },
  {
    alt: "Kitchen - 03",
    picture: {
      xs: "/images/expoGallery/kitchen/ki-03/ki-03-low.jpg",
      sm: "/images/expoGallery/kitchen/ki-03/ki-03-1x.jpg",
      md: "/images/expoGallery/kitchen/ki-03/ki-03-2x.jpg",
      lg: "/images/expoGallery/kitchen/ki-03/ki-03-3x.jpg",
    },
    category: "Kitchen",
  },
  {
    alt: "Kitchen - 04",
    picture: {
      xs: "/images/expoGallery/kitchen/ki-04/ki-04-low.jpg",
      sm: "/images/expoGallery/kitchen/ki-04/ki-04-1x.jpg",
      md: "/images/expoGallery/kitchen/ki-04/ki-04-2x.jpg",
      lg: "/images/expoGallery/kitchen/ki-04/ki-04-3x.jpg",
    },
    category: "Kitchen",
  },
  {
    alt: "Other - 01",
    picture: {
      xs: "/images/expoGallery/other/ot-01/ot-01-low.jpg",
      sm: "/images/expoGallery/other/ot-01/ot-01-1x.jpg",
      md: "/images/expoGallery/other/ot-01/ot-01-2x.jpg",
      lg: "/images/expoGallery/other/ot-01/ot-01-3x.jpg",
    },
    category: "Other",
  },
  {
    alt: "Other - 02",
    picture: {
      xs: "/images/expoGallery/other/ot-02/ot-02-low.jpg",
      sm: "/images/expoGallery/other/ot-02/ot-02-1x.jpg",
      md: "/images/expoGallery/other/ot-02/ot-02-2x.jpg",
      lg: "/images/expoGallery/other/ot-02/ot-02-3x.jpg",
    },
    category: "Other",
  },
  {
    alt: "Villa - 01",
    picture: {
      xs: "/images/expoGallery/villa/v-01/v-01-low.jpg",
      sm: "/images/expoGallery/villa/v-01/v-01-1x.jpg",
      md: "/images/expoGallery/villa/v-01/v-01-2x.jpg",
      lg: "/images/expoGallery/villa/v-01/v-01-3x.jpg",
    },
    category: "Villa",
  },
  {
    alt: "Villa - 02",
    picture: {
      xs: "/images/expoGallery/villa/v-02/v-02-low.jpg",
      sm: "/images/expoGallery/villa/v-02/v-02-1x.jpg",
      md: "/images/expoGallery/villa/v-02/v-02-2x.jpg",
      lg: "/images/expoGallery/villa/v-02/v-02-3x.jpg",
    },
    category: "Villa",
  },
  {
    alt: "Villa - 03",
    picture: {
      xs: "/images/expoGallery/villa/v-03/v-03-low.jpg",
      sm: "/images/expoGallery/villa/v-03/v-03-1x.jpg",
      md: "/images/expoGallery/villa/v-03/v-03-2x.jpg",
      lg: "/images/expoGallery/villa/v-03/v-03-3x.jpg",
    },
    category: "Villa",
  },
  {
    alt: "Villa - 04",
    picture: {
      xs: "/images/expoGallery/villa/v-04/v-04-low.jpg",
      sm: "/images/expoGallery/villa/v-04/v-04-1x.jpg",
      md: "/images/expoGallery/villa/v-04/v-04-2x.jpg",
      lg: "/images/expoGallery/villa/v-04/v-04-3x.jpg",
    },
    category: "Villa",
  },
  {
    alt: "Villa - 05",
    picture: {
      xs: "/images/expoGallery/villa/v-05/v-05-low.jpg",
      sm: "/images/expoGallery/villa/v-05/v-05-1x.jpg",
      md: "/images/expoGallery/villa/v-05/v-05-2x.jpg",
      lg: "/images/expoGallery/villa/v-05/v-05-3x.jpg",
    },
    category: "Villa",
  },
  {
    alt: "Villa - 06",
    picture: {
      xs: "/images/expoGallery/villa/v-06/v-06-low.jpg",
      sm: "/images/expoGallery/villa/v-06/v-06-1x.jpg",
      md: "/images/expoGallery/villa/v-06/v-06-2x.jpg",
      lg: "/images/expoGallery/villa/v-06/v-06-3x.jpg",
    },
    category: "Villa",
  },
  {
    alt: "Villa - 07",
    picture: {
      xs: "/images/expoGallery/villa/v-07/v-07-low.jpg",
      sm: "/images/expoGallery/villa/v-07/v-07-1x.jpg",
      md: "/images/expoGallery/villa/v-07/v-07-2x.jpg",
      lg: "/images/expoGallery/villa/v-07/v-07-3x.jpg",
    },
    category: "Villa",
  },
  {
    alt: "Villa - 08",
    picture: {
      xs: "/images/expoGallery/villa/v-08/v-08-low.jpg",
      sm: "/images/expoGallery/villa/v-08/v-08-1x.jpg",
      md: "/images/expoGallery/villa/v-08/v-08-2x.jpg",
      lg: "/images/expoGallery/villa/v-08/v-08-3x.jpg",
    },
    category: "Villa",
  },
];
