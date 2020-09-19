from sqlalchemy import Column, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, Date, String

from inventory import Inventory

Base = declarative_base()


class Historique(Base):
    __tablename__ = "historique"

    id = Column(
        Integer,
        ForeignKey(Inventory.id),
        primary_key=True
    )
    association = Column(
        String(80),
        nullable=True
    )
    date_recuperation = Column(
        Date,
        nullable=True
    )
    date_rendue = Column(
        Date,
        nullable=True
    )
