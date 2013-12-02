#coding: utf-8

import sys
import unittest

import os.path
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..'))
import portfolio
import model

class TopPageTest(unittest.TestCase):

    def setUp(self):
        model.User.delete_all(model.db)
        self.u = model.User("Hoge Ratta", "b1010999", None, u'情報システム', 'B4')
        self.u.insert(model.db)

        self.app = app = portfolio.app
        app.debug = True
        self.client = app.test_client()

        with self.client.session_transaction() as sess:
            sess['username'] = 'b1010999'

    def tearDown(self):
        pass

    def test_logined_user_login(self):
        rv = self.client.get('/login')
        text = rv.data.decode('utf-8')
        self.assertTrue(u'<a href="/">/</a>' in text)

if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()