// Import berbagai modul dan komponen yang dibutuhkan
import React, { useState } from "react"; // useState untuk mengelola state dalam komponen
import { View, Button, StyleSheet } from "react-native"; // Komponen React Native untuk tampilan UI
import CustomTextInput from "./customTextInput"; // Komponen input kustom untuk pencarian cuaca

// Komponen untuk pencarian cuaca berdasarkan kota
const WeatherSearch = ({ searchWeather }) => {
  // State untuk menyimpan input lokasi dari pengguna
  const [location, setLocation] = useState("");

  return (
    <View>
      {/* Komponen input teks kustom */}
      <CustomTextInput
        placeholder="Search the weather of your city" // Placeholder untuk input teks
        numberOfLines={1} // Input hanya satu baris
        text={location} // Mengikat nilai input ke state location
        onChange={setLocation} // Mengubah state location saat teks berubah
      />
      <View style={styles.buttonWrapper}>
        {/* Tombol untuk memulai pencarian cuaca */}
        <Button title="Search" onPress={() => searchWeather(location)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20, // Margin atas untuk tombol, memberi ruang antara input dan tombol
  },
});

export default WeatherSearch;
