from transformers import pipeline

emotion_classifier = pipeline("zero-shot-classification")

CANDIDATE_LABELS = ["triste", "feliz", "com raiva", "ansioso", "entusiasmado", "confuso"]

def detect_emotion(text: str):
    result = emotion_classifier(text, candidate_labels=CANDIDATE_LABELS)
    top_emotion = result['labels'][0]
    score = result['scores'][0]
    return {"label": top_emotion, "score": round(score, 3)}
