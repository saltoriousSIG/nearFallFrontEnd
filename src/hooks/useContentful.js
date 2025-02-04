import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  host: "cdn.contentful.com",
});

export const useContentful = (page, trip) => {
  const [imgPaths, setImgPaths] = useState([]);
  useEffect(() => {
    const load = async () => {
      switch (page) {
        case "home": {
          const entries = await client.getEntries({
            content_type: "homepageImages",
          });
          const imagePathUrls = entries.items[0].fields.homeImages.map(
            (img) => "https:" + img.fields.file.url
          );
          setImgPaths(imagePathUrls);
          break;
        }
        case "trip": {
          const entries = await client.getEntries({
            content_type: "tripImages",
          });
          const { fields } = entries.items[0];
          const images = fields[trip];
          const imgUrlPaths = images.map(({ fields }) => {
            return "https:" + fields.file.url;
          });
          setImgPaths(imgUrlPaths);
          break;
        }
        default:
          setImgPaths([]);
          break;
      }
    };
    load();
  }, [trip]);
  return imgPaths;
};
