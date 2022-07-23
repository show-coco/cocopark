import { ChangeEventHandler, MouseEventHandler, useState } from "react";

export const useFileSelector = (
  setImage: (image: File | undefined) => void,
  initialValue?: string
) => {
  const [imageBlob, setImageBlob] = useState(initialValue ?? "");
  const [imageName, setImageName] = useState("");

  const onFileRemove: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    setImageBlob("");
    setImage(undefined);
  };

  const onFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files?.[0] as File;
    const blob = URL.createObjectURL(file);
    setImageName(file?.name || "");
    setImageBlob(blob);
  };

  const onSave = (blobObj: Blob) => {
    const blob = URL.createObjectURL(blobObj);
    setImageBlob(blob);

    const files = new File([blobObj], imageName);
    setImage(files);
  };

  return { imageBlob, onFileRemove, onFileChange, onSave } as const;
};
