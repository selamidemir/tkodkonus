import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './Button.style';

function Button({title, colors, disabled, onPress}) {
  const [btnColor, setBtnColor] = useState({
    text: styles.btn_text.color,
    background: styles.btn.backgroundColor,
  });

  useEffect(() => {
    if (colors && colors.text && colors.background) {
      setBtnColor({
        text: colors.text,
        background: colors.background,
      });
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        style={{...styles.btn, backgroundColor: btnColor.background}}
        onPress={onPress}>
        <Text style={{...styles.btn_text, color: btnColor.text}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
