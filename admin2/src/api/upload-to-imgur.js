export const uploadImg = async (file) => {
  if (!file) return {};
  const myHeaders = new Headers();
  myHeaders.append('Authorization', 'Client-ID 25a9145c3c90596');

  const formdata = new FormData();
  formdata.append('image', file);
  formdata.append('type', 'image');
  formdata.append('title', 'Product Upload');
  formdata.append('description', 'This is a simple product upload in Imgur');

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow',
  };

  try {
    const res = await fetch('https://api.imgur.com/3/image', requestOptions);
    console.log('Upload Success!!');
    const data = await res.json();
    return data.data.link;
  } catch (err) {
    console.log('Upload Failed!!');
    console.log(err);
    return err;
  }
};
