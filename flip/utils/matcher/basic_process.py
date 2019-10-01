"""

"""
import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.probability import FreqDist
from typing import List
from process_strategy import ProcessStrategy



class BasicProcessing(ProcessStrategy):
    """
    class used for processing text.
    Class has empty init so it can be injected into SkillMatcher
    """

    def _tokenize(self, text: str) -> List:
        """
        Tokenizes the text so that the nltk library can be used for
         manipulations
        """
        tokenized_text = nltk.word_tokenize(text)
        return tokenized_text

    def _remove_excess(self, tokenized_text: List[str]) -> List:
        """
        Removes stop words from text.  This is done so that only impactful
        words are being
        check and not words like 'the'
        """
        stop_words = stopwords.words("english")
        trimmed_list = [word for word in tokenized_text if word not in stop_words]
        return trimmed_list

    def process(self, text: str) -> FreqDist:
        """
        Processes text by removing stop words and putting it into a tuple of
         (word, occurence)
        """
        tokenized_text = self._tokenize(text)
        trimmed_text = self._remove_excess(tokenized_text)
        fdist = FreqDist(trimmed_text)
        return fdist
