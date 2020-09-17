from sqlalchemy.orm import sessionmaker

from constants import *

from sqlalchemy import create_engine

from inventory import Base
from marques import Base_mrq
from object_types import Base_type


def init_db():
    engine = create_engine("mysql+pymysql://MiNET:B7mw9G42@localhost/inventaireMiNET", echo=True)

    Session = sessionmaker(bind=engine)

    session = Session(bind=engine)

    Base_mrq.metadata.create_all(engine)
    Base_type.create_all(engine)
    Base.metadata.create_all(engine)


init_db()

