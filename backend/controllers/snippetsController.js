import Snippet from "../models/Snippet.js";

export const getSnippets = async (req, res, next) => {
  try {
    const snippets = await Snippet.find({ visibility: "public" }).populate("owner", "username");
    res.json(snippets);
  } catch (err) {
    next(err);
  }
};

export const createSnippet = async (req, res, next) => {
  try {
    const { title, language, content, tags, visibility } = req.body;
    const snippet = await Snippet.create({
      title,
      language,
      content,
      tags,
      visibility,
      owner: req.user.id
    });
    res.status(201).json(snippet);
  } catch (err) {
    next(err);
  }
};