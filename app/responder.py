from transformers import pipeline

empathetic_responder = pipeline("text-generation", model="gpt2")

def generate_response(emotion_label: str):
    prompt = f"O usuário parece {emotion_label}. Escreva uma resposta empática:"
    response = empathetic_responder(prompt, max_length=80, do_sample=True, temperature=0.9)
    return response[0]['generated_text'].strip()
