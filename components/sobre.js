import React from "react";
import { View, Text } from "react-native";
import { globalStyles as styles } from "../global";

export default function Sobre() {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>Sobre Nós</Text>
            <Text>Conheça mais sobre a história e missão da nossa empresa.</Text>
        </View>
    );
}
