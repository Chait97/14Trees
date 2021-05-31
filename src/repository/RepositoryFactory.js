import UserRepository from "~/repository/UserRepository";

const repositories = {
  user: UserRepository,
};
export default {
  get: (name) => repositories[name],
};
