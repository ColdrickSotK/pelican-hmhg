#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u"The Brothers' Coldrick"
SITENAME = u'Holcombe Moor Heritage Group'
SITEURL = ''
THEME = u'theme/hmhg'
ARTICLE_SAVE_AS = u'{category}/{slug}.html'
ARTICLE_URL = u'{category}/{slug}.html'
PAGE_SAVE_AS = u'{slug}/index.html'
PAGE_URL = u'{slug}'

PATH = 'content'

TIMEZONE = 'Europe/London'

DEFAULT_LANG = u'en'

DEFAULT_DATE_FORMAT = '%a %d %B %Y at %H:%M %p'

STATIC_PATHS = ['newsletters', 'reports']

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = ()

# Social widget
SOCIAL = ()

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True
