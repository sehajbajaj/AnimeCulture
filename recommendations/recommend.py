def recommend(data, model, animeId):
    anime = data.iloc[animeId].values.reshape(1, -1)
    recommendations =  model.kneighbors(anime, return_distance=False)
    return recommendations[0]