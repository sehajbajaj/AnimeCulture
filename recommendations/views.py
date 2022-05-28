from typing import final
from django.shortcuts import render

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .recommend import recommend

import pandas as pd

import json
import pickle
import warnings
warnings.filterwarnings('ignore')

# Loading Dataset
data = pd.read_csv('animes.csv')
data.drop(['Unnamed: 0'], axis=1, inplace=True)

# Loading Model
model_file = open('nn_model.pkl', 'rb')
model = pickle.load(model_file)

# Create your views here.


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'GET API Overview': 'api/v1/overview',  # Overview to the django framework
        'GET Anime Recommendations': 'api/v1/anime/:id/recommendations'  # Recommendations
    }
    return Response(api_urls)


@api_view(['GET'])
# Function to Recommend Animes when id of the current anime is provided
def recommendAnimes(request, id):
    final_df = data[[col for col in data.columns if data[col].dtype != 'O']]
    final_df = pd.get_dummies(final_df)
    try:
        ind = recommend(final_df, model, id)
        recommendations = data.iloc[ind[1:]][[
            'title_en', 'poster_image', 'description']].to_json(orient='index')
    except:
        return Response({
            'success': False
        })
    return Response({
        'success': True,
        'anime': id,
        'recommendations': json.loads(recommendations)
    })
