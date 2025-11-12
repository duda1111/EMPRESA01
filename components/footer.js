import React from "react";
import {view, text } from 'react-native';
import {globalStyles} from '../global';

export default function Footer() {
    return(
        <view style={globalStyles.Footer}>
            <Text style={globalStyles.FooterText}>
                2025 minha empresa. todos os direitos reservados.
            </Text>
        </view>
    );
}