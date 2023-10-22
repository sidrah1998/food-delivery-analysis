from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pickle

class FormItem(BaseModel):
    age: str
    martial_status: str
    occupation: str
    monthly_income: str
    max_wait_time: str
    ease_convenient: str
    time_saving: str
    more_res_choices: str
    easy_pay_opt: str
    more_offers_and_dis: str
    good_food_quality: str
    good_tracking_system: str
    number_calls: str
    delay_person: str
    politeness: str

app=FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
pickle_in = open("../models/model.pkl","rb")
classifier=pickle.load(pickle_in)

@app.get("/api/msg")
def read_root():
    return {"message": "Hello World"}

@app.post("/api/get-results")
async def create_item(item: FormItem):
    data = item.dict()
    for key in data:
        data[key] = int(data[key], 10)
    prediction = classifier.predict([ [data["age"], data["martial_status"], data["occupation"], data["monthly_income"], data["ease_convenient"], data["time_saving"], data["more_res_choices"], data["easy_pay_opt"], data["more_offers_and_dis"], data["good_food_quality"], data["good_tracking_system"], data["delay_person"], data["max_wait_time"], data["number_calls"], data["politeness"]] ])
    res = int(prediction[0])
    return {"results": res, "msg": "Successfully received the data."}