from sqlalchemy import Column, ForeignKey, Table
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.types import Integer, Boolean, String, Float

from inventory import Inventory

dict_type = {
    'string': String,
    'boolean': Boolean,
    'integer': Integer,
    'float': Float
}

Base_obj = declarative_base()


def create_object_table(table_name: str, param_names: list, param_types: list):
    if len(param_types) != len(param_names):
        return None

    table = Table(
        table_name,
        Base_obj.metadata,
        Column('id', Integer, ForeignKey(Inventory.id), primary_key=True, nullable=False),
        *(Column(
            columns_name,
            columns_type
        ) for columns_name, columns_type in zip(param_names, map(verify_type, param_types)))
    )

    return type(table_name, (Base_obj,), {'__tablename__': table_name, '__table__': table})


def verify_type(param_type):
    if type(param_type) == str:
        return dict_type[param_type]
    else:
        return param_type
