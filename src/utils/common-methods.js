import api, { FILE_UPLOAD } from '../config/api-config';

export const initReducer = (prevProps, newProps) => ({ ...prevProps, ...newProps });

export const uploadFile = (file) => new Promise((resolve, reject) => {
  try {
    const formData = new FormData();

    formData.append('attachment', file);

    api.post(FILE_UPLOAD, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(response => {
        resolve(response?.data?.data);
      })
      .catch(err => {
        console.error('FILE UPLOAD ERR: ', err);
        reject(err);
      });
  } catch (e) {
    console.error('ERR uploading file: ', e);
    reject(e);
  }
});

export const cleanObjForUpdate = payload => {
  const updatePayload = {...payload};
  if (updatePayload?._id) delete updatePayload?._id;
  if (updatePayload?.id) delete updatePayload?.id;
  if (updatePayload?.createdAt) delete updatePayload?.createdAt;
  if (updatePayload?.updatedAt) delete updatePayload?.updatedAt;

  return updatePayload;
};
