"use client";

import { useCallback, useState } from "react";
import { Camera, Upload } from "lucide-react";
import { toast } from "sonner";
import { useDropzone } from "react-dropzone";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isImageSearchActive, setIsImageSearchActive] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [searchImage, setSearchImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("Image size must be less than 5MB");
      return;
    }

    setIsUploading(true);
    setSearchImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setIsUploading(false);
      toast.success("Image uploaded successfully");
    };
    reader.onerror = () => {
      setIsUploading(false);
      toast.error("Failed to read the image");
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png"] },
    maxFiles: 1,
  });

  const handleTextSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      toast.error("Please enter a search term.");
      return;
    }
    toast.success(`Searching for "${searchTerm}"...`);
    // Add your search logic here
  };

  const handleImageSearch = (e) => {
    e.preventDefault();
    if (!searchImage) {
      toast.error("Please upload an image first.");
      return;
    }
    toast.success("Searching by image...");
    // Add your image search logic here
  };

  return (
    <div>
      <form onSubmit={handleTextSubmit}>
        <div className="relative flex items-center">
          <Input
            type="text"
            placeholder="Enter make, model, or use AI search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-17 py-6 w-full rounded-full border-gray-100 bg-white/95 backdrop-blur-sm"
          />
          <div className="absolute right-[100px]">
            <Camera
              size={35}
              onClick={() => setIsImageSearchActive(!isImageSearchActive)}
              style={{
                background: isImageSearchActive ? "black" : "",
                color: isImageSearchActive ? "white" : "",
                cursor: "pointer",
              }}
            />
          </div>
          <Button type="submit" className="absolute right-2 rounded-full">
            Search
          </Button>
        </div>
      </form>

      {isImageSearchActive && (
        <div className="mt-4">
          <form onSubmit={handleImageSearch}>
            <div className="border-2 border-dashed border-gray-700 rounded-3xl p-6 text-center">
              {imagePreview && (
                <div className="flex flex-col items-center">
                  <img
                    src={imagePreview}
                    alt="Car Preview"
                    className="h-40 object-contain mb-4"
                  />
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => {
                      setSearchImage(null);
                      setImagePreview("");
                      toast.info("Image removed");
                    }}
                  >
                    Remove Image
                  </Button>
                </div>
              )}

              <div {...getRootProps()} className="cursor-pointer mt-4">
                <input {...getInputProps()} />
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  {isDragActive && !isDragReject ? (
                    <p className="text-gray-300 mb-2">Drop the file here...</p>
                  ) : (
                    <p className="text-gray-300 mb-2">Drag & drop a car image or click to select</p>
                  )}
                  {isDragReject && (
                    <p className="text-red-500 mb-2">Invalid image type</p>
                  )}
                  <p className="text-gray-400 text-sm">
                    Supports: JPG, JPEG, PNG (max 5MB)
                  </p>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              className="mt-4"
              disabled={isUploading || !searchImage}
            >
              {isUploading ? "Uploading..." : "Search by Image"}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HomeSearch;
