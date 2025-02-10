import React, { useState } from 'react';
import { Text, Pressable, TextInput, Alert } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {
  const [length, setLength] = useState(0);
  const [pass, setPass] = useState('');

  function handleGenerateBtton() {
    if(length >= 8) {
      let generateToken = generatePass(length);
      Alert.alert('Password generated',  'Password de ' + length.toString() + ' caracteres gerada com sucesso!');
      setPass(generateToken);
    } else {
      Alert.alert('Error',  'Password precisa ter no mínimo 8 caracteres!');
    }
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <TextInput
            style={styles.input}
            onChange={(text) => setLength(Number(text.nativeEvent.text))}
            keyboardType='numeric'
            placeholder='Password length'
        />
      <BatTextInput pass={pass}/>

      <Pressable
          onPress={handleGenerateBtton}
          style={styles.button}
      >
          <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
          onPress={handleCopyButton}
          style={styles.button}
      >
          <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}