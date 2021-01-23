const url = `https://api.cloudinary.com/v1_1/${
  import.meta.env.VITE_CLOUD_NAME
}/image/upload`;

async function upload(image: File) {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("upload_preset", "bmgzsiqt");

  return fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => data);
}

export { upload };
