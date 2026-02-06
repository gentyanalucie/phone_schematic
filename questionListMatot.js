const questionList = [
  {
    // Studi Kasus https://www.facebook.com/share/p/1ExHiZCDiG/
    question: `Dalam kasus ini, mengapa nilai VBAT tidak normal?
      https://www.facebook.com/share/p/1ExHiZCDiG/`,
    answer: [
      `Karena IC Power rusak`,
      `Karena jalur VBAT short`,
      `Karena baterai kosong total`,
      `Karena charger tidak berfungsi`,
    ],
    correctAnswer: `Karena jalur VBAT short`,
  },
  {
    question: `Bagaimana cara mengukur jalur VBAT?`,
    answer: [
      `Dengan mengukur nilai diode pada pin konektor baterai`,
      `Dengan mengukur hambatan pada jalur data`,
      `Dengan menghubungkan PSU ke IC Charging`,
      `Dengan mengganti baterai terlebih dahulu`,
    ],
    correctAnswer: `Dengan mengukur nilai diode pada pin konektor baterai`,
  },
  {
    question: `Jalur apakah AUX_IN3_BATID?
    https://www.facebook.com/share/p/1ExHiZCDiG/`,
    answer: [
      `Jalur pendeteksi identitas baterai`,
      `Jalur data untuk IC lampu`,
      `Jalur sinyal ke tombol power`,
      `Jalur komunikasi USB`,
    ],
    correctAnswer: `Jalur pendeteksi identitas baterai`,
  },
  {
    question: `Bagaimana cara mengukur jalur AUX_IN3_BATID?
    https://www.facebook.com/share/p/1ExHiZCDiG/s`,
    answer: [
      `Mengukur tegangan di jalur tersebut dengan multimeter`,
      `Mengukur arus charger pada jalur tersebut`,
      `Mengukur nilai dioda dan resistansi pada jalur tersebut`,
      `Mengganti IC Power terlebih dahulu`,
    ],
    correctAnswer: `Mengukur nilai dioda dan resistansi pada jalur tersebut`,
  },
  {
    question: `Apa indikasi jalur normal?`,
    answer: [
      `Jalur memiliki nilai diode dan tidak terhubung langsung ke ground`,
      `Jalur menunjukkan hambatan nol ohm`,
      `Jalur panas saat diukur dengan PSU`,
      `Jalur tidak menunjukkan arus sama sekali`,
    ],
    correctAnswer: `Jalur memiliki nilai diode dan tidak terhubung langsung ke ground`,
  },
  {
    question: `Bagaimana cara mengetahui jalur short atau tidak?`,
    answer: [
      `Dengan mengukur hambatan menggunakan mode dioda pada multimeter`,
      `Dengan mengukur arus charger saat HP dalam kondisi mati`,
      `Dengan mengukur tegangan di IC lampu`,
      `Dengan membongkar semua komponen di jalur tersebut`,
    ],
    correctAnswer: `Dengan mengukur hambatan menggunakan mode dioda pada multimeter`,
  },
  {
    question: `Bagaimana cara menemukan komponen yang short?`,
    answer: [
      `Dengan menyuntikkan tegangan menggunakan PSU dan meraba komponen yang panas`,
      `Dengan mengganti semua komponen di jalur tersebut`,
      `Dengan mengukur tegangan baterai saja`,
      `Dengan langsung mengganti IC Power`,
    ],
    correctAnswer: `Dengan menyuntikkan tegangan menggunakan PSU dan meraba komponen yang panas`,
  },
  //   Soal Pengukuran
  {
    question: `Apa fungsi dari supply tegangan eksternal saat menghidupkan mesin handphone tanpa baterai?`,
    answer: [
      `Mengganti IC charger`,
      `Memberikan tegangan langsung ke mesin`,
      `Menghidupkan layar`,
      `Mengisi baterai`,
    ],
    correctAnswer: `Memberikan tegangan langsung ke mesin`,
  },
  {
    question: `Tegangan yang masuk akan mengalir di jalur apa setelah power supply terhubung?`,
    answer: [`Jalur VPH_PWR`, `Jalur VBAT`, `Jalur DATA`, `Jalur GND`],
    correctAnswer: `Jalur VBAT`,
  },
  {
    question: `Bagaimana cara memastikan bahwa tegangan telah hadir di jalur VBAT?`,
    answer: [
      `Dengan mengukur arus`,
      `Dengan mengukur tegangan pada titik jalur VBAT`,
      `Dengan melihat tampilan layar`,
      `Dengan mengukur tegangan baterai`,
    ],
    correctAnswer: `Dengan mengukur tegangan pada titik jalur VBAT`,
  },
  {
    question: `Jika tegangan VBAT tidak hadir, apa yang perlu dicek?`,
    answer: [
      `Jalur VBAT dari konektor ke IC Power/Charger`,
      `Jalur data USB`,
      `Kapasitas baterai`,
      `Nilai resistansi IC`,
    ],
    correctAnswer: `Jalur VBAT dari konektor ke IC Power/Charger`,
  },
  {
    question: `Mode pengukuran apa yang digunakan untuk memastikan jalur terhubung atau tidak?`,
    answer: [
      `Mode ampere`,
      `Mode diode`,
      `Mode tegangan DC`,
      `Mode tegangan AC`,
    ],
    correctAnswer: `Mode diode`,
  },
  {
    question: `Apa penyebab umum tegangan VBAT drop menjadi 0V?`,
    answer: [
      `Baterai bocor`,
      `IC charger rusak`,
      `Adanya short circuit`,
      `Konektor baterai kotor`,
    ],
    correctAnswer: `Adanya short circuit`,
  },
  {
    question: `Bagaimana cara menentukan sebuah jalur dalam kondisi short?`,
    answer: [
      `Mengukur tegangan tinggi`,
      `Mengukur resistansi rendah (dekat 0 Ohm)`,
      `Mengukur dengan power supply tanpa konektor`,
      `Mengukur suhu jalur`,
    ],
    correctAnswer: `Mengukur resistansi rendah (dekat 0 Ohm)`,
  },
  {
    question: `Bagaimana memastikan bahwa sebuah kapasitor yang diukur itu rusak?`,
    answer: [
      `Kapasitor memiliki nilai OL`,
      `Kapasitor menunjukkan short pada pengukuran diode`,
      `Kapasitor tidak bisa dilepas`,
      `Kapasitor menghasilkan tegangan tinggi`,
    ],
    correctAnswer: `Kapasitor menunjukkan short pada pengukuran diode`,
  },
  {
    question: `Bagaimana menentukan kondisi rusak atau tidaknya sebuah dioda?`,
    answer: [
      `Dioda harus dilepas untuk diukur pada mode diode`,
      `Dioda selalu menunjukkan 0.000`,
      `Dioda tidak memiliki pengaruh pada pengukuran`,
      `Dioda bisa diuji dalam mode ampere`,
    ],
    correctAnswer: `Dioda harus dilepas untuk diukur pada mode diode`,
  },
  {
    question: `Apa yang terjadi ketika VBAT telah hadir dan tegangan seharusnya diteruskan ke IC charger?`,
    answer: [
      `Tegangan berubah menjadi VPH_PWR`,
      `Tegangan akan hilang`,
      `Tegangan drop menjadi 0V`,
      `Tegangan berubah menjadi tegangan layar`,
    ],
    correctAnswer: `Tegangan berubah menjadi VPH_PWR`,
  },
  {
    question: `Bagaimana memastikan bahwa tegangan telah hadir di jalur VPH_PWR?`,
    answer: [
      `Mengukur dengan mode ampere`,
      `Mengukur dengan mode diode`,
      `Mengukur tegangan pada jalur VPH_PWR`,
      `Mengukur resistansi jalur`,
    ],
    correctAnswer: `Mengukur tegangan pada jalur VPH_PWR`,
  },
  {
    question: `Mengapa penting menentukan nilai diode pada jalur sebelum menyimpulkan komponen rusak?`,
    answer: [
      `Karena bisa memastikan jalur terhubung dengan baik`,
      `Karena nilai diode menentukan kapasitas arus`,
      `Karena pengukuran diode menentukan frekuensi kerja IC`,
      `Karena pengukuran diode menentukan software yang rusak`,
    ],
    correctAnswer: `Karena bisa memastikan jalur terhubung dengan baik`,
  },
  {
    question: `Apa yang seharusnya terjadi jika jalur terhubung dengan IC?`,
    answer: [
      `Nilai diode muncul sesuai standar`,
      `Tegangan harus 0V`,
      `Arus harus 0A`,
      `Nilai OL selalu terbaca`,
    ],
    correctAnswer: `Nilai diode muncul sesuai standar`,
  },
  {
    question: `Apa artinya jika jalur terbaca OL (Open Loop)?`,
    answer: [
      `Jalur terhubung normal`,
      `Jalur putus atau tidak terhubung`,
      `Tegangan jalur terlalu tinggi`,
      `IC terbakar`,
    ],
    correctAnswer: `Jalur putus atau tidak terhubung`,
  },
  {
    question: `Apa penyebab nilai jalur terbaca 0.000 pada mode diode?`,
    answer: [
      `Jalur dalam kondisi short`,
      `Jalur dalam kondisi normal`,
      `Jalur memiliki hambatan tinggi`,
      `Tegangan jalur drop`,
    ],
    correctAnswer: `Jalur dalam kondisi short`,
  },
  {
    question: `Mengapa hasil pengukuran bisa berbeda dengan data Borneo schematic?`,
    answer: [
      `Karena bisa terjadi kerusakan komponen`,
      `Karena mode pengukuran yang salah`,
      `Karena baterai habis`,
      `Karena skema tidak perlu diikuti`,
    ],
    correctAnswer: `Karena bisa terjadi kerusakan komponen`,
  },
  {
    question: `Apa yang harus dilakukan jika nilai jalur tidak sesuai dengan skema?`,
    answer: [
      `Lanjutkan perbaikan seperti biasa`,
      `Periksa jalur dan komponen yang terkait`,
      `Langsung ganti IC power`,
      `Tinggalkan jalur tersebut`,
    ],
    correctAnswer: `Periksa jalur dan komponen yang terkait`,
  },
  {
    question: `Bagaimana langkah awal memeriksa jalur supply tanpa baterai?`,
    answer: [
      `Menggunakan power supply external`,
      `Menggunakan baterai cadangan`,
      `Menggunakan charger langsung`,
      `Menggunakan voltmeter mode AC`,
    ],
    correctAnswer: `Menggunakan power supply external`,
  },
  {
    question: `Apa indikasi jalur dalam keadaan baik pada mode diode?`,
    answer: [
      `Nilai sekitar 0.4 - 0.7 V`,
      `Nilai 0.000`,
      `Nilai OL`,
      `Nilai di atas 1.5 V`,
    ],
    correctAnswer: `Nilai sekitar 0.4 - 0.7 V`,
  },
  {
    question: `Jika tegangan drop menjadi 0V, apa yang harus dicurigai pertama kali?`,
    answer: [
      `Short circuit pada jalur`,
      `Tegangan baterai rendah`,
      `IC charger rusak`,
      `Software error`,
    ],
    correctAnswer: `Short circuit pada jalur`,
  },
  {
    question: `Bagaimana memeriksa jalur yang dicurigai short dengan multimeter?`,
    answer: [
      `Mengukur dengan mode diode dan membaca 0.000`,
      `Mengukur dengan mode voltmeter dan membaca 12V`,
      `Mengukur dengan mode ampere dan membaca arus tinggi`,
      `Mengukur dengan mode AC dan membaca sinyal`,
    ],
    correctAnswer: `Mengukur dengan mode diode dan membaca 0.000`,
  },
  {
    question: `Apa artinya jika pengukuran diode menunjukkan OL?`,
    answer: [
      `Jalur terhubung dengan normal`,
      `Jalur terputus`,
      `Jalur sedang digunakan oleh IC`,
      `Tegangan terlalu tinggi`,
    ],
    correctAnswer: `Jalur terputus`,
  },
  {
    question: `Komponen apa yang sering menjadi penyebab jalur short?`,
    answer: [`Kapasitor`, `Resistor`, `Speaker`, `Microphone`],
    correctAnswer: `Kapasitor`,
  },
  {
    question: `Bagaimana memeriksa jalur yang mengarah ke VPH_PWR?`,
    answer: [
      `Mengukur tegangan dan nilai diode`,
      `Mengukur arus dan tegangan AC`,
      `Mengukur dengan mode continuity`,
      `Mengukur frekuensi kerja IC`,
    ],
    correctAnswer: `Mengukur tegangan dan nilai diode`,
  },
  {
    question: `Mengapa jalur harus diukur dalam kondisi tanpa beban IC?`,
    answer: [
      `Untuk mendapatkan hasil pengukuran murni jalur`,
      `Untuk menghindari kerusakan multimeter`,
      `Untuk menghindari pengisian arus yang salah`,
      `Untuk memastikan tegangan AC stabil`,
    ],
    correctAnswer: `Untuk mendapatkan hasil pengukuran murni jalur`,
  },
  {
    question: `Mengapa perlu memastikan jalur VPH_PWR terhubung?`,
    answer: [
      `Karena jalur ini menghidupkan banyak komponen penting`,
      `Karena jalur ini hanya mengisi baterai`,
      `Karena jalur ini hanya mengalirkan arus ke speaker`,
      `Karena jalur ini hanya menghidupkan kamera`,
    ],
    correctAnswer: `Karena jalur ini menghidupkan banyak komponen penting`,
  },
  {
    question: `Bagaimana cara menentukan jalur telah putus atau tidak?`,
    answer: [
      `Mengukur dengan mode diode dan terbaca OL`,
      `Mengukur dengan voltmeter dan membaca 0V`,
      `Mengukur dengan mode ampere dan membaca arus nol`,
      `Mengukur dengan osiloskop dan membaca noise`,
    ],
    correctAnswer: `Mengukur dengan mode diode dan terbaca OL`,
  },
  {
    question: `Apa tindakan jika hasil pengukuran tidak sesuai dengan skema?`,
    answer: [
      `Lakukan pengecekan jalur dan penggantian komponen`,
      `Abaikan dan lanjutkan perbaikan`,
      `Ganti IC power secara langsung`,
      `Ganti baterai`,
    ],
    correctAnswer: `Lakukan pengecekan jalur dan penggantian komponen`,
  },
  //   Soal Skematik Redmi 5A
  {
    question: `Apa fungsi utama dari B2B Connector J1901 pada REDMI 5A?`,
    answer: [
      `Menghubungkan tegangan dari board bawah ke mesin`,
      `Menghubungkan baterai langsung ke IC charger`,
      `Menghubungkan sinyal data ke RAM`,
      `Menghubungkan ground ke semua jalur`,
    ],
    correctAnswer: `Menghubungkan tegangan dari board bawah ke mesin`,
  },
  {
    question: `Tegangan berapa yang masuk melalui B2B Connector J1901 REDMI 5A?`,
    answer: [`3.8V`, `5V`, `9V`, `12V`],
    correctAnswer: `5V`,
  },
  {
    question: `Apa fungsi utama Dioda TVS dalam rangkaian ini?`,
    answer: [
      `Memproteksi jalur dari tegangan berlebih dan ESD`,
      `Membatasi arus masuk ke baterai`,
      `Mengubah tegangan DC menjadi AC`,
      `Menstabilkan arus pada IC charger`,
    ],
    correctAnswer: `Memproteksi jalur dari tegangan berlebih dan ESD`,
  },
  {
    question: `Komponen apa yang berfungsi untuk mempermudah pengukuran di jalur?`,
    answer: [`Kapasitor`, `TVS`, `Test Point`, `OVP`],
    correctAnswer: `Test Point`,
  },
  {
    question: `Apa nama jalur pada REDMI 5A yang membawa tegangan 5V dari board bawah melalui B2B Connector?`,
    answer: [`VBUS_USB_IN_1`, `VBAT`, `VPH_PWR`, `VPHL_PWR`],
    correctAnswer: `VBUS_USB_IN_1`,
  },
  {
    question: `Apa fungsi dari kapasitor pada jalur VBUS_USB_IN_1 REDMI 5A?`,
    answer: [
      `Membatasi arus berlebih`,
      `Memfilter ripple tegangan`,
      `Mengubah tegangan menjadi arus DC`,
      `Menghubungkan jalur ke ground`,
    ],
    correctAnswer: `Memfilter ripple tegangan`,
  },
  {
    question: `Apa komponen yang berfungsi sebagai pelindung tegangan berlebih pada jalur VBUS_USB_IN_1 REDMI 5A?`,
    answer: [`TVS`, `OVP`, `Test Point`, `Kapasitor`],
    correctAnswer: `OVP`,
  },
  {
    question: `Apa kepanjangan dari OVP pada rangkaian?`,
    answer: [
      `Over Voltage Protection`,
      `Overload Voltage Prevention`,
      `Output Voltage Protection`,
      `Over Voltage Power`,
    ],
    correctAnswer: `Over Voltage Protection`,
  },
  {
    question: `Tegangan berapa yang masuk melalui Connector Battery J0501? REDMI 5A`,
    answer: [`5V`, `4.2V`, `3.8V`, `12V`],
    correctAnswer: `3.8V`,
  },
  {
    question: `Apa nama jalur utama yang berasal dari Connector Battery J0501 REDMI 5A?`,
    answer: [`VBAT`, `VPH_PWR`, `VBUS_USB_IN_1`, `CHG_OUT`],
    correctAnswer: `VBAT`,
  },
  {
    question: `Apa fungsi TVS yang terhubung pada jalur VBAT?`,
    answer: [
      `Memproteksi jalur dari lonjakan tegangan dan ESD`,
      `Menyaring tegangan DC menjadi AC`,
      `Menghubungkan arus ke ground secara permanen`,
      `Menguatkan sinyal charger`,
    ],
    correctAnswer: `Memproteksi jalur dari lonjakan tegangan dan ESD`,
  },
  {
    question: `Mengapa pada jalur VBAT REDMI 5A terdapat lebih dari satu TVS?`,
    answer: [
      `Memberikan proteksi berlapis terhadap ESD dan tegangan lonjakan`,
      `Mempercepat aliran arus ke IC`,
      `Menguatkan tegangan baterai`,
      `Memutus arus jika terjadi korsleting`,
    ],
    correctAnswer: `Memberikan proteksi berlapis terhadap ESD dan tegangan lonjakan`,
  },
  {
    question: `Apa fungsi Test Point pada jalur VBAT?`,
    answer: [
      `Untuk memudahkan pengukuran tegangan di jalur tersebut`,
      `Untuk memotong jalur saat terjadi korsleting`,
      `Sebagai penghubung langsung ke ground`,
      `Untuk menaikkan tegangan VBAT`,
    ],
    correctAnswer: `Untuk memudahkan pengukuran tegangan di jalur tersebut`,
  },
  {
    question: `Apa fungsi kapasitor pada jalur VBAT?`,
    answer: [
      `Memfilter ripple dan menstabilkan tegangan VBAT`,
      `Mengurangi kapasitas arus`,
      `Menyaring sinyal digital menjadi analog`,
      `Menghubungkan jalur VBAT ke ground`,
    ],
    correctAnswer: `Memfilter ripple dan menstabilkan tegangan VBAT`,
  },
  {
    question: `Apa yang akan terjadi jika TVS pada jalur VBUS_USB_IN_1 REDMI 5A rusak?`,
    answer: [
      `Jalur menjadi rentan terhadap lonjakan tegangan`,
      `Tegangan akan turun menjadi 0V`,
      `Arus akan terputus total`,
      `IC charger akan langsung rusak`,
    ],
    correctAnswer: `Jalur menjadi rentan terhadap lonjakan tegangan`,
  },
  {
    question: `Apa yang akan terjadi jika OVP dilepas pada kondisi normal?`,
    answer: [
      `Rangkaian kehilangan proteksi terhadap tegangan berlebih`,
      `Tegangan akan langsung turun menjadi 0V`,
      `Baterai tidak dapat mengisi daya`,
      `Kapasitor akan langsung rusak`,
    ],
    correctAnswer: `Rangkaian kehilangan proteksi terhadap tegangan berlebih`,
  },
  {
    question: `Kenapa OVP pada gambar boleh dijumper pada kondisi darurat?`,
    answer: [
      `Agar arus tetap mengalir meskipun proteksi rusak`,
      `Untuk mempercepat pengisian baterai`,
      `Untuk memotong jalur charger`,
      `Agar sinyal data lebih stabil`,
    ],
    correctAnswer: `Agar arus tetap mengalir meskipun proteksi rusak`,
  },
  {
    question: `Bagaimana cara mengetahui jalur VBUS_USB_IN_1 mengalami masalah?`,
    answer: [
      `Mengukur aktif pasif di Test Point Tp05`,
      `Mengukur kapasitor di jalur VBAT`,
      `Memeriksa IC charger langsung`,
      `Mengganti konektor baterai`,
    ],
    correctAnswer: `Mengukur aktif pasif di Test Point Tp05`,
  },
  {
    question: `Apa perbedaan tegangan antara jalur VBUS_USB_IN_1 dan VBAT REDMI 5A?`,
    answer: [
      `VBUS_USB_IN_1 sekitar 5V, VBAT sekitar 3.8V`,
      `VBUS_USB_IN_1 sekitar 3.8V, VBAT sekitar 5V`,
      `Keduanya sama 5V`,
      `Keduanya sama 3.8V`,
    ],
    correctAnswer: `VBUS_USB_IN_1 sekitar 5V, VBAT sekitar 3.8V`,
  },
  {
    question: `Apa akibat jika kapasitor pada jalur VBUS_USB_IN_1 REDMI 5A rusak?`,
    answer: [
      `Ripple tegangan tidak tersaring dengan baik`,
      `Tegangan akan menjadi 0V`,
      `IC charger tidak dapat bekerja`,
      `TVS akan ikut rusak`,
    ],
    correctAnswer: `Ripple tegangan tidak tersaring dengan baik`,
  },
  {
    question: `Apa peran TVS pada jalur VBAT REDMI 5A dalam kondisi normal?`,
    answer: [
      `Mengamankan jalur dari lonjakan tegangan dan ESD`,
      `Memotong arus dari baterai`,
      `Menghubungkan baterai ke ground`,
      `Meningkatkan arus ke IC charger`,
    ],
    correctAnswer: `Mengamankan jalur dari lonjakan tegangan dan ESD`,
  },
  {
    question: `Bagaimana mengetahui jalur VBAT masih terhubung ke IC Charger?`,
    answer: [
      `Dengan mengukur nilai dioda jalur pada Tp36`,
      `Dengan mengukur arus di B2B Connector`,
      `Dengan mengukur IC charger`,
      `Dengan mengukur kapasitor di jalur VBUS_USB_IN_1`,
    ],
    correctAnswer: `Dengan mengukur nilai dioda jalur pada Tp36`,
  },
  {
    question: `Mengapa Test Point dipasang di kedua jalur (VBUS_USB_IN_1 dan VBAT) pada REDMI 5A?`,
    answer: [
      `Untuk mempermudah proses pengukuran dan troubleshooting`,
      `Untuk memutuskan jalur secara cepat`,
      `Sebagai pengganti dioda`,
      `Untuk mempercepat pengisian daya baterai`,
    ],
    correctAnswer: `Untuk mempermudah proses pengukuran dan troubleshooting`,
  },
  {
    question: `Jika TVS pada jalur VBAT konslet, apa dampaknya?`,
    answer: [
      `Tegangan dari baterai akan turun atau hilang`,
      `Tegangan dari charger menjadi tidak stabil`,
      `Arus menjadi berlebihan di jalur USB`,
      `IC charger akan langsung rusak`,
    ],
    correctAnswer: `Tegangan dari baterai akan turun atau hilang`,
  },
  {
    question: `Apa fungsi utama IC OVP (U0503) pada rangkaian REDMI 5A?`,
    answer: [
      `Proteksi tegangan berlebih`,
      `Mengatur arus switching`,
      `Mengisi baterai langsung`,
      `Menghubungkan jalur VPH_PWR`,
    ],
    correctAnswer: `Proteksi tegangan berlebih`,
  },
  {
    question: `Apa yang boleh dilakukan pada IC OVP dalam kondisi darurat?`,
    answer: [
      `Dijumper`,
      `Dilepas`,
      `Dihubungkan ke ground`,
      `Diganti kapasitor`,
    ],
    correctAnswer: `Dijumper`,
  },
  {
    question: `Jalur apa yang masuk ke input IC OVP pada REDMI 5A?`,
    answer: [`VBUS_USB_IN`, `VBAT`, `VPH_PWR`, `CHG_OUT`],
    correctAnswer: `VBUS_USB_IN`,
  },
  {
    question: `Apa fungsi kapasitor seperti C0517, C0510, C0511 pada jalur VBUS_USB_IN pada REDMI 5A?`,
    answer: [
      `Menyaring ripple tegangan`,
      `Mengurangi tegangan DC`,
      `Menguatkan arus charging`,
      `Memotong jalur ke ground`,
    ],
    correctAnswer: `Menyaring ripple tegangan`,
  },
  {
    question: `Apa yang terjadi pada VBUS_USB_IN setelah melewati IC charger pada REDMI 5A?`,
    answer: [
      `Diswitching menjadi sinyal pulsa`,
      `Langsung mengisi baterai`,
      `Dipotong tegangannya menjadi 0V`,
      `Dihubungkan ke ground`,
    ],
    correctAnswer: `Diswitching menjadi sinyal pulsa`,
  },
  {
    question: `Apa nama sistem penurunan tegangan dalam IC charger?`,
    answer: [
      `Buck Controller`,
      `Boost Converter`,
      `Linear Regulator`,
      `Flyback Controller`,
    ],
    correctAnswer: `Buck Controller`,
  },
  {
    question: `Apa komponen yang membantu meneruskan arus dari sinyal switching?`,
    answer: [`Induktor L0501`, `TVS`, `Resistor R0506`, `Kapasitor C0513`],
    correctAnswer: `Induktor L0501`,
  },
  {
    question: `Apa nama jalur keluaran switching dari IC charger pada REDMI 5A?`,
    answer: [`VPH_PWR`, `CHG_OUT`, `VBAT`, `SYS`],
    correctAnswer: `VPH_PWR`,
  },
  {
    question: `Apa fungsi utama jalur VPH_PWR pada REDMI 5A?`,
    answer: [
      `Menjadi sumber tegangan untuk IC POWER`,
      `Langsung mengisi baterai`,
      `Menghubungkan jalur USB`,
      `Memotong jalur tegangan VBAT`,
    ],
    correctAnswer: `Menjadi sumber tegangan untuk IC POWER`,
  },
  {
    question: `Apa fungsi TVS0506 pada jalur VPH_PWR pada REDMI 5A?`,
    answer: [
      `Proteksi terhadap lonjakan tegangan dan ESD`,
      `Mengatur arus switching`,
      `Menguatkan tegangan output`,
      `Menghubungkan langsung ke baterai`,
    ],
    correctAnswer: `Proteksi terhadap lonjakan tegangan dan ESD`,
  },
  {
    question: `Apa fungsi kapasitor seperti C0801 dan C0802 pada jalur VPH_PWR REDMI 5A?`,
    answer: [
      `Menyaring ripple tegangan`,
      `Menguatkan tegangan VBAT`,
      `Mengatur arus IC charger`,
      `Menghubungkan ke ground`,
    ],
    correctAnswer: `Menyaring ripple tegangan`,
  },
  {
    question: `Apa nama jalur baterai yang masuk ke IC Fuel Gauge pada REDMI 5A?`,
    answer: [`VBAT`, `VPH_PWR`, `CHG_OUT`, `VBUS_USB_IN`],
    correctAnswer: `VBAT`,
  },
  {
    question: `Apa fungsi IC Fuel Gauge (U0502) pada REDMI 5A?`,
    answer: [
      `Memantau level tegangan, arus, dan suhu baterai`,
      `Mengatur switching tegangan`,
      `Mengisi baterai secara langsung`,
      `Memotong arus jika terjadi korsleting`,
    ],
    correctAnswer: `Memantau level tegangan, arus, dan suhu baterai`,
  },
  {
    question: `Apa nama jalur VBAT setelah melewati resistor shunt R0506 pada REDMI 5A?`,
    answer: [`CHG_OUT`, `VPH_PWR`, `SYS`, `VBUS_USB_IN`],
    correctAnswer: `CHG_OUT`,
  },
  {
    question: `Apa fungsi resistor shunt R0506 pada jalur charging pada REDMI 5A?`,
    answer: [
      `Monitoring arus charging`,
      `Menyaring ripple arus`,
      `Mengatur switching tegangan`,
      `Menghubungkan jalur ke ground`,
    ],
    correctAnswer: `Monitoring arus charging`,
  },
  {
    question: `Apa komponen yang digunakan untuk mengukur tegangan baterai pada REDMI 5A?`,
    answer: [`Test Point Tp36`, `Kapasitor C0509`, `TVS0506`, `Induktor L0501`],
    correctAnswer: `Test Point Tp36`,
  },
  {
    question: `Apa fungsi jalur SYS pada IC charger REDMI 5A?`,
    answer: [
      `Menghubungkan hasil switching ke VPH_PWR`,
      `Mengatur tegangan dari USB`,
      `Menghubungkan langsung ke ground`,
      `Menyaring ripple dari jalur CHG_OUT`,
    ],
    correctAnswer: `Menghubungkan hasil switching ke VPH_PWR`,
  },
  {
    question: `Mengapa arus switching memerlukan induktor?`,
    answer: [
      `Agar arus tetap mengalir saat pulsa off`,
      `Untuk memotong jalur tegangan DC`,
      `Menghubungkan tegangan USB ke baterai langsung`,
      `Mengurangi kapasitas IC charger`,
    ],
    correctAnswer: `Agar arus tetap mengalir saat pulsa off`,
  },
  {
    question: `Apa yang terjadi jika OVP rusak atau terputus?`,
    answer: [
      `Proteksi tegangan berlebih tidak berfungsi`,
      `IC charger langsung rusak`,
      `Jalur VPH_PWR menjadi 0V`,
      `Induktor menjadi panas`,
    ],
    correctAnswer: `Proteksi tegangan berlebih tidak berfungsi`,
  },
  {
    question: `Apa fungsi switching pada jalur VBUS_USB_IN?`,
    answer: [
      `Mengubah tegangan DC menjadi pulsa untuk diturunkan`,
      `Menghubungkan USB ke baterai secara langsung`,
      `Mengurangi arus charging ke IC Fuel Gauge`,
      `Memotong jalur SYS pada IC charger`,
    ],
    correctAnswer: `Mengubah tegangan DC menjadi pulsa untuk diturunkan`,
  },
  {
    question: `Bagaimana IC charger mengatur besar tegangan output?`,
    answer: [
      `Dengan mengatur kecepatan switching`,
      `Dengan memotong tegangan dari USB`,
      `Dengan menambah kapasitor di jalur input`,
      `Dengan memperbesar arus dari baterai`,
    ],
    correctAnswer: `Dengan mengatur kecepatan switching`,
  },
  {
    question: `Apa nama proses penurunan tegangan pada IC charger?`,
    answer: [`Buck`, `Boost`, `Flyback`, `Linear`],
    correctAnswer: `Buck`,
  },
  {
    question: `Apa yang akan terjadi jika induktor L0501 rusak atau putus pada REDMI 5A?`,
    answer: [
      `Arus switching tidak dapat diteruskan ke VPH_PWR`,
      `Tegangan USB akan langsung masuk ke baterai`,
      `IC Fuel Gauge tidak bekerja`,
      `Jalur CHG_OUT menjadi konslet`,
    ],
    correctAnswer: `Arus switching tidak dapat diteruskan ke VPH_PWR`,
  },
  {
    question: `Mengapa IC charger menggunakan sistem switching (buck converter) bukan linear regulator (LDO)?`,
    answer: [
      `Untuk efisiensi energi yang lebih tinggi`,
      `Untuk memotong jalur tegangan USB`,
      `Untuk memperbesar kapasitor output`,
      `Untuk menghubungkan baterai ke ground`,
    ],
    correctAnswer: `Untuk efisiensi energi yang lebih tinggi`,
  },
  {
    question: `Apa fungsi utama C0509 pada jalur CHG_OUT Redmi 5A?`,
    answer: [
      `Menyaring ripple arus pada jalur charging`,
      `Mengatur arus switching`,
      `Memotong tegangan baterai`,
      `Menghubungkan ke ground langsung`,
    ],
    correctAnswer: `Menyaring ripple arus pada jalur charging`,
  },
  {
    question: `Apa fungsi jalur BTST (BootStrap) pada IC charger?`,
    answer: [
      `Sebagai jalur penaik tegangan pada gate MOSFET internal`,
      `Sebagai jalur pengisian daya ke baterai`,
      `Sebagai penghubung langsung ke fuel gauge`,
      `Sebagai jalur proteksi terhadap ESD`,
    ],
    correctAnswer: `Sebagai jalur penaik tegangan pada gate MOSFET internal`,
  },
  //
  {
    question:
      "Apa nama sistem penurun tegangan yang digunakan dalam rangkaian tersebut?",
    answer: [
      "Boost converter",
      "Buck controller",
      "LDO regulator",
      "Switching inverter",
    ],
    correctAnswer: "Buck controller",
  },
  {
    question:
      "Apa komponen yang berfungsi meneruskan arus switching pada REDMI 5A?",
    answer: ["IC PM 8937", "L0501", "C0802", "RO506"],
    correctAnswer: "L0501",
  },
  {
    question:
      "Setelah melalui L0501, komponen apa yang digunakan untuk memperhalus arus pada REDMI 5A?",
    answer: ["TVS0506", "C0513", "C0505", "RO506"],
    correctAnswer: "C0505",
  },
  {
    question:
      "Apa nama jalur yang menjadi hasil dari proses switching dan filtering pada REDMI 5A?",
    answer: ["SYS", "VBAT", "VPH_PWR", "CHG_OUT"],
    correctAnswer: "VPH_PWR",
  },
  {
    question: "Apa fungsi jalur VPH_PWR pada handphone REDMI 5A?",
    answer: [
      "Sebagai jalur input baterai",
      "Sebagai jalur charging saat USB terpasang",
      "Sebagai jalur komunikasi antar IC",
      "Sebagai jalur pengaturan tegangan USB",
    ],
    correctAnswer: "Sebagai jalur charging saat USB terpasang",
  },
  {
    question: "IC apa yang disuplai langsung oleh jalur VPH_PWR pada REDMI 5A?",
    answer: [
      "IC USB Charger",
      "IC Fuel Gauge",
      "IC PM 8937",
      "IC Charging Monitor",
    ],
    correctAnswer: "IC PM 8937",
  },
  {
    question: "Apa peran IC PM 8937 dalam rangkaian ini?",
    answer: [
      "Mengatur proses charging USB",
      "Mengelola distribusi daya pada sistem",
      "Mengatur switching tegangan input",
      "Mengawasi arus charging dari USB",
    ],
    correctAnswer: "Mengelola distribusi daya pada sistem",
  },
  {
    question: "Apa tanda IC Power PM 8937 bekerja normal pada Redmi 5A?",
    answer: [
      "Mengeluarkan tegangan 5V pada jalur VPH_PWR",
      "Mengeluarkan tegangan 1.8V pada pin KYPD_PWR_N",
      "Mengeluarkan tegangan 4.2V pada jalur SYS",
      "Mengeluarkan tegangan 3.7V pada pin BAT",
    ],
    correctAnswer: "Mengeluarkan tegangan 1.8V pada pin KYPD_PWR_N",
  },
  {
    question:
      "Berapa tegangan yang keluar dari pin KYPD_PWR_N saat IC Power bekerja normal?",
    answer: ["4.2V", "5V", "1.8V", "3.7V"],
    correctAnswer: "1.8V",
  },
  {
    question: "Apa fungsi jalur SYS pada IC Charger?",
    answer: [
      "Sebagai input charging",
      "Sebagai jalur distribusi daya ke sistem",
      "Sebagai jalur komunikasi dengan USB",
      "Sebagai jalur feedback charging",
    ],
    correctAnswer: "Sebagai jalur distribusi daya ke sistem",
  },
  {
    question:
      "Apa nama resistor yang digunakan untuk monitoring arus charging pada REDMI 5A?",
    answer: ["C0505", "TVS0506", "RO506", "L0501"],
    correctAnswer: "RO506",
  },
  {
    question: "Apa fungsi resistor RO506 pada REDMI 5A?",
    answer: [
      "Mengurangi tegangan output",
      "Memantau arus charging",
      "Memperhalus tegangan output",
      "Menghubungkan USB ke baterai",
    ],
    correctAnswer: "Memantau arus charging",
  },
  {
    question: "Apa fungsi komponen TVS0506 pada REDMI 5A?",
    answer: [
      "Melindungi dari lonjakan tegangan",
      "Mengatur switching tegangan",
      "Menyaring arus output",
      "Mengontrol IC charging",
    ],
    correctAnswer: "Melindungi dari lonjakan tegangan",
  },
  {
    question: "Apa fungsi jalur VBUS pada REDMI 5A?",
    answer: [
      "Sebagai jalur input tegangan USB",
      "Sebagai jalur kontrol IC Power",
      "Sebagai jalur feedback IC Charger",
      "Sebagai jalur output ke sistem",
    ],
    correctAnswer: "Sebagai jalur input tegangan USB",
  },
  {
    question:
      "Apa jenis sinyal yang terbentuk setelah tegangan USB di switching pada REDMI 5A?",
    answer: ["DC Murni", "Pulsa On/Off", "AC 50Hz", "Sinus Murni"],
    correctAnswer: "Pulsa On/Off",
  },
  {
    question:
      "Apa komponen utama yang bertugas melakukan switching tegangan dari USB pada REDMI 5A?",
    answer: [
      "IC Fuel Gauge",
      "IC Power PM 8937",
      "IC USB Charger",
      "IC Power Charger",
    ],
    correctAnswer: "IC Power Charger",
  },
];
