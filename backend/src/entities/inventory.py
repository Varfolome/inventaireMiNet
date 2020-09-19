from sqlalchemy import Column, ForeignKey, create_engine, MetaData, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, Boolean, String, JSON
from sqlalchemy.orm import sessionmaker

from brands import Brand
from object_types import ObjectTypes

Base = declarative_base()


class Inventory(Base):
    __tablename__ = "inventory"

    id = Column(
        Integer,
        primary_key=True
    )
    object_type = Column(
        'type',
        ForeignKey(ObjectTypes.id),
        nullable=False
    )
    brand = Column(
        Integer,
        ForeignKey(Brand.id),
        nullable=False
    )
    available = Column(
        Boolean
    )
    autre_params = Column(
        JSON,
        nullable=True,
    )

    def __repr__(self):
        return '<Inventory model {}>'.format(self.id)