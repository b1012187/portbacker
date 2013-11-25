#coding: utf-8

import sys
import unittest

import os.path
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
import portfolio

class TopPageTest(unittest.TestCase):

    def setUp(self):
        self.app = portfolio.app.test_client()
        with self.app.session_transaction() as sess:
            sess['username'] = 'hogehogehogey'

    def tearDown(self):
        pass

    def test_redirect_unregistered_user_to_profile_page(self):
        rv = self.app.get('/')
        text = rv.data.decode('utf-8')
        self.assertTrue(u'"/profile"' in text)

if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()