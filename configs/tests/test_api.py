import pytest
from httpx import AsyncClient
from app.main import app

@pytest.mark.asyncio
async def test_home():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/")
    assert response.status_code == 200
    assert "AffectionEngine" in response.json()["message"]

@pytest.mark.asyncio
async def test_analyze():
    payload = {"text": "Estou ansioso com as tarefas."}
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.post("/analyze", json=payload)
    assert response.status_code == 200
    assert "emotion" in response.json()
    assert "empathetic_message" in response.json()
