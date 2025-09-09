import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const profile_photo = require('../../assets/images/profile-photo.jpg');

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
        <Ionicons name="settings-outline" size={24} color="white" />
      </View>

      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image source={profile_photo} style={styles.profileImage} />
        <Text style={styles.name}>Russel Edullantes</Text>
        <Text style={styles.username}>@kaiofour</Text>
      </View>

      {/* Stats */}
      <View style={styles.stats}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>4</Text>
          <Text style={styles.statLabel}>Playlists</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>10</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 20 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  profileSection: { alignItems: 'center', marginBottom: 30 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  username: { color: 'gray', fontSize: 14, marginTop: 4 },
  stats: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 30 },
  statBox: { alignItems: 'center' },
  statNumber: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  statLabel: { color: 'gray', fontSize: 12 },
  button: {
    backgroundColor: '#1DB954',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 50,
  },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
