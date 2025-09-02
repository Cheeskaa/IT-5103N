import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabFourScreen() {
  return (
    <ThemedView style={styles.container}>
      {/* Top Section: Logo + Title */}
      <View style={styles.topSection}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        <ThemedText type="title" style={styles.title}>Spotify</ThemedText>
      </View>

      {/* Bottom Section: Inputs + Forgot Password */}
      <View style={styles.bottomSection}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#555555"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#555555"
          secureTextEntry
        />

        {/* Forgot Password Text */}
        <View style={styles.forgotContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.bottomButton}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Connect With Section */}
      <View style={styles.connectSection}>
        <Text style={styles.connectText}>Connect with</Text>
        <View style={styles.socialLogos}>
          <TouchableOpacity>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('@/assets/images/logo.png')}
              style={styles.socialLogo}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Sign Up Text */}
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>
                Don't have an account?{' '}
                <Text style={styles.signupLink}>Sign up</Text>
              </Text>
            </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
    justifyContent: 'space-between',
    padding: 20
  },
  topSection: {
    alignItems: 'center',
    marginTop: 100
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '500',
  },
  bottomSection: {
    width: '100%',
    marginBottom: 100
  },
  input: {
    width: '75%',
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 20,
    fontSize: 16,
    marginBottom: 12,
    alignSelf: 'center',
    color: 'white'
  },
  forgotContainer: {
    width: '75%',
    alignSelf: 'center',
    alignItems: 'flex-end',
    marginTop: 4
  },
  forgotText: {
    color: '#555555',
    fontSize: 14,
    fontWeight: '500'
  },
  bottomButton: {
    backgroundColor: '#1DB954',
    paddingVertical: 12,
    width: '75%',
    borderRadius: 25,
    alignSelf: 'center',
    marginTop: -100, // Moves button closer to inputs
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  connectSection: {
    alignItems: 'center',
    marginTop: 20
  },
  connectText: {
    color: '#1DB954',
    fontSize: 14,
    marginBottom: 10
  },
  socialLogos: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  },
  socialLogo: {
    width: 40,
    height: 40,
    marginHorizontal: 10
  },
  signupContainer: {
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 30
    },
    signupText: {
      color: '#FFFFFF',
      fontSize: 14
    },
    signupLink: {
      color: '#1DB954',
      fontWeight: 'bold'
    }
});
