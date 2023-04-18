import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const output = [];
  try {
    const usersData = await signUpUser(firstName, lastName);
    output.push({ status: 'fulfilled', value: usersData });
  } catch (error) {
    output.push({ status: 'rejected', value: error.toString() });
  }
  try {
    const usersPhoto = await uploadPhoto(fileName);
    output.push({ status: 'fulfilled', value: usersPhoto });
  } catch (error) {
    output.push({ status: 'rejected', value: error.toString() });
  }
  return output;
}
