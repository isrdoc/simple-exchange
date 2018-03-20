from pyramid.config import Configurator


def main(global_config, **settings):
    config = Configurator(settings=settings)
    config.include('pyramid_jinja2')
    config.include('.models')

    # https://gist.github.com/mmerickel/1afaf64154b335b596e4
    config.include('.cors')
    config.add_cors_preflight_handler()
    config.include('.routes')
    
    config.scan()
    return config.make_wsgi_app()