from tortoise import fields, models
from tortoise.contrib.pydantic import pydantic_model_creator
from pydantic import BaseModel, Field, field_validator
from typing import Optional
from datetime import datetime

class Review(models.Model):
    id = fields.IntField(pk=True)
    author = fields.CharField(max_length=255)
    rating = fields.IntField()
    text = fields.TextField()
    date = fields.DatetimeField(auto_now_add=True)

    class Meta:
        table = "reviews"

# Создаем Pydantic модели
ReviewPydantic = pydantic_model_creator(
    Review, 
    name="Review"
)

class ReviewIn(BaseModel):
    author: str = Field(..., min_length=2, max_length=50)
    rating: int = Field(..., ge=1, le=5)
    text: str = Field(..., min_length=10, max_length=1000)

    @field_validator('author')
    def validate_author(cls, v: str) -> str:
        return v.strip()

    @field_validator('text')
    def validate_text(cls, v: str) -> str:
        return v.strip()

    class Config:
        json_schema_extra = {
            "example": {
                "author": "Иван Петров",
                "rating": 5,
                "text": "Отличное качество работы и обслуживания!"
            }
        }