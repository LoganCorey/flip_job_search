from flip.utils.processor.basic_process import BasicProcessing
from flip.utils.matcher.skill_matcher import  SkillSet, match, spacy_match


def createJson(job_text: str, resume_text: str):
    """ creates a json to be processed by the front end
    :param job_text:
    :param resume_text:
    :return:
    """

    processor = BasicProcessing()
    job_text_frequencies = processor.process(job_text)
    resume_text_frequencies = processor.process(resume_text)


    skills_dictionary = {
        "job_skills":{
            "logan":1
        },
        'resume_skills':{
        "logan":1
        },
        'match_rate':100
    }
    return skills_dictionary
