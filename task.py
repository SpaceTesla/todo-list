from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, time

db = SQLAlchemy()

class Task:
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    content = db.Column(db.String(200), nullable=False)

    def __repr__(relf):
        return f"Reservation({self.id}, {self.date}, {self.time}, {self.content})"
    