from pydantic import BaseModel
from fastapi import APIRouter

router = APIRouter()

# Simples banco de feedback (só para exemplo)
feedback_db = []

class FeedbackInput(BaseModel):
    stars: int  # 1 a 5
    comment: str | None = None

@router.post("/feedback")
async def send_feedback(feedback: FeedbackInput):
    feedback_db.append(feedback.dict())
    return {
        "message": "Obrigado pelo seu feedback!",
        "feedback_received": feedback.dict()
    }
