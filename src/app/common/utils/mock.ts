import { mock, Random } from 'mockjs';
import { Answer, AnswerID, Question, QuestionID, User, UserID, Vote, VoteID } from '../interfaces';

export const mockVote: (id?: VoteID) => Vote = id => ({
  id: id ?? Random.increment(),
  count: Random.integer(0, 99999),
});

export const mockQuestion: (id?: QuestionID) => Question = id => ({
  id: id ?? Random.increment(),
  title: Random.ctitle(),
  user: mockUser(),
  content: Random.cparagraph(),
  count: {
    answer: Random.integer(0, 13500),
    visit: Random.integer(0, 999999),
    like: Random.integer(0, 50000),
  },
  tags: mock({
    'array|0-10': [() => Random.cword(2, 5)],
  })['array'],
  date: new Date(Random.datetime()),
});

export const mockAnswer: (id?: AnswerID) => Answer = id => ({
  id: Random.increment(),
  question: id!,
  title: Random.ctitle(),
  user: mockUser(),
  images: mock({
    'array|0-10': [Random.image()],
  })['array'],
  content: Random.cparagraph(),
  count: {
    approve: Random.integer(0, 99999),
    oppose: Random.integer(0, 99999),
    comment: Random.integer(0, 99999),
  },
  date: new Date(Random.datetime()),
});

export const mockUser: (id?: UserID) => User = id => ({
  id: id ?? Random.increment(),
  name: Random.cname(),
  head: Random.image('128x128'),
  motto: Random.csentence(),
});
