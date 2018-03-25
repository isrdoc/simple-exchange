from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
)

from .meta import Base


class Currency(Base):
    __tablename__ = 'currency'
    id = Column(Integer, primary_key=True)
    name = Column(Text, nullable=False)
    alias = Column(Text, nullable=False)
    symbol = Column(Text, nullable=False)

# Index('currency', Currency.alias, unique=True, mysql_length=255)
