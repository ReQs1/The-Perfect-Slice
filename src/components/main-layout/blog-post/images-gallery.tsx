import { Dialog, DialogContent, DialogTrigger } from "@/components/dialog";
import { DetailedPost } from "../../../hooks/usePostInfo";
import { urlFor } from "../../../sanity/imageBuilder";

function ImagesGallery({ post }: { post: DetailedPost }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {post.gallery.map((image, idx) => {
        return (
          <Dialog>
            <DialogTrigger asChild>
              <button
                key={image._key}
                className="group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={urlFor(image).width(900).height(500).url()}
                  alt={`gallery image ${idx + 1}`}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </DialogTrigger>
            <DialogContent>
              <img
                src={urlFor(image).width(1920).height(1080).url()}
                alt={`gallery image ${idx + 1}`}
                className="inset-0"
              />
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}

export default ImagesGallery;
