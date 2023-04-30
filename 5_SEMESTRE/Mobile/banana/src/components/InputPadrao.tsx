import React from 'react';
import { View } from 'react-native';
import { Text, Input } from 'native-base';

export type props = {
    value: string,
    label: string,
    placeHolder: string,
    type: "text" | "password";
    onChange: (value: string) => void
}


export function InputPadrao({ value, label, placeHolder, type, onChange }: props) {
    return (
        <View>
            <Text color={'black'}>{label}</Text>
            <Input
                marginBottom={2}
                marginTop={1}
                backgroundColor={'white'}
                borderColor={'white'}
                placeholder={placeHolder}
                value={value}
                type={type}
                onChangeText={onChange}
            />
        </View>
    );
}