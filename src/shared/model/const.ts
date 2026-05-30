import type { ITag } from "./types";
import Smile from '../../assets/smile.svg'
import Unicorn from '../../assets/unicorn.svg'

export const tags: Record<string, ITag> = {
  all: {
    title: 'Все',
    icon: Smile
  },
  selfEsteem: {
    title: "Самооценка и самопринятие"
  },
  self: {
    title: 'Self',
    icon: Unicorn
  },
  feel: {
    title: "Чувства и эмоции"
  },
  alarm: {
    title: 'Тревога'
  },
  ex: {
    title: 'Упражнения'
  },
  food: {
    title: 'Психология питания'
  },
  force: {
    title: 'Насилие'
  },
  health: {
    title: 'Личное здоровье'
  },
}