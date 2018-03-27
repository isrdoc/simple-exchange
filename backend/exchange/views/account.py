import json

from pyramid.view import view_config
from sqlalchemy.exc import DBAPIError

from ..models import MyModel, Asset, Balance, Currency


@view_config(route_name='balances', renderer='json')
def view_balances(request):
    print('balances user: ' + str(request))
    if request.user is not None:
        print('user role: ' + str(request.user.role))
    try:
        query = request.dbsession.query(MyModel)
        one = query.filter(MyModel.name == 'one').first()
    except DBAPIError:
        return { 'error': 'Database error' }
    return { 'balances': [ { 'currency': 'BTC', 'amount': 4.5 }, { 'currency': 'ETH', 'amount': 0 } ] }

@view_config(route_name='deposit', renderer='json')
def view_deposit(request):
    amount = request.json_body['amount']
    currency_alias = request.json_body['currency']['alias']
    
    try:
        currency = request.dbsession.query(Currency).filter(Currency.alias == currency_alias).first()
        user = request.user

        balance = request.dbsession.query(Balance).filter(Balance.currency_id == currency.id).first()

        # TODO: check db models and add asset

        print(str(user.name))
    except DBAPIError:
        return { 'error': 'Database error' }
        
    """
    try:
        asset = Asset(amount=deposit['amount'], )
        request.dbsession.add(asset)
    except DBAPIError:
        return { 'error': 'Database error' }
    """
    return { 'success': True }


db_err_msg = """\
Pyramid is having a problem using your SQL database.  The problem
might be caused by one of the following things:

1.  You may need to run the "initialize_exchange_db" script
    to initialize your database tables.  Check your virtual
    environment's "bin" directory for this script and try to run it.

2.  Your database server may not be running.  Check that the
    database server referred to by the "sqlalchemy.url" setting in
    your "development.ini" file is running.

After you fix the problem, please restart the Pyramid application to
try it again.
"""
