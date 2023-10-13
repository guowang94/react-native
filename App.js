import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native';

export default function App() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    {
      id: 'option1',
      title: 'Option 1',
    },
    {
      id: 'option2',
      title: 'Option 2',
    },
    {
      id: 'option3',
      title: 'Option 3',
    },
    {
      id: 'option4',
      title: 'Option 4',
    },
  ];

  const onSelectFocus = () => {
    setShowOptions(true);
  };

  const onSelectClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const isSelected = (option) => {
    if (selectedOption) {
      return selectedOption.id === option.id;
    }
    return false;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View id="question-label">
          <Text style={styles['question-label']}>
            Q1: Simple Custom React Native Select Component
          </Text>
        </View>
        <View id="select-root" style={styles['select-root']}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={onSelectFocus}
          >
            <View id="select-label" style={styles['select-label']}>
              <Text>{selectedOption?.title ?? 'Custom Select'}</Text>
              <Icon name={showOptions ? 'angle-down' : 'angle-up'}/>
            </View>
          </TouchableHighlight>
          {showOptions && (
            <View id="select-options" style={styles['select-options']}>
              {options.map((option) => {
                return (
                  <TouchableHighlight
                    key={option.id}
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => onSelectClick(option)}
                  >
                    <View
                      id={option.id}
                      style={styles['select-option'](isSelected(option))}
                    >
                      <Text>{option.title}</Text>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  'question-label': {
    fontWeight: 'bold',
  },
  'select-root': {},
  'select-label': {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomColor: '#b3b3b3',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  'select-options': {
    borderTopColor: '#3489eb',
    borderTopWidth: 2,
    borderRightColor: '#3489eb',
    borderRightWidth: 2,
    borderBottomColor: '#3489eb',
    borderBottomWidth: 2,
    borderLeftColor: '#3489eb',
    borderLeftWidth: 2,
  },
  'select-option': (selected) => {
    const bgColor = selected ? 'grey' : '#fff';

    return {
      backgroundColor: bgColor,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      paddingBottom: 8,
    };
  },
});
