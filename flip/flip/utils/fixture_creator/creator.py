"""
Creates a json file in the fixtures folder of every
linkedIn skill
"""
import json


def generate_json(filename: str) -> json:
    skills_list = []
    with open(filename, "r", encoding="utf-8") as fs:
        for index, line in enumerate(fs.readlines()):
            # everything should be lower case for future reading
            skill = line.strip("\n").lower()
            skills_dictionary ={
                "model": "flip.Skill",
                "pk": index,
                "fields": {
                    "name": skill
                }
            }
            skills_list.append(skills_dictionary)

    return json.dumps(skills_list)


def save_to_file(filename: str, skills_list: json) -> None:
    with open(filename, "w", encoding="utf-8") as fs:
        fs.write(skills_list)


def create_fixture_file(skills_file_name: str, json_file_name: str) -> None:
    """
    :param skills_file_name:
    :param json_file_name:
    :return:
    """
    skills_json = generate_json(skills_file_name)
    save_to_file("../../fixtures/skills_fixture.json", skills_json)


if __name__ == "__main__":
    create_fixture_file("all_linked_skills.txt", "fixture.json")
