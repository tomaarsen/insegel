from datetime import datetime


templates_path = ['_templates']
source_suffix = '.rst'
master_doc = 'index'

project = 'nltk_theme'

exclude_patterns = ['_build']

html_theme = 'nltk_theme'

def setup(app):
    app.add_html_theme("nltk_theme", "nltk_theme")

html_last_updated_fmt = '%d %b %Y'

releases_github_path = 'tomaarsen/nltk_theme'
# Our pre-0.x releases are unstable / mix bugs+features
releases_unstable_prehistory = True

extensions = ['sphinx.ext.autodoc']

