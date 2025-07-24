# 💖 AffectionEngine

Uma API que detecta emoções em texto e gera mensagens empáticas usando IA.

## 🚀 Como rodar

### Localmente

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
Usando Docker
bash
Copiar
Editar
docker build -t affectionengine .
docker run -p 8000:8000 affectionengine
Usando Docker Compose
bash
Copiar
Editar
docker-compose up --build
