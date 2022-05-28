<h1 align="center">Anime Culture (Recommendation System)</h1>

<p align="center">
 <a target="_blank" href="https://animeculture.herokuapp.com/">Link to the App</a>
    ·
 <a target="_blank" href="">Video Demo</a>
</p>
    
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#salient-features">Salient Features</a></li>
        <li><a href="#compatible-platforms">Compatible Platforms</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#navigating-through-the-app">Navigating through the App</a></li><ul>
        <li><a href="#homepage">Homepage</a></li>
        <li><a href="#anime-page">Anime Page</a></li>
      </ul>
    <li><a href="#resources-used">Resources Used</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

- Anime Recommendation System project built during Microsoft Engage 2022 program.
- It is a web application that gives information about Animes, the data is fetched from the <a href="https://kitsu.docs.apiary.io/#">Kitsu API.</a>
- Content-Based recommendations are provided to the user.

### Salient Features

- User can search for an anime and search results will be displayed on the screen.
- Ratings, Episode count, Episode length, status and summary of the anime provided.
- Recommends similar animes on the basis of many factors using KNN algorithm.

### Compatible Platforms

Laptops, Desktops and Tablet PCs

### Built With

- ![Front-end][front-end-shield]
- ![Back-end][back-end-shield]
- ![Tools][tools-shield]

<!-- AGILE METHODOLOGY -->

### The Development Cycle

![Purple and Pink Modern Work From Home Simple Video Presentation](https://user-images.githubusercontent.com/84325400/170771214-aa3c2916-1c95-482d-816a-81e2b0319163.png)

- Phase 1: Studying the working of Recommendation engines. Researching what algorithms streaming Platforms like Netflix and Spotify use.
  Researching about various libraries and tech-stack that can be used to make an Anime Recommendation System.
  After finalizing the dataset API and algorithm and designed the UI.

- Phase 2: Started the development process by taking help from the web. Built a web application using ReactJs and Redux.
  Worked with Python and Django for the first time. Implemented the Nearest Neighbour Algorithm for the Recommendations.
  Encountered lot of bugs which I debugged timely.

- Phase 3: After building a basic Anime Recommendation Web Application, I added additional features.
  Integrated the Front-end and Back-end.
  Deployed the UI/UX and the server to Heroku.

<!-- INSTALLATIONS -->

## Getting Started

To install and run the project on your local system, following are the requirements:

### Prerequisites

Make sure to install node package manager

Install libpq-dev (according to your operating system)
For Ubuntu -

```sh
  sudo apt-get install libpq-dev
```

Install pip

```sh
  sudo apt install python-pip
```

Install virtual environment

```sh
  pip install virtualenv
```

### Installation

To run the application on your local host, perform the following steps:

Create virtual environment and activate it

```sh
  virtualenv env_name
```

```sh
  source env_name/bin/activate
```

Install requirements.txt in the root directory.

```sh
  pip install -r requirements.txt
```

- Run the following commands to start the client side.

```sh
  cd client

  npm install

  npm run build
```

- Run the following commands to start the server side and run it on your local host
  In the root directory -

```sh
  python manage.py runserver
```

<!-- APP TUTORIAL-->

## Navigating Through The App

### Homepage

![Homepage](https://user-images.githubusercontent.com/84325400/170776011-28ac44a1-c4dc-489f-ac19-f627e264f517.jpeg)

### Anime page

![Animepage](https://user-images.githubusercontent.com/84325400/170817634-5433e585-222a-4857-baf0-363f906a09a5.jpeg)

<!-- ACKNOWLEDGEMENTS -->

## Resources Used

- [Introduction to Recommender Systems](https://towardsdatascience.com/introduction-to-recommender-systems-6c66cf15ada)
- [K-Nearest Search Algorithm](<https://towardsdatascience.com/machine-learning-basics-with-the-k-nearest-neighbors-algorithm-6a6e71d01761#:~:text=Summary-,The%20k%2Dnearest%20neighbors%20(KNN)%20algorithm%20is%20a%20simple,that%20data%20in%20use%20grows.>)
- [Kitsu API](https://kitsu.docs.apiary.io/#)
- [Redux Tutorial](https://youtu.be/poQXNp9ItL4)
- [Django-React Integration](https://youtu.be/9dwyXq9G_MQ)

<!--MARKDOWN LINKS-->

[front-end-shield]: https://img.shields.io/badge/Front--end-React%20JS%2C%20Redux%2C%20Bootstrap-blueviolet
[back-end-shield]: https://img.shields.io/badge/Back--end-Python%2C%20Django-blueviolet
[tools-shield]: https://img.shields.io/badge/Tools-Axios-blueviolet
