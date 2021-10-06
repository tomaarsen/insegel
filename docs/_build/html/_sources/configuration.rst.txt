=============
Configuration
=============


Custom Logo
===========

By default, your project title is put in the upper-left of the build documentation.
To use a logo for your project, use the `html_logo`_ option in your
``conf.py``::

    html_logo = "path/to/my/logo.png"

The path to this new logo has to be relative to the documentation's ``conf.py``
file.


Sidebar Depth
=============

By default, the theme displays indexes 3 levels deep. To configure this to fewer
levels::

    html_theme_options = {
        'navigation_depth': 1
    }

.. _html_logo: https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_logo