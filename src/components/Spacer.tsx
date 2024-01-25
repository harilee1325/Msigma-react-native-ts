import React, {useState} from 'react';
import {View} from 'react-native';

interface loginBtInterface {
  top: number;
  bottom: number;
  left: number;
  right: number;
}


function Spacer({top, bottom, left, right}: loginBtInterface) {
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: bottom,
        marginEnd: right,
        marginLeft: left,
      }}></View>
  );
}

export default Spacer;
