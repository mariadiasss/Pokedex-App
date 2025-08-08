import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { POKEMON_TYPE_COLORS } from "../../utils/colors";
import { styles } from "./styles";

export default function card({ pokemon }) {
    return (
        <TouchableOpacity
          style={[styles.container,
            { backgroundColor: `${POKEMON_TYPE_COLORS[pokemon.Tipo[0].Nome]}` },
          ]}>

    );
}