from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from tortoise.contrib.fastapi import register_tortoise
from models import Review, ReviewPydantic, ReviewIn
from typing import List
import uvicorn

app = FastAPI(
    title="Reviews API",
    description="API для управления отзывами",
    version="1.0.0"
)

# Настройка CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене замените на конкретный домен
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Подключение к базе данных
register_tortoise(
    app,
    db_url="sqlite://db.sqlite3",
    modules={"models": ["models"]},
    generate_schemas=True,
    add_exception_handlers=True,
)

@app.post("/api/reviews/", response_model=ReviewPydantic)
async def create_review(review: ReviewIn):
    try:
        review_dict = review.model_dump(exclude_unset=True)
        review_obj = await Review.create(**review_dict)
        return await ReviewPydantic.from_tortoise_orm(review_obj)
    except ValueError as e:
        return JSONResponse(
            status_code=422,
            content={"detail": str(e)}
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="Произошла ошибка при создании отзыва"
        )

@app.get("/api/reviews/", response_model=List[ReviewPydantic])
async def get_reviews():
    return await ReviewPydantic.from_queryset(Review.all().order_by('-date'))

@app.get("/api/reviews/{review_id}", response_model=ReviewPydantic)
async def get_review(review_id: int):
    review = await Review.get_or_none(id=review_id)
    if not review:
        raise HTTPException(
            status_code=404,
            detail="Отзыв не найден"
        )
    return await ReviewPydantic.from_tortoise_orm(review)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
