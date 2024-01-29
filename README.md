<br/>
<p align="center">
  <h3 align="center">ArticleApp</h3>

</p>

## Table Of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
    * [Installation](#installation)
* [Architechture](#architechture)
    * [Overall Structure](#overall-structure)
    * [App Component](#app-component)
    * [ArticleList Component](#articlelist-component)
    * [ArticleText Component](#articletext-component)
    * [Search Component](#search-component)
    * [Pagination Component](#pagination-component)
    * [VerticalLine Component](#verticalline-component)
* [Technical Trade-offs](#technical-trade-offs)
* [Contributing](#contributing)
* [Authors](#authors)

## About The Project

ArticleApp is a ReactJS application that contains the list and a detailed view of articles, pulled from dummy data JSON. 

From the list of article titles, an article can be chosen to be open in a more detailed view to read its contents. Once the article is clicked, it is marked as read by changing the background colour of the title container. 

Search bar on the top of the page can be used to look for a specific article through any word in its title, subtitle or content. 

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo

```sh
git clone https://github.com/your_username_/article-app.git
```

2. Install NPM packages

```sh
npm install
```

3. Run the terminal command

```sh
npm start
```

## Architechture and Technology choices

### Overall Structure

* The application is composed of reusable components, 
each responsible for a specific part of the UI.
* Data flow is unidirectional, from parent component (App.js) to 
its children through props, any change in state is propagated upwards.
* Thourgh React Hooks, useState and UseEffect, the state and side effects 
are managed within the functional components.
* Each component is focused on a specific concern of the app (making a 
list of articles, displaying content, pagination, search) which is in line with 
core React principle of separation of concern.

### App Component 

* Used to manage states (useState hook) throughout the app (artciles, selected article, 
searched article and read article), as well as fetching data on mount (useEffect hook) 
from 'ArticleData.json' in /public/data. 
* Responsible for rendering children components of ArticleList, ArticleText, Search and 
VerticalLine (dummy component responsible for making a vertical line for decoration purposes).


### ArticleList Component

* Component used to iterate over the list of articles and renders them a list of items. Also 
responsible for filtering articles by accepting prop (searchedArticle), as well as readArticle prop 
that is triggered on click on the list item containing the article title and undertitle, making the 
background colour different to indicate that article has been read. 
* Renders Pagination component, managing state of currentPage to keep track of the page number
the user is currently on. As well as conditionally calculating the number of pages based on total amount
of articles (filteredArticles) divided by set amount of articlesPerPage prop. Pagination component is rendered only 
if the number of filteredArticles per page exceeds the designated number. 
* Filtering the articles is conditional on the presence of the input, that could be any keywords or symbols throughout 
the title, subtitle or text of the article. 

### ArticleText Component

* Component responsible for rendering the title and the text of an article if it selected, if not - 
displays a message urging to choose an article to view. Dynamically updates when new 
article is chosen by the user. Accepts article prop from the parent component, App.js.

### Search Component

* Component receives props from parent component of searchArticle and setSearchArticle, 
to manage state of searched article. Listens for changes in the input field and updates 
searchArticle prop using the onChange event and passes it to the parent component 'App'. 

### Pagination Component

* Component responsible for rendering pagination controls, allowing user to switch between 
pages of articles. Renders buttons, ranging from page 1 to totalPages (calculated by dividing the 
filteredArticles.length by articlesPerPage), also keeping track of the currentPage and applying corresponding 
styles to make it visually distinctive to the user. 


### VerticalLine Component

* Component containing a single div, that is responsible for rendering a verticle line divider
between ArticleList and ArticleText for visual effect. 


## Technial Trade-offs

Overall, I am satisfied with how the app turned out, given the timeframe. 

Although, I would certainly use a proper News API for populating the 
app with data but given that many of them are nowadays paid and convoluted to use, 
the decision to not do that was made in favor of making a JSON with dummy data.

Certain design choices were made infavour of simplicity and time-saving, I'd like 
to work more in that aspect too to make it more pleasing to the eye. 

Refactoring CSS to make it more concise and possibly use a preprocessor is also 
something that could be done if more time was available, as I am not that familiar with CSS
preprocessors and decided to dedicate time to making sure the app has basic functionality over 
familiarising myself with them. 

More profound and fuller coverage tests would also be beneficial if more time to delve 
deeper into familiarising myself with testing libraries was available. 

Some issues with Search component arise due to the act that article text is made 
through "Lorem Ipsum generator", so sometimes it skews the results due to having a lot 
of fake Latin resembling words or letter combinations from titles/undertitles. 



## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Authors

* **Victoria Rogatinskaya** - *FrontEnd Dev* - [Victoria Rogatinskaya](https://github.com/victoriarog/) - *ArticleApp*

