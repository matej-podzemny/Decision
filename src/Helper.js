import React, { Component } from 'react';
import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const fontAutoSize = SCREEN_WIDTH * 0.1;

export const HelperStyles = {
  text: {
    fontWeight: 'bold',
    fontSize: fontAutoSize,
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: "#093145",
  }
};
