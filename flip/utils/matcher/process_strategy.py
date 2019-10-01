from abc import ABC, abstractmethod
from nltk.probability import FreqDist


class ProcessStrategy(ABC):
    """
    Strategy pattern is used here in case the way processing text changes or if reading pdfs/docx
    needs to be added in the future
    """

    @abstractmethod
    def process(self, text: str) -> FreqDist:
        """
        :param text:
        :return: A tuple of (word, frequency)
        """
        pass
