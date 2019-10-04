from flip.utils.processor.basic_process import BasicProcessing
from flip.utils.matcher.skill_matcher import  SkillSet, flash_match
import os


def createJson(job_text: str, resume_text: str):
    """ creates a json to be processed by the front end
    :param job_text:
    :param resume_text:
    :return:
    """
    import os

    processor = BasicProcessing()
    job_text_frequencies = processor.process(job_text)
    resume_text_frequencies = processor.process(resume_text)
    job_skills = flash_match(job_text, job_text_frequencies)
    resume_skills = flash_match(resume_text, resume_text_frequencies)
    match_rate = int(job_skills.compare(resume_skills) * 100)

    skills_dictionary = {
        "job_skills": job_skills.skills,
        "resume_skills": resume_skills.skills,
        "match_rate": match_rate
    }

    return skills_dictionary

if __name__ == "__main__":
    json = createJson("ubuntu", "ubuntu")
    print(json)
