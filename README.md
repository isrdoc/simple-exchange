***Simple financial exchange

Enables 2 users to send limit orders and trade

- cd project-directory

- export VENV=project-directory/env

- $VENV/bin/pip install -e .

- cd backend

- $VENV/bin/initialize_exchange_db development.ini

- $VENV/bin/pserve development.ini

- cd frontend

- yarn

- ng serve
