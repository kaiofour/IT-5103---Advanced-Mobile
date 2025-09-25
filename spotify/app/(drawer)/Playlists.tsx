import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const playlists = [
  {
    id: "1",
    title: "Juna Beats",
    subtitle: "Playlist • Juna",
    image: require("../../assets/images/juna-logo.jpg"),
  },
  {
    id: "2",
    title: "Swag Vibes",
    subtitle: "Playlist • Swag",
    image: require("../../assets/images/swag-logo.png"),
  },
  {
    id: "3",
    title: "The Last Wun",
    subtitle: "Playlist • Wun",
    image: require("../../assets/images/the-last-wun-logo.jpeg"),
  },
  {
    id: "4",
    title: "Larger Than Life",
    subtitle: "Playlist • Life",
    image: require("../../assets/images/larger-than-life-logo.png"),
  },
];

export default function Playlists() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/(drawer)/playlist/[id]",
          params: { id: item.id },
        })
      }
    >
      <Image source={item.image} style={styles.cover} />
      <View style={styles.textContainer}>
        <Text style={styles.playlistTitle}>{item.title}</Text>
        <Text style={styles.playlistSubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Playlists</Text>
      </View>

      {/* Playlist List */}
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#121212" },
  header: { paddingHorizontal: 15, paddingTop: 20, paddingBottom: 10 },
  headerText: { color: "white", fontSize: 26, fontWeight: "bold" },
  card: { flexDirection: "row", alignItems: "center", marginBottom: 18 },
  cover: { width: 70, height: 70, borderRadius: 5, marginRight: 15 },
  textContainer: { flex: 1, justifyContent: "center" },
  playlistTitle: { color: "white", fontSize: 16, fontWeight: "600" },
  playlistSubtitle: { color: "#b3b3b3", fontSize: 13, marginTop: 2 },
});
