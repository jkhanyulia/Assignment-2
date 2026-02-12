ASSIGNMENT 02: SWEET DREAM BAKERY WEBSITE

Name: Julia Khanyukova
Student Number: 101 383 775

1. Client Description & Website's Purpose:

Sweet Dreams is a trendy online-based viral-desserts bakery aiming to target dessert lovers, social media influencers and general youth aged 15-25. Their identity focuses on trendiness and virality, leaning strongly into social-media influenced marketing.

The website serves to:
- Showcase the most trending desserts
- Providing an easy-to-navigate online menu 
- Providing a functional and clear ordering system


2. Changes from Assignment 1:

I worked a lot more on the aesthetics of the website, implementing some of the user feedback I recieved, such as semantic issues with the hero's header text being two different colors and confusing images (I used Sora to generate some that fit the overall vibe a lot better).
Additionally, previously, the user testimonials seemed distracting, since they were previously being shown with linked videos. I changed this to be more clean and simple, instead opting to just highlight the text of the reviews, so that the menu items on the main page can take up a greater amount of space and draw the user's eyes towards that instead of the reviews.

Grid usage: 
- used for .menu-grid to create a menu with cards representing each product

Flexbox usage:
- nav bar layout, usiing justify-content: space-between
- hero section: using justify-content: center & align-items: center
- form section: vertical stacking using flex-direction: column


3. AI Usage Documentation:

In addition to the documented AI usage in the style.css file, I also used ChatGPT to help me go over my code, comparing it to the rubric criteria and help fix up some errors I had. Some notable errrors/suggestions included:
- forgetting to add "display: flex" in the testimonials css before "align-items" & "justify-content", since those two do nothing without the previous declaration
- accidentally writing "font-weight: 'bold';" (with quotation marks)  
- using <p1> as a tag in my HTML; I changed it to <span> instead
- adding focus styling for input, select & button for the form in order.html

