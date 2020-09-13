from constants import *

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


def init_db():
    engine = create_engine("mysql+pymysql://MiNET:B7mw9G42@localhost/inventaireMiNET", echo=True)
    Session = sessionmaker(bind=engine)

    session = Session()

    



    """
    # Create All Tables
    Base_mrq.metadata.create_all(engine)
    Base_inv.metadata.create_all(engine)

    columns_names = ['id_sdsbhu', 'fname', 'lname', 'age']
    columns_types = ['integer', 'string', 'string', 'integer']

    cls = create_object_table("testTable", columns_names, columns_types)
    Base_obj.metadata.create_all(engine)
    """