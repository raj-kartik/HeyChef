// SignupHandler.js
import RNFS from 'react-native-fs';

export const saveSignupDataToFile = async (userData) => {
  try {
    const path = `${RNFS.DocumentDirectoryPath}/Login.json`;

    // Check if the file exists
    const fileExists = await RNFS.exists(path);

    let existingData = [];
    if (fileExists) {
      const fileContent = await RNFS.readFile(path, 'utf8');
      existingData = JSON.parse(fileContent);
    }

    existingData.push(userData);

    // Write the updated data to the file
    await RNFS.writeFile(path, JSON.stringify(existingData), 'utf8');

    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
};
