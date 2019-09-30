import unittest
from flip.utils.processor.basic_process import BasicProcessing

class BasicProcessTests(unittest.TestCase):
    def setUp(self):
        self.bp = BasicProcessing()

    def test_tokenize(self):
        text = "hello world"
        self.assertEqual(self.bp._tokenize(text), ["hello", "world"])

    def test_remove_excess(self):
        text = ["hello", "world"]
        self.assertEqual(self.bp._remove_excess(text), ['hello', 'world'])

    def test_process(self):
        text = "hello world"
        self.assertEqual(self.bp.process(text), ['hello', 'world'])



if __name__ == "__main__":
    unittest.main()
