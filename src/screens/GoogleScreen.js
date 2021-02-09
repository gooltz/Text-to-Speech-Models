import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import PhraseInput from '../components/PhraseInput';
import { googleRequest } from '../functions/createRequest';
import createAudioFile from '../functions/createAudioFile';

const GoogleScreen = ({ navigation }) => {
  const [phrase, setPhrase] = useState('');

  const handlePhrase = (phrase) => {
    const data = googleRequest(phrase);
    createAudioFile(data);
    setPhrase('');
  };

  return (
    <>
      <PhraseInput
        handlePhrase={handlePhrase}
        phrase={phrase}
        onPhraseChange={(phrase) => setPhrase(phrase)}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default GoogleScreen;
