import Image from "next/image";
import { imageCatalog } from "../lib/data.js";

export default function ImageGrid() {
  return (
    <div className="image-grid flex m-2">
      <div>
        {imageCatalog.map((image) => (
          <div key={image.index} className="p-0.5">
            <Image
              src={image.imageUrl}
              alt={`Image ${image.index}`}
              width={500}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
      <div>
        {imageCatalog.reverse().map((image) => (
          <div key={image.index} className="p-0.5">
            <Image
              src={image.imageUrl}
              alt={`Image ${image.index}`}
              width={500}
              height={300}
              className="rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
