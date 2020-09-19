import numpy as np
import json

from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

from inventory import Base, Inventory
from brands import Base as Base_mrq, Brand
from object_types import Base as Base_type, ObjectTypes

import SQLExceptions
import constants


engine = create_engine("mysql+pymysql://MiNET:B7mw9G42@localhost/inventaireMiNET", echo=True)


def init_db():
    Session = sessionmaker(bind=engine)

    session = Session(bind=engine)

    Base_mrq.metadata.create_all(engine)
    Base_type.metadata.create_all(engine)
    Base.metadata.create_all(engine)

    return session


def add_type(name_type: str, params: list = None):
    Session = sessionmaker(bind=engine)
    session = Session(bind=engine)

    Base_type.metadata.create_all(engine)

    res = session.query(ObjectTypes.name_type, ObjectTypes.params).all()

    if len(res) != 0:
        res = np.array(res)
        params_receive = json.loads(params)['liste']

        for i in range(res.shape[0]):
            json_receive = json.loads(res[i, 1])['liste']
            name_receive = res[i, 0]

            if name_receive.lower() == name_type.lower():
                raise SQLExceptions.SameNameError(name_receive)
            if json_receive == params_receive:
                raise SQLExceptions.SameParamsError(name_receive)

    session.add(ObjectTypes(name_type=name_type.lower(), params=params))
    session.commit()

    session.close()


def add_object(name_type: str, params: dict):
    session = init_db()

    q = session.query(ObjectTypes.id).filter(ObjectTypes.name_type == name_type.lower()).all()

    if len(q) == 0:
        raise SQLExceptions.TypeNotExists(name_type)

    for param in constants.global_params:
        if param not in params:
            raise SQLExceptions.LackGlobalParam(param)

    global_params = {*(params.pop(i) for i in constants.global_params)}

    print(global_params)


def check_object(name_type: str, params: list = None):
    session = init_db()

    res = session.query(ObjectTypes.params).filter_by(name_type=name_type).all()

    if len(res) > 1:
        raise SQLExceptions.SameTypeError("Type Table has more than than one {} as type".format(name_type))


def show_objects(name_type: str):
    session = init_db()

    q = (session.query(ObjectTypes.name_type, Brand.name, Inventory.available, Inventory.autre_params)
         .join(ObjectTypes, ObjectTypes.id == Inventory.object_type)
         .join(Brand, Brand.id == Inventory.brand)
         .filter(ObjectTypes.name_type == name_type)
         .order_by(Brand.name)
         ).all()

    session.close()
