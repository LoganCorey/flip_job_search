from typing import List, Tuple, Dict
from flip.models import Skill
from nltk.probability import FreqDist


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
    matched_words = Skill.objects.filter(name__in=all_words)
    # create dictionary to be used in SkillSet object

    skill_dictionary = {}
    for skill in matched_words:
        skill_dictionary[skill.name] = frequencies[skill.name]
    return SkillSet(skill_dictionary)






