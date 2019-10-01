import spacy
import os.path
from typing import List, Tuple, Dict

from nltk.probability import FreqDist
from spacy.matcher import Matcher
from spacy.matcher import PhraseMatcher


class SkillSet:
    def __init__(self, skills: Dict[str, int]):
        self.skills = skills
        self.num_skills = len(skills)

    def __len__(self) -> int:
        return self.num_skills

    def __repr__(self) -> str:
        return "SkillSet({}, {})".format(self.skills, self.num_skills)

    def __str__(self) -> str:
        return "SkillSet({}, {})".format(self.skills, self.num_skills)

    def compare(self, skill_set) -> float:
        """
        Compares the number of skills that match and returns
        a percentage for the number of matching skills found
        :param skill_set: another SKillSet object
        :return: a percentage for the number of matching skills found
        """
        if isinstance(skill_set, SkillSet):
            count = 0
            other_skill_set_keys = skill_set.skills.keys()
            # count number of skills that match
            for skill in self.skills.keys():
                if skill in other_skill_set_keys:
                    count += 1
                # match rate

            match_rate = 0 if len(self) == 0 else count / len(self)
            return match_rate
        else:
            return 0


def match(frequencies: FreqDist) -> SkillSet:
    """
    Maps all of the matching skills with their frequencies in a SkillSet object
    :param frequencies: tuple of word and number of occurrences in text
    :return: a SkillSet object of all matching skills with their frequency
    """
    # create a list of every word to be used in the query
    all_words = [word for word in frequencies.keys()]

    # query any matching skills
    #matched_words = Skill.objects.filter(name__in=all_words)
    # create dictionary to be used in SkillSet object

    skill_dictionary = {}
    for skill in matched_words:
        skill_dictionary[skill.name] = frequencies[skill.name]
    return SkillSet(skill_dictionary)

def fill_index(nlp, filename="./all_linked_skills.txt"):
    matcher = PhraseMatcher(nlp.vocab)
    key_words = []
    with open(filename, "r", encoding="utf-8") as fs:
        for line in fs.readlines():
            skill = line.strip("\n").lower()
            key_words.append(skill)
    patterns = [nlp.make_doc(text) for text in key_words]
    matcher.add("TerminologyList", None, *patterns)
    return matcher

def spacy_match(text, frequencies: FreqDist) -> SkillSet:
    nlp = spacy.load("en_core_web_sm")
    matcher = fill_index(nlp)
    doc = nlp(text)
    matches = matcher(doc)
    skill_dictionary = {}
    for match_id, start, end in matches:
        string_id = nlp.vocab.strings[match_id]  # Get string representation
        span = doc[start:end]  # The matched span
        skill_dictionary[span.text.lower()] = frequencies[span.text.lower()]
    return SkillSet(skill_dictionary)
