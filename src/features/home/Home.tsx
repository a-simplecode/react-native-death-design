import React from 'react';
import styles from './HomeStyles';
import type {PropsWithChildren} from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const flatListData = [
  {
    title: 'Step ONE',
    description:
      'Edit App.tsx to change this screen and then come back to see your edits.',
  },
  {title: 'See Your Changes', description: <ReloadInstructions />},
  {title: 'Debug', description: <DebugInstructions />},
  {
    title: 'Learn More',
    description: 'Read the docs to discover what to do next:',
  },
];

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const Home: React.FC<any> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <FlatList
            data={flatListData}
            horizontal={true}
            style={styles.flatList}
            renderItem={({item}) => (
              <Section title={item.title}>{item.description}</Section>
            )}
          />
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
