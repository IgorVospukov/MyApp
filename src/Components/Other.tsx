import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Page1 from '../Pages/Page1';
import Page2 from '../Pages/Page2';
import {StackParamList} from '../Types/types';

const Stack = createNativeStackNavigator<StackParamList>();

const Other: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileScreen"
        getComponent={() => require('./ProfileScreen').default}
      />
      <Stack.Screen name="Page1" component={Page1} />
      <Stack.Screen name="Page2" component={Page2} />
    </Stack.Navigator>
  );
};
export default Other;
