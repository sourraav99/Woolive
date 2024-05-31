import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Countries} from './CountryData';
import {COLORS} from '../../res/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  useFontScale,
  usePercentageHeight,
  usePercentageWidth,
} from '../hooks/responsive';
import {Fonts} from '../../res/fonts';
import Space from '../hooks/Space';
import {useNavigation} from '@react-navigation/native';
import NumberInput from '../screens/numberInput';

const CountryPicker = ({ route }) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
// Get the onSelectCountry callback function from route.params
const onSelectCountry = route.params?.onSelectCountry;

  const filteredCountries = Countries.filter(country =>
    country.en.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleCountrySelect = (flag, dialCode) => {
    // Pass the selected flag and dial code back to the NumberInput screen using the callback function
    onSelectCountry(flag, dialCode);
    navigation.goBack();
  };

  const CountryListItem = React.memo(({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleCountrySelect(item.flag,item.dialCode)}
        activeOpacity={0.4}
        style={styles.itemContainer}>
        <View style={styles.nameContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {item.en}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text>{item.flag}</Text>
          <Space width={usePercentageWidth(4)} />
          <Text style={styles.dialCode}>{item.dialCode}</Text>
        </View>
      </TouchableOpacity>
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Space width={usePercentageWidth(2)}/>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name={'chevron-left'} size={25} color={COLORS.black} />
          </TouchableOpacity>
          <Space width={usePercentageWidth(4)} />
          <TextInput
            style={styles.input}
            placeholder="Search Country"
            placeholderTextColor={'grey'}
            onChangeText={text => setSearchText(text)}
            value={searchText}
          />
        </View>
        <FlatList
          data={searchText ? filteredCountries : Countries}
          renderItem={({item, index}) => <CountryListItem item={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    height: usePercentageHeight(7),
    width: usePercentageWidth(100),
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrey,
  },
  input: {
    fontSize: useFontScale(20),
    color: COLORS.black,
  },
  itemContainer: {
    height: usePercentageHeight(7),
    width: usePercentageWidth(95),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.lightGrey,
    alignSelf: 'center',
  },
  nameContainer: {
    width: usePercentageWidth(60),
  },
  name: {
    fontSize: useFontScale(15),
    color: COLORS.black,
    fontFamily: Fonts.Roboto_Medium,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dialCode: {
    color: COLORS.black,
    marginLeft: usePercentageWidth(2),
  },
});

export default CountryPicker;
