import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  let user = { status: 'pending', value: '' };
  let photo = { status: 'pending', value: '' };

  try {
    const userData = await userPromise;
    user = { status: 'fulfilled', value: userData };
  } catch (error) {
    user = { status: 'rejected', value: error.toString() };
  }

  try {
    const photoData = await photoPromise;
    photo = { status: 'fulfilled', value: photoData };
  } catch (error) {
    photo = { status: 'rejected', value: error.toString() };
  }

  return [user, photo];
}
