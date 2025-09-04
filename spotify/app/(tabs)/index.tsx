import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const logoImg = require('../../assets/images/spotifyLogo.png');
const fbImg = require('../../assets/images/facebook-logo.png');
const ggImg = require('../../assets/images/google-logo.png');


export default function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.top}>
        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.text}>Spotify</Text>
    </View>

    <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#a9a9a9"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#a9a9a9"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.forgotText}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <View style={styles.bottomOfButton}>
          <Text style={styles.bottomOfButton}>Be Correct With</Text>
        </View>
      </View>

      <View style={styles.bottomImgContainer}>
        <Image source={fbImg} style={styles.bottomImg} />
        <Image source={ggImg} style={styles.bottomImg} />
      </View>


      <Text style={styles.textLine}>
        Don’t have an account?{' '}

        <Link href="/Signup">
          <Text style={styles.signUp}>Sign up</Text>
        </Link>
      </Text>


    
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({

  bottomImgContainer: {
    flexDirection: 'row',   // 👈 side by side
    justifyContent: 'center', // center them horizontally
    alignItems: 'center',    // align them vertically
    marginTop: -60,
    marginBottom: -40,
  },
  bottomImg: {
    width: 30,
    height: 30,
    marginHorizontal: 10, // spacing between images
  },
  forgotText: {
    color: '#555',
    textAlign: 'right',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    marginTop: -20,
  },
 container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  top: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -200,
  },
  bottom: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -200,
    height: 400,

  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#555',
    paddingHorizontal: 12,
    marginBottom: 15,
    color: 'white',
    backgroundColor: '#121212', // dark input background
  },
  button: {
    backgroundColor: '#1DB954', // Spotify green
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomOfButton: {
    color: '#1DB954',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  textLine: {
  color: 'gray',   // default gray for the sentence
  fontSize: 15,
  textAlign: 'center',
  marginTop: 60,
  marginBottom: 20,
  },
  signUp: {
  color: '#1DB954', // Spotify bright green
  fontWeight: 'bold',
  },
});
