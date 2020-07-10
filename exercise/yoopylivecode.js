//YOOPY CHRISTIAN

// Problem 
//Pada tugas ini kamu diminta untuk membuat sebuah program yang dapat menentukan kondisi dari tanggal, bulan dan tahun yang diinput. Jika tanggal tidak sesuai makan output akan memberitahu kenapa tanggal yang diinput tidak sesuai, jika tanggal sesuai makan selanjutnya check kondisi untuk bulan. Jika bulan tidak sesuai maka akan menghasilkan output kenapa bulan tersebut tidak sesuai, selanjutnya jika bulan sesuai akan melakukan check kondisi pada tahun, apakah tahun kabisat atau bukan. Jika kabisat makan akan menampilkan tanggal, bulan dan tahun yang sudah diinput jika bukan akan menampilkan bahwa tahun tersebut bukanlah tahun kabisat.



/* INPUT */Livecode(29, 2, 2021)
/* INPUT */Livecode(30, 2, 2021)
/* INPUT */Livecode(30, 2, 2020)
/* INPUT */Livecode(31, 4, 2020)
/* INPUT */Livecode(21, 7, 2020)

function Livecode(hari, bulan, tahun) {

    var namaBulan;

    switch (bulan) {

        case 1: namaBulan = "Januari"
            if (hari >= 1 && hari <= 31) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 31) {
                console.log(`${namaBulan}hanya ada tanggal 1 sampai 31`)
            }
            break;
        case 2: namaBulan = "Februari"
            if (tahun % 4 == 0) {
                if (hari >= 1 && hari <= 29) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`${namaBulan} Tahun ${tahun} hanya ada tanggal 1 sampai 29`)
                }
            }
            if (tahun % 4 != 0) {
                if (hari >= 1 && hari <= 28) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                }
                if (hari == 29){
                    console.log(`Tahun kabisat tidak terjadi pada ${tahun}`)
                    } else {(hari > 29) 
                        console.log(`${namaBulan} Tahun ${tahun} hanya ada tanggal 1 sampai 28`)
                }
            }
            break;
        case 3: namaBulan = "Maret"
            if (hari >= 1 && hari <= 31) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            break;
        case 4: namaBulan = "April"
            if (hari >= 1 && hari <= 30) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 30) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 30`)
            }
            break;
        case 5: namaBulan = "Mei"
            if (hari >= 1 && hari <= 31) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 31) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 31`)
            }
            break;
        case 6: namaBulan = "Juni"
            if (hari >= 1 && hari <= 30) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 30) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 30`)
            }
            break;
        case 7: namaBulan = "Juli"
            if (hari >= 1 && hari <= 31) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 31) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 31`)
            }
            break;
        case 8: namaBulan = "Agustus"
            if (hari >= 1 && hari <= 31) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 31) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 31`)
            }
            break;
        case 9: namaBulan = "September"
            if (hari >= 1 && hari <= 30) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 30) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 30`)
            }
            break;
        case 10: namaBulan = "Oktober"
            if (hari >= 1 && hari <= 31) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 31) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 31`)
            }
            break;
        case 11: namaBulan = "November"
            if (hari >= 1 && hari <= 30) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 30) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 30`)
            }
            break;
        case 12: namaBulan = "Desember"
            if (hari >= 1 && hari <= 31) {
                if (tahun % 4 == 0) {
                    console.log(`${hari} ${namaBulan} ${tahun}`)
                } else {
                    console.log(`Tahun kabisat tidak terjadi pada Tahun ${tahun}`)
                }
            }
            if (hari > 31) {
                console.log(`${namaBulan} hanya ada tanggal 1 sampai 31`)
            }
            break;
        default:
            console.log("Ada 12 Bulan dalam 1 Tahun kalender, silahkan input ulang")

    }

}

// if (hari > 29 && isKabisat == true) {
//     console.log(`Februari tahun ${tahun} hanya ada tanggal 1 sampai 29`);
//     return;
//   }

// isKabisat()
