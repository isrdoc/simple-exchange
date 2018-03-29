import os
import sys
import transaction

from pyramid.paster import (
    get_appsettings,
    setup_logging,
    )

from pyramid.scripts.common import parse_vars

from ..models.meta import Base
from ..models import (
    get_engine,
    get_session_factory,
    get_tm_session,
    )
from ..models import MyModel, User, Currency


def usage(argv):
    cmd = os.path.basename(argv[0])
    print('usage: %s <config_uri> [var=value]\n'
          '(example: "%s development.ini")' % (cmd, cmd))
    sys.exit(1)


def main(argv=sys.argv):
    if len(argv) < 2:
        usage(argv)
    config_uri = argv[1]
    options = parse_vars(argv[2:])
    setup_logging(config_uri)
    settings = get_appsettings(config_uri, options=options)

    engine = get_engine(settings)
    Base.metadata.drop_all(engine)
    Base.metadata.create_all(engine)

    session_factory = get_session_factory(engine)

    with transaction.manager:
        dbsession = get_tm_session(session_factory, transaction.manager)

        model = MyModel(name='one', value=1)
        dbsession.add(model)

        admin = User(name='admin', username='admin', role='admin')
        admin.set_password('admin')
        dbsession.add(admin)

        trader = User(name='Trader 1', username='trader', role='trader')
        trader.set_password('trader')
        dbsession.add(trader)
        dbsession.flush()

        # TODO: add account for trader
        # account = 

        bitcoin = Currency(name='Bitcoin', alias='BTC', symbol='B')
        dbsession.add(bitcoin)

        etherium = Currency(name='Etherium', alias='ETH', symbol='E')
        dbsession.add(etherium)
