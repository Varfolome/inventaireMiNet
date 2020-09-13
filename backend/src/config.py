from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from os import environ
from entities.historique import Base as bs_his
from entities.inventory import Base as bs_inv
from entities.marques import Base as bs_marq

# Create engine
db_uri = environ.get('SQLALCHEMY_DATABASE_URI')
engine = create_engine('sqlite:///:memory:', echo=True)

# Create All Tables
bs_marq.metadata.create_all(engine)
bs_inv.metadata.create_all(engine)
bs_his.metadata.create_all(engine)
