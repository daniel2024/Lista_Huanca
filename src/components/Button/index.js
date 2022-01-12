import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import cls from './style';

const Button = ({ text, style = {}, disabled = false, ...props }) => {


    const styleDisabled = React.useMemo(() => {
        return disabled ? cls.disabledButton : {}
    }, [disabled])


    return (
        <TouchableOpacity style={{ ...cls.buttonContainer, ...styleDisabled, ...style }} disabled={disabled}  {...props}>
            <Text style={cls.buttonText} >{text}</Text>
        </TouchableOpacity >
    )
}

export default Button
