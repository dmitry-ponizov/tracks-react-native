import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import AuthForm from '../components/AuthForm';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm 
        headerText="Sign up for tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Spacer>
          <Text style={styles.link}>
            Already have a account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: 'blue',
  },
});

export default SignupScreen;
