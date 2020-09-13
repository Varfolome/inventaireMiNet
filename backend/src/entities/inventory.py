from sqlalchemy import Column, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, Boolean

from marques import Marques

Base_inv = declarative_base()


class Inventory(Base_inv):
    __tablename__ = "inventory"

    id = Column(
        Integer,
        primary_key=True
    )
    available = Column(
        Boolean
    )
    marque = Column(
        Integer,
        ForeignKey(Marques.id),
        nullable=False
    )

    def __repr__(self):
        return '<Inventory model {}>'.format(self.id)


