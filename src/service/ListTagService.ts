import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repository/TagRepository";
import { classToPlain } from "class-transformer";

class ListTagService {
  async execute() {
    const tagRepository = getCustomRepository(TagRepository);
    const tags = await tagRepository.find();
    //tags = tags.map(tag => ({...tag, nameCustom: `#${tag.name}`}));
    return classToPlain(tags);
  }
}

export { ListTagService };