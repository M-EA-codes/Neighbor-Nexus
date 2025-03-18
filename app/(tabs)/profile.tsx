import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen() {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    router.replace('/(auth)/welcome');
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <IconSymbol name="person.crop.circle.fill" size={80} color="#4c669f" />
          </View>
          <ThemedText style={styles.name}>User Name</ThemedText>
          <ThemedText style={styles.email}>user@example.com</ThemedText>
        </View>
        
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Account Settings</ThemedText>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuItem}>
              <IconSymbol name="person.fill" size={20} color="#4c669f" />
              <ThemedText style={styles.menuText}>Edit Profile</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <IconSymbol name="lock.fill" size={20} color="#4c669f" />
              <ThemedText style={styles.menuText}>Change Password</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <IconSymbol name="mappin.circle.fill" size={20} color="#4c669f" />
              <ThemedText style={styles.menuText}>Manage Address</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Preferences</ThemedText>
          <View style={styles.card}>
            <TouchableOpacity style={styles.menuItem}>
              <IconSymbol name="bell.fill" size={20} color="#4c669f" />
              <ThemedText style={styles.menuText}>Notifications</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <IconSymbol name="hand.raised.fill" size={20} color="#4c669f" />
              <ThemedText style={styles.menuText}>Privacy Settings</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
        
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <ThemedText style={styles.logoutText}>Logout</ThemedText>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(200, 200, 200, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    opacity: 0.7,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    borderRadius: 8,
    backgroundColor: 'rgba(200, 200, 200, 0.1)',
    marginBottom: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(200, 200, 200, 0.2)',
  },
  menuText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});