"use client"

import { Camera } from "lucide-react";
import { Input } from "./ui/input";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { useDropzone } from "react-dropzone";

const HomeSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [isImageSearchActive, setIsImageSearchActive] = useState(false)
    const [imagePreview, setImagePreview] = useState("")
    const [searchImage, setSearchImage] = useState(null)
    const [isUploading, setIsUploading] = useState(false)

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0]
        if(file){
            if(file.size > 5 * 1024 * 1024){
                toast.error("Image size must be less tahn 2mb")
                return
            }
            setIsUploading(true)
            setSearchImage(file)
        }
        const reader = new FileReader()
        reader.onloadend = () => {
            setImagePreview(reader.result)
            setIsUploading(false)
            toast.success("Image uploaded successfully")
        }
        reader.onerror = () => {
            setIsUploading(false)
            toast.error("Failed to read the image")
        }
        reader.readAsDataURL(file)
      }, [])
      const {getRootProps, getInputProps, isDragActive, isDragReject} = useDropzone({
        onDrop,
        accept: {
            "image/*": [".jpeg", "jpg", "png"]
        },
        maxFiles: 1
    })

    const handleTextSubmit = () => {

    }
    const handleImageSearch = () => {

    }
    return (
        <div>
            <form onSubmit={handleTextSubmit}>
                <div className="relative flex items-center"> 
                    <Input 
                        type="text"
                        placeholder="Enter make, model, or use Our Ai Search Model... "
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
                        color: isImageSearchActive ? "white" : ""
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
                        <div className="border-2 border-dashed border-gray-700 rounded-3xl p-6 text-center">{imagePreview ? (
                            <><div className="flex flex-col items-center">
                                <img
                                    src={imagePreview}
                                    alt="Car Preview"
                                    className="h-40 object-contain mb-4" />
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setSearchImage(null);
                                        setImagePreview("");
                                        toast.info("Image removed");
                                    } }
                                >
                                    Remove Image
                                </Button>
                            </div><div {...getRootProps()} className="cursor-pointer">
                                    <input {...getInputProps()} />
                                    <div className="flex flex-col items-center">
                                        <Upload className="h-12 w-12 text-gray-400 mb-2" />
                                        <p className="text-gray-300 mb-2">
                                            {isDragActive && !isDragReject ? (
                                                "Leave the file here to upload")
                                                : ("Drag 'n' drop a car image or click select"
                                                )}
                                        </p>
                                        {isDragReject && (
                                            <p className="text-red-500 mb-2">Invalid image type</p>
                                        )}
                                        <p className="text-gray-400 text-sm">
                                            Suports: Jpg, Jpeg, Png (max 5mb)
                                        </p>
                                    </div>
                                </div></>
                        ) : (
                            <div>
                            
                            </div>
                        )}</div>
                    </form>
                </div>
            )}
        </div>
    )
}
export default HomeSearch