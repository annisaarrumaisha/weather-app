// Import berbagai modul dan komponen yang dibutuhkan
import React, { useState } from "react"; // useState untuk mengelola state dalam komponen
import axios from "axios"; // axios untuk melakukan permintaan HTTP
import { View, StyleSheet, ActivityIndicator, Text } from "react-native"; // Komponen React Native untuk tampilan UI
import WeatherSearch from "./src/components/weatherSearch"; // Komponen untuk input pencarian cuaca
import WeatherInfo from "./src/components/weatherInfo"; // Komponen untuk menampilkan informasi cuaca
import { BASE_URL, API_KEY } from "./src/constant"; // URL dan API key dari OpenWeather

const App = () => {
  // State untuk menyimpan data cuaca yang diterima dari API
  const [weatherData, setWeatherData] = useState(null);
  // State untuk menyimpan status aplikasi (loading, success, error)
  const [status, setStatus] = useState("");

  // Fungsi untuk mencari cuaca berdasarkan lokasi
  const searchWeather = (location) => {
    // Set status ke "loading" sebelum memulai permintaan API
    setStatus("loading");

    // Permintaan ke API OpenWeather untuk mendapatkan data cuaca
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data; // Data yang diterima dari API
        // Konversi visibilitas dari meter ke kilometer
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2); // Pembulatan visibilitas ke dua angka desimal
        // Konversi suhu dari Kelvin ke Celsius
        data.main.temp -= 273.15;
        data.main.temp = data.main.temp.toFixed(2); // Pembulatan suhu ke dua angka desimal
        // Simpan data cuaca ke state
        setWeatherData(data);
        // Set status ke "success" setelah berhasil mengambil data
        setStatus("success");
      })
      .catch((error) => {
        // Jika terjadi kesalahan, set status ke "error"
        setStatus("error");
        console.log(error); // Cetak error ke console untuk debugging
      });
  };

  // Fungsi untuk merender komponen berdasarkan status aplikasi
  const renderComponent = () => {
    switch (status) {
      case "loading":
        // Tampilkan indikator loading saat status "loading"
        return <ActivityIndicator size="large" />;
      case "success":
        // Tampilkan informasi cuaca saat status "success"
        return <WeatherInfo weatherData={weatherData} />;
      case "error":
        // Tampilkan pesan error saat status "error"
        return (
          <Text style={styles.errorText}>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        // Tidak merender apapun jika status tidak dikenal
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Komponen untuk pencarian cuaca */}
      <WeatherSearch searchWeather={searchWeather} />
      {/* Menggunakan fungsi renderComponent untuk menentukan apa yang akan ditampilkan */}
      <View style={styles.marginTop20}>{renderComponent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20, // Padding untuk seluruh container
  },
  marginTop20: {
    marginTop: 20, // Margin atas untuk memberi ruang antar elemen
  },
  errorText: {
    textAlign: "center", // Teks berada di tengah
    color: "red", // Warna teks merah untuk pesan error
    marginTop: 20, // Margin atas untuk pesan error
  },
});

export default App;
