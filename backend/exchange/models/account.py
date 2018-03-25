import transaction

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

from .balance import Balance
from .currency import Currency

class Account(Base):
    __tablename__ = 'account'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    balances = relationship(Balance, backref='user')

    def add_balance(self):
        print('add_balance called')
        # self.balances

# Index('account', Account.id, unique=True, mysql_length=255)
