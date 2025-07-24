from fastapi import FastAPI
from pydantic import BaseModel
from app.emotion import detect_emotion
from app.responder import generate_response

app = FastAPI(title="AffectionEngine")

class TextInput(BaseModel):
    text: str

@app.post("/analyze")
async def analyze(input_data: TextInput):
    detected = detect_emotion(input_data.text)
    response = generate_response(detected['label'])
    return {
        "emotion": detected,
        "empathetic_message": response
    }

@app.get("/")
async def home():
    return {"message": "💖 AffectionEngine está online!"}
