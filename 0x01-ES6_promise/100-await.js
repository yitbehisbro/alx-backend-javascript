import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const usersData = {
      photo: uploadPhoto(),
      user: createUser(),
    };
    return usersData;
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
