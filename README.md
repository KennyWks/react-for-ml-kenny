# ML React Predictor

Contoh aplikasi React sederhana yang menampilkan hasil prediksi dari model ML (simulasi) di browser.

Cara menjalankan:

1. Buka terminal di folder proyek:

```bash
cd ml-react-predictor
```

2. Install dependency:

```bash
npm install
```

3. Jalankan dev server:

```bash
npm run dev
```

Lalu buka http://localhost:5173

Catatan: Model disimulasikan di `src/PredictionModel.js`. Jika ingin menghubungkan model Python atau server, saya bisa bantu menambahkan backend API.

## Remote API

Anda dapat menghubungkan aplikasi ini ke endpoint prediksi eksternal. Secara default proyek memuat `VITE_API_URL` dari file `.env` (contoh: `http://localhost:5000/predict`).

Format request yang dikirim oleh aplikasi:

```json
{ "features": [0.1, 1.2, 3.4] }
```

Endpoint harus merespon JSON seperti:

```json
{ "probability": 0.82, "label": "Positif", "score": 1.5 }
```

Contoh cepat server Flask (opsional):

```python
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
	data = request.get_json()
	features = data.get('features', [])
	# lakukan prediksi model nyata di sini
	return jsonify({ 'probability': 0.5, 'label': 'Positif', 'score': 0.0 })

if __name__ == '__main__':
	app.run(port=5000)
```

Setelah server berjalan, centang "Gunakan endpoint remote" di aplikasi dan masukkan URL endpoint, lalu klik `Prediksi`.

## Express example backend

Ada contoh backend Express sederhana di `backend/server.js` yang menyediakan endpoint `/predict` dan mengaktifkan CORS.

Menjalankan backend contoh:

```bash
cd ml-react-predictor/backend
npm install
npm run start
```

Endpoint akan berjalan di `http://localhost:5000/predict` dan menerima JSON `{ "features": [...] }`.

Catatan: contoh backend menggunakan model demo (linear) cuma untuk tujuan testing — ganti dengan model Anda bila perlu.
"# react-for-ml-kenny" 
