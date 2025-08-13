import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { POKEMON_TYPE_COLORS } from "../../utils/colors";
import { styles } from "./styles";
import Button from "../Button";


export default function card({ pokemon }) {
    return (
        <TouchableOpacity
          style={[styles.container,
            { backgroundColor: `${POKEMON_TYPE_COLORS[pokemon.Tipo[0].Nome]}` },
          ]}>
          <View style={styles.info}>
            <Text style={styles.numero}>#{pokemon.Numero}</Text>
            <Text style={styles.Nome}>{pokemon.Nome}</Text>
            <ScrollView horizontal>
              {pokemon.Tipo.map((tipo) => (
                <Button tipo= {tipo} key={tipo.Nome}/>
              ))}
            </ScrollView>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: pokemon.Imagem }} style={styles.imagem}/>
          </View>
        </TouchableOpacity>

    );
}