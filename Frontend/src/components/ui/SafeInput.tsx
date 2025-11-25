import React from 'react';
import { TextInput, StyleSheet, ViewStyle, TextInputProps, View } from 'react-native';
import { useColorModeValue } from 'native-base';

interface SafeInputProps extends TextInputProps {
  InputLeftElement?: React.ReactElement;
  InputRightElement?: React.ReactElement;
  containerStyle?: ViewStyle;
}

export const SafeInput = React.forwardRef<TextInput, SafeInputProps>(
  ({ InputLeftElement, InputRightElement, containerStyle, style, ...props }, ref) => {
    const bgColor = useColorModeValue('#F3F4F6', '#374151');
    const textColor = useColorModeValue('#111827', '#F9FAFB');
    const placeholderColor = useColorModeValue('#6B7280', '#9CA3AF');

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: bgColor },
          containerStyle,
        ]}
      >
        {InputLeftElement && (
          <View style={styles.leftElement}>
            {InputLeftElement}
          </View>
        )}
        <TextInput
          ref={ref}
          style={[styles.input, { color: textColor }, InputLeftElement && styles.inputWithLeftIcon, style]}
          placeholderTextColor={placeholderColor}
          {...props}
        />
        {InputRightElement && (
          <View style={styles.rightElement}>
            {InputRightElement}
          </View>
        )}
      </View>
    );
  }
);

SafeInput.displayName = 'SafeInput';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 48,
    width: '100%',
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 0,
    margin: 0,
    textAlignVertical: 'center',
    minHeight: 24,
  },
  inputWithLeftIcon: {
    marginLeft: 8,
  },
  leftElement: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightElement: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

