import React from 'react';
import { Text, View } from 'react-native';
import { SIZES } from '../../constants';

const Setting = () => {
    return (
        <View style={{ flex: 1, padding: SIZES.body1 * 0.5 }}>
            <Text>Admin 1</Text>
            <Text>Admin 2</Text>
        </View>
    )
}

export default Setting