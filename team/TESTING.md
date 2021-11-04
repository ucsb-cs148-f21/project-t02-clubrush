List at a minimum: <br />
1) how you implemented the unit test requirement from the previous lab (which testing library, which part(s) of the code, etc.), <br />
2) your plans regarding unit tests going forward (it’s ok to not go all in with unit tests, but document and reason your decision.), <br />
3) how you satisfied the component/integration/end-to-end testing requirement from this lab (which testing library, which part(s) of the code, etc.), <br />
4) your plans regarding higher-level testing going forward (it’s again ok to not commit to an integrated testing solution, but document and reason your decision). <br />
------- take out the above at some point after completion ---- <br />
  - [ ] complete, delete above
  
# Testing 
We implemented the unit test requirement using Jest and React Testing Library, and tested for the Searchbar on the homepage. <br />
Our plans regarding the unit tests going forward are to test to make sure that the Club data is displayed correctly, like the images, the names, and the links to the official club websites or social media. <br />
We satisfied the component/integration/end-to-end testing requirement from this lab by using Jest and React Testing Library and tested that the search bar correctly displays the clubs when searched. For example, if you search up data science, the dropdown menu from the search bar will show "data science". ---- TO DO ~! ---- <br />
Our plans regarding higher-level testing going forward are to implement an integration test with React Testing Library and msw to mock a user. When he clicks on one of the bubbles, it will navigate him to the club page. We are also thinking of making a test that tests the button, where the user gets to submit a review and after clicking the "submit" button, his review will be posted on the website. ---- TO DO ~! ---- <br />
 
