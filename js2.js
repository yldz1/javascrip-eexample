

// for döngüsü örnekleri . bu örnekte beşe kadar sayışarı teker teker artırark gider.
//for (let i = 1; i <= 5; i++) {
//  console.log("Sayı: " + i);
//}
//bak burdada mesela 10 dan başladı tekrar 20 ye kadar yazdırdı.

//for (let i = 10; i <= 20; i++) {
//  console.log("sayım:" + i);
//}

//bunun gibi  örnekler yapıcam hep:const örnek

const dizi = ["elma", "armut", "çilek", "kabak", "muz"];
for (let i = 0; i < dizi.length; i++) {
    console.log("meyvlerim:" + dizi[i]);
}//bu sırayla meyveleri yazıyor artırarak yazıyor.

let sayi = 5; // bu faktöriyel hesaplama mekanızmasıdır.5 rakamının faktör,yel olarak kaç ettiğini hresaplar bize.
let faktoriyel = 1;

for (let i = 1; i <= sayi; i++) {
    faktoriyel *= i;
}
console.log(`${sayi}! = ${faktoriyel}`);


let sayım = 10;
let faktoriyelim = 1;
for (let i = 1; i <= sayım; i++) {

    faktoriyelim *= i;
}
console.log(`${sayım}! = ${faktoriyelim}`);


for (let i = 1; i <= 10; i++) {//bu da çift sayıları sıralr 
    if (i % 2 === 0) {
        console.log(i + "  bir çift sayılardır.");
    }
}
//kelimeleri tersten yazan bi fonkdiyon yapalım .console yaptığın zaman tersten yazıyor kelimeleri.
const kelime = "javascript";
let Terskelime = "";
for (let i = kelime.length - 1; i >= 0; i--) {
    Terskelime += kelime[i];
}
console.log("orjinal hali:" + kelime);
console.log("Tersten hali:" + Terskelime);

const sayilar = [10, 20, 30, 40];//bu dizide de tüm rakamları toplamayı sağlar 
let toplam = 0;

for (let i = 0; i < sayilar.length; i++) {
    toplam += sayilar[i];
}

console.log("Dizi toplamı: " + toplam);


//bu for döngüsünde de çarpma tablosu oldu . bu döngü birlerden başlayarak 2 ler 3 ler 5 lere kadar gider . işaretler de bile aynıdır . aralarında çarpma işareti vardır aynı tablo gibi görünür console da .
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---------");
}

let i = 1;// bu örnekte sayıları sıralar.
while (i <= 5) {
    console.log("sayı: " + i);
    i++;

}
let y = 5; //buda 5 den 20 ye kadar sıralar.
while (y <= 20) {
    console.log("sayılarım:" + y);
    y++;

}

const meyveler = ["elma ", "armut", "avakado", "üzüm", "ananas", "muz"];
let index = 0;// sırayla yazılsın diye 0 demek bir demektir.
while (index <= meyveler.length) {
    console.log("meyveler:" + meyveler[index]);
    index++;

}

//bu kod sayesinde ekranda bir kutucuk çıkar ve senin sayıyı tahmin etmen beklenir eğer edemezsen o kutu gitmez sen edene kadar devamlı çıkar ve en dopru tahmin ettiğinde kutucuk gider.
const gizlisayi = 7;
let tahmin = 0;
while (tahmin !== gizlisayi) {
    tahmin = parseInt(prompt("Bir sayı tahmin edin: "));
    if (tahmin !== gizlisayi) {
        console.log("Yanlış tahmin, tekrar deneyin.");
    }
}

let rastgeleSayi;

while (rastgeleSayi !== 5) {
    rastgeleSayi = Math.floor(Math.random() * 10) + 1;
    console.log("Üretilen sayı: " + rastgeleSayi);
}

console.log("5 bulundu! Döngü sonlandı.");


let a = 0;

while (true) {
    console.log("Sonsuz döngü: " + a);
    a++;

    if (a === 10) {//burda 10 da durdu çünkü öyle istedik.
        console.log("Döngü durduruldu.");
        break; // Döngüyü kırar
    }
}
let kullaniciIsmi = "";

while (kullaniciIsmi.trim() === "") {
    kullaniciIsmi = prompt("Lütfen bir isim girin:");
}

console.log("Merhaba, " + kullaniciIsmi + "!");


const dizi = [];
let eleman;

while (dizi.length < 5) {
    eleman = prompt("Bir eleman ekleyin:");
    dizi.push(eleman);
    console.log("Şu anki dizi: " + dizi);
}


