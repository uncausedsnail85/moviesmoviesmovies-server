import model from "./model.js";

export const createMovie = (movie) => model.create(movie);
export const findAllMovies = () => model.find();
export const findMovieByDocId = (DocId ) => model.findById(DocId );
export const findMovieByTmdbId = (tmdbId) => model.findOne({ tmdbId: tmdbId });
export const findMovieByTitle = (title) =>
    model.findOne({ title: title });
export const updateMovie = (DocId, movie) =>
    model.updateOne({ _id: DocId }, { $set: movie });
export const deleteMovie = (DocId) => model.deleteOne({ _id: DocId });