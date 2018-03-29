***Simple financial exchange

Enables 2 users to send limit orders and trade

- cd project-directory

- export VENV=project-directory/env

- python3 -m venv $VENV

- cd backend

- $VENV/bin/pip install -e .

- $VENV/bin/initialize_exchange_db development.ini

- $VENV/bin/pserve development.ini

Open new terminal window

- cd project-directory/frontend

- yarn

- ng serve

Login with trader account:

username: trader
password: trader