import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photos, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photos.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
