const RNFS = require('react-native-fs');

const createFile = async (data) => {
  return await RNFS.writeFile('../../assets/', data, 'base64');
};

export default createFile;
