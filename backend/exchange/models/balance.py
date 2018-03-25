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

from .asset import Asset
from .liability import Liability


class Balance(Base):
    __tablename__ = 'balance'
    id = Column(Integer, primary_key=True)
    equity = Column(Integer, nullable=False)

    currency_id = Column(Integer, ForeignKey('currency.id'))
    account_id = Column(Integer, ForeignKey('account.id'))
    
    assets = relationship(Asset, backref='balance')
    liabilities = relationship(Liability, backref='balance')

# Index('balance', Balance.id, unique=True, mysql_length=255)
