var jualMobil = {
    merk: "toyota",
    tahun: 2019,
    idan: function () {
        console.log(`BU, saya ${this.nama},ingin menjual mobil ${this.merk}. tahun ${this.tahun},bekas.`)
    }
}

var kendaraan = Object.create(jualMobil);

kendaraan.nama = "Tompel"
kendaraan.merk = "avanza"
kendaraan.idan();