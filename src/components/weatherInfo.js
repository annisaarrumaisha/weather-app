// Import berbagai modul dan komponen yang dibutuhkan
import React from "react"; // Komponen React
import { View, Text, StyleSheet, Image } from "react-native"; // Komponen React Native untuk tampilan UI

// Komponen untuk menampilkan informasi cuaca
const WeatherInfo = ({ weatherData }) => {
  // Ambil data yang diperlukan dari weatherData
  const {
    name, // Nama kota
    main: { temp }, // Suhu dalam derajat Celsius
    weather, // Informasi cuaca
    visibility, // Visibilitas dalam kilometer
    wind: { speed }, // Kecepatan angin dalam meter per detik
  } = weatherData;

  // weather adalah array, kita ambil elemen pertama
  const weatherCondition = weather[0];

  return (
    <View style={styles.marginTop20}>
      {/* Menampilkan nama kota */}
      <Text style={styles.text}>The weather of {name}</Text>
      {/* Menampilkan suhu dalam derajat Celsius */}
      <Text style={[styles.temperature, styles.marginTop20]}>{temp} °C</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        {/* Menampilkan ikon cuaca */}
        <Image
          source={{
            uri: `https://openweathermap.org/img/w/${weatherCondition.icon}.png`,
          }}
          style={styles.weatherIcon}
        />
        {/* Menampilkan deskripsi singkat cuaca */}
        <Text style={[styles.text, styles.bold]}>{weatherCondition.main}</Text>
      </View>
      {/* Menampilkan deskripsi lengkap cuaca */}
      <Text style={styles.text}>{weatherCondition.description}</Text>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Visibility :</Text>
        {/* Menampilkan visibilitas dalam kilometer */}
        <Text style={[styles.text, styles.marginLeft15]}>{visibility} km</Text>
      </View>
      <View style={[styles.rowContainer, styles.marginTop20]}>
        <Text style={[styles.text, styles.bold]}>Wind Speed :</Text>
        {/* Menampilkan kecepatan angin dalam meter per detik */}
        <Text style={[styles.text, styles.marginLeft15]}>{speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20, // Memberi ruang antar elemen dengan margin atas
  },
  marginLeft15: {
    marginLeft: 15, // Memberi ruang antar elemen dengan margin kiri
  },
  text: {
    textAlign: "center", // Teks berada di tengah
    fontSize: 16, // Ukuran font teks
  },
  bold: {
    fontWeight: "700", // Teks tebal untuk penekanan
  },
  rowContainer: {
    flexDirection: "row", // Mengatur elemen dalam satu baris
    justifyContent: "center", // Elemen di tengah secara horizontal
    alignItems: "center", // Elemen di tengah secara vertikal
  },
  temperature: {
    fontWeight: "700", // Teks tebal untuk suhu
    fontSize: 80, // Ukuran font besar untuk suhu
    textAlign: "center", // Teks berada di tengah
  },
  weatherIcon: {
    width: 50, // Lebar ikon cuaca
    height: 50, // Tinggi ikon cuaca
  },
});

export default WeatherInfo;
