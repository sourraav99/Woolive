import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import numberInput from '../numberInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IMAGES} from '../../../res/images';
import {COLORS} from '../../../res/colors';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground blurRadius={1.3} source={IMAGES.HANDS}>
     <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content" // or 'light-content' depending on your preference
        />
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']}
        style={styles.screenGradient}>
        <SafeAreaView style={styles.SafeAreaView}>
          <View style={styles.container1}>
            <View>
              <Text style={styles.wooliveText}>WooLive</Text>
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{`MAKE THE`}</Text>
              <Text style={styles.title}>{`FIRST MOVE`}</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View>
              <Text>{``}</Text>
            </View>
            <TouchableOpacity style={styles.facebookSigningBtnContainer}>
              <Ionicons name="logo-facebook" size={35} color={COLORS.white} />
              <Text
                style={
                  styles.facebookSigningBtnText
                }>{`Continue with Facebook`}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobileNumberButtonContainer} onPress={()=>{navigation.navigate('number')}}>
              <Text
                style={
                  styles.mobileNumberButtonText
                }>{`Use mobile number`}</Text>
            </TouchableOpacity>
            <View style={styles.termsAndPrivacyPolicyTextContainer}>
              <Text style={styles.parentText}>
                {`By signing up, you agree to our `}
                <TouchableOpacity>
                  <Text style={styles.childrenText}>Terms</Text>
                </TouchableOpacity>
                {`. See how we\nuse your data in our `}
                <TouchableOpacity>
                  <Text style={styles.childrenText}>{`Privacy Policy`}</Text>
                </TouchableOpacity>
                {`\nWe never post to Facebook.`}
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Signup;
