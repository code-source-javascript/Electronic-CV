import { PostModel, UserModel } from "../model";

export async function createUser({ input }, context) {
  try {
    const user = await UserModel.findOne({ email: input.email });
    if (user) throw new Error("user already exist with this email");
    const newUser = { ...input };
    const __user = new UserModel(newUser);
    await __user.save();

    return user;
  } catch (error) {
    throw error;
  }
}

export async function updateUser({ input }, { _user }) {
  try {
    const user = await UserModel.findOneAndUpdate(
      { _id: input.userID ?? _user },
      { $set: { ...input } }
    );
    if (!user) throw new Error("user not found");

    return user;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser({ input }, { _user }) {
  try {
    const user = await UserModel.findOneAndDelete({
      _id: input.userId ?? _user,
    });
    if (!user) throw new Error("user not found");
    return user;
  } catch (error) {
    throw error;
  }
}

export async function loginUser({ input }, { _user }) {
  try {
  } catch (error) {
    throw error;
  }
}

export async function logoutUser({ input }, { _user }) {
  try {
  } catch (error) {
    throw error;
  }
}

export async function createPost({ input }, { _user }) {
  try {
    if (_user) throw new Error("user not available");
    const post = new PostModel({ ...input, owner: _user });
    await post.save();
    return post;
  } catch (error) {
    throw error;
  }
}

export async function updatePost({ input }, { _user }) {
  try {
    const post = await PostModel.findOneAndUpdate(
      {
        $and: [{ _id: input.id }, { owner: _user }],
      },
      { ...input }
    );
    if (!post) throw new Error("post not found");
    return post;
  } catch (error) {
    throw error;
  }
}

export async function deletePost({ input }, { _user }) {
  try {
    const post = await PostModel.findOneAndDelete({ _id: input.postId });
    if (!post) throw new Error("post not found");
    return post;
  } catch (error) {
    throw error;
  }
}

export async function createCv({ input }, { _user }) {
  try {
  } catch (error) {
    throw error;
  }
}

export async function updateCv({ input }, { _user }) {
  try {
  } catch (error) {
    throw error;
  }
}

export async function deleteCv({ input }, { _user }) {
  try {
  } catch (error) {
    throw error;
  }
}
