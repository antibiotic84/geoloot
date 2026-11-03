# GEOLOOT – Kurulum Rehberi (PC ve Android)

GEOLOOT bir **yüklenebilir web uygulamasıdır (PWA)**. Dosyaları bir kez ücretsiz bir HTTPS adresine koyarsınız. Sonra:

- **Android'de** Chrome ile açıp telefona yüklersiniz (ana ekranda ikonu olur, tam ekran açılır).
- **PC'de** Chrome veya Edge ile açıp bilgisayara yüklersiniz (Başlat menüsünde ve masaüstünde ikonu olur).
- İlk açılıştan sonra **internet olmadan da çalışır**.
- GPS, kamera ve pusula/klinometre yalnızca HTTPS adresinden açıldığında çalışır.

---

## 1. Paketteki dosyalar

| Dosya | Görevi |
|---|---|
| `index.html` | Uygulamanın kendisi |
| `manifest.webmanifest` | Uygulama adı, ikonlar, renkler (yüklenebilmesi için) |
| `sw.js` | Çevrimdışı çalışmayı sağlayan dosya |
| `icons/` klasörü | Uygulama ikonları |
| `KURULUM.md` | Bu rehber (yüklemeniz gerekmez) |

---

## 2. Uygulamayı internete koymak (bir kez yapılır, ücretsiz)

### Yöntem A – GitHub Pages (önerilen, kalıcı ve ücretsiz)

1. **github.com** adresinden ücretsiz hesap açın (varsa giriş yapın).
2. Sağ üstteki **+** → **New repository**.
   - Repository name: `geoloot`
   - **Public** seçili olsun → **Create repository**.
3. Açılan sayfada **"uploading an existing file"** bağlantısına tıklayın.
4. Zip'i açtığınız klasördeki `index.html`, `manifest.webmanifest`, `sw.js` dosyalarını **ve `icons` klasörünü** sürükleyip bırakın → alttaki **Commit changes** düğmesine basın.
5. Üst menüden **Settings** → soldan **Pages**.
   - Source: **Deploy from a branch**
   - Branch: **main** ve **/ (root)** → **Save**.
6. 1–2 dakika sonra aynı sayfanın üstünde adresiniz görünür:
   **`https://KULLANICIADINIZ.github.io/geoloot/`**

> Not: Repo herkese açık olur ama bu yalnızca **uygulamanın kodudur**. Sizin örnek, sondaj ve fotoğraf verileriniz GitHub'a gitmez; her cihazın kendi içinde saklanır.

### Yöntem B – Netlify (sürükle-bırak)

1. **app.netlify.com/drop** adresini açın, ücretsiz hesapla giriş yapın.
2. Zip'i açtığınız **klasörün tamamını** sayfaya sürükleyin.
3. Size `https://….netlify.app` biçiminde bir adres verilir.

---

## 3. Android telefona yükleme

1. Telefonda **Chrome** ile adresinizi açın (ör. `https://KULLANICIADINIZ.github.io/geoloot/`).
2. GEOLOOT ana ekranında **📲 Uygulamayı bu cihaza yükle** düğmesine basın.
   Düğme görünmezse: Chrome menüsü **⋮** → **Uygulamayı yükle** (veya **Ana ekrana ekle**).
3. Telefonun ana ekranında **GEOLOOT** ikonu oluşur; bundan sonra oradan açın.
4. İlk kullanımda istenen izinlere **İzin ver** deyin:
   - **Konum** → GPS ile konum almak için (*Kesin konum* açık olsun).
   - **Kamera** → uygulama içinden fotoğraf çekmek için.
5. **Pusula / klinometre için:** Ölçüm sayfasında *Sensörü başlat*'a basın. Değerler oynaksa telefonu havada "8" çizerek pusulayı kalibre edin, manyetik kılıf kullanmayın. Kritik ölçümleri ara ara Brunton ile kontrol edin.

## 4. PC'ye (Windows / Mac) yükleme

1. **Chrome** veya **Microsoft Edge** ile adresinizi açın.
2. GEOLOOT ana ekranındaki **📲 Uygulamayı bu cihaza yükle** düğmesine ya da adres çubuğunun sağındaki **yükle** simgesine tıklayın.
3. GEOLOOT ayrı bir pencerede açılır ve Başlat menüsüne / masaüstüne eklenir.

---

## 5. Verileriniz hakkında – ÖNEMLİ

- Veriler **her cihazın kendi içinde** saklanır. Telefona girdiğiniz veri PC'de kendiliğinden görünmez.
- **Telefon → PC aktarımı:**
  1. Telefonda projeyi açın → **Aktar / Ayar** → **JSON yedek indir** (istenirse *fotoğrafları da ekle* işaretli).
  2. Dosyayı PC'ye gönderin (e-posta, WhatsApp, kablo, Drive…).
  3. PC'de GEOLOOT ana ekranı → **Yedekten proje aç (JSON)** → dosyayı seçin.
- **Düzenli yedek alın** (ör. her arazi gününün sonunda JSON yedek).
- Yedek almadan: uygulamayı **kaldırmayın**, Chrome'da **site verilerini / tarama verilerini silmeyin**. Bunlar cihazdaki verileri de silebilir.
- Claude önizlemesinde girdiğiniz deneme verileri yeni adrese kendiliğinden gelmez. Gerekirse önizlemede JSON yedek alıp yeni adreste **Yedekten proje aç** ile yükleyin.

---

## 6. Güncelleme

Yeni bir sürüm hazırlandığında:

1. GitHub'daki `geoloot` reposunda **Add file → Upload files** ile yeni `index.html` ve `sw.js` dosyalarını yükleyin (eskilerin üzerine yazılır) → **Commit changes**.
2. Uygulama internete bağlıyken açıldığında **"Yeni sürüm hazır"** uyarısı çıkar. Uygulamayı kapatıp yeniden açın.

Verileriniz güncellemeden etkilenmez.

---

## 7. İsteğe bağlı: Play Store / APK

Uygulama adresiniz hazır olduktan sonra **pwabuilder.com** sitesine adresinizi girerek Android (Play Store'a yüklenebilir paket) ve Windows (Microsoft Store) paketleri üretebilirsiniz. Günlük kullanım için gerekli değildir; Chrome'dan yükleme yeterlidir.
