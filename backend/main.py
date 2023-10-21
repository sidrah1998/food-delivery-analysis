from fastapi import FastAPI


app=FastAPI()

@app.get("/api/msg")
def read_root():
    return {"message": "Hello World"}