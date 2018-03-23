import json

from pyramid.httpexceptions import HTTPFound
from pyramid.security import (
    remember,
    forget,
    )
from pyramid.view import (
    forbidden_view_config,
    view_config,
)

from ..models import User


@view_config(route_name='login', renderer='json')
def view_login(request):
    data = request.json_body
    username = data['username']
    password = data['password']
    user = request.dbsession.query(User).filter_by(username=username).first()
    if user is not None and user.check_password(password):
        headers = remember(request, user.id)
        request.response.headerlist.extend(headers)
        return {'authenticated': True, 'user': { 'name': user.name }}
    return {'authenticated': False, 'user': { 'name': '' }}

@view_config(route_name='logout', renderer='json')
def view_logout(request):
    headers = forget(request)
    request.response.headerlist.extend(headers)
    return {'authenticated': False, 'user': { 'name': '' }}

@forbidden_view_config()
def forbidden_view(request):
    next_url = request.route_url('login', _query={'next': request.url})
    return HTTPFound(location=next_url)
