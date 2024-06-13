// Import berbagai modul dan komponen yang dibutuhkan
import React from "react"; // Komponen React
import { TextInput, StyleSheet, View } from "react-native"; // Komponen React Native untuk tampilan UI

// Komponen input teks kustom untuk menerima masukan pengguna
const CustomTextInput = ({
  text, // Teks input saat ini
  onChange, // Fungsi untuk menangani perubahan teks
  multiline = false, // Apakah input teks bisa beberapa baris
  placeholder, // Teks placeholder untuk input
  numberOfLines, // Jumlah baris input teks (untuk input multiline)
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline} // Apakah input bisa beberapa baris
      numberOfLines={numberOfLines} // Jumlah baris input teks
      style={styles.input} // Gaya untuk input teks
      placeholder={placeholder} // Teks placeholder
      onChangeText={onChange} // Fungsi yang dijalankan saat teks berubah
      defaultValue={text} // Nilai default untuk input teks
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 2, // Lebar border input teks
    borderColor: "#DDDDDD", // Warna border input teks
    padding: 10, // Padding di sekitar teks dalam input
  },
  container: {
    marginTop: 20, // Margin atas untuk container input
  },
});

export default CustomTextInput;
