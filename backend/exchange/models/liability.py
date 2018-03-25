from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    DateTime,
    ForeignKey,
)

from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from .meta import Base

from .currency import Currency


class Liability(Base):
    __tablename__ = "liability"
    id = Column(Integer, primary_key=True)
    amount = Column(Integer, nullable=False)
    timestamp = Column(DateTime(timezone=True), server_default=func.now())
    currency_id = Column(Integer, ForeignKey('currency.id'))
    balance_id = Column(Integer, ForeignKey('balance.id'))

# Index('liability', Liability.id, unique=True, mysql_length=255)
