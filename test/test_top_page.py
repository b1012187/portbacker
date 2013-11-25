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
        self.app = portfolio.app.test_client()
        self.u = model.User("Hoge Ratta", "b1010999", None, u'情報システム', 'B4')
        self.u.insert(model.db)

    def tearDown(self):
        pass

    # def test_redirect_unregistered_user_to_profile_page(self):
    #     with self.app.session_transaction() as sess:
    #         sess['username'] = 'hogehogehogey'
    #         rv = self.app.get('/login')
    #         sys.stderr.write(repr(rv.location))
    #         text = rv.data.decode('utf-8')
    #         self.assertTrue(u'"/profile"' in text)

    # def test_registered_user_login(self):
    #     with self.app.session_transaction() as sess:
    #         sess['username'] = 'b1010999'
    #         rv = self.app.get('/login')
    #         text = rv.data.decode('utf-8')
    #         # print text
    #         self.assertTrue(u'"/profile"' in text)

if __name__ == "__main__":
    #import sys;sys.argv = ['', 'Test.testName']
    unittest.main()