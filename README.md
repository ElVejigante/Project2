## Marvel Superheroes
Our app allows users to browse the plethora characters populating the Marvel Comics universe.


##############################################################################################################
### Before You Begin
Add you mopbox.com API key to /static/js/config.js.  This will be required for web visualizations.
##############################################################################################################


## Pages
The landing page presents the user with various options
  1. About - the about page credits the designers who crafted this site

  2. Hero Characteristics - this page displays visualizations for various characteristics 
      a. Height vs. weight of characters
      b. Height of all characters
      c. Average height vs. weight by gender
      d. Word cloud of occupations of characters by alignment (Good, Bad, Neutral, Overall/No alliance)
  
  3. Find Your Hero - this page allows the user to filter characters by name

  4. Location - displays a map of the character population

  5. Top 100 Co-Occurrences - displays the interactions of the heros across all appearances
  

## Data
The data supporting these pages was pulled and scraped from sources including:
  1. Marvel Database (https://marvel.fandom.com/wiki/Marvel_Database/)
  2. GeoPy (https://geopy.readthedocs.io/en/stable/)
  3. uszipcode (https://pypi.org/project/uszipcode/)
  4. Charts.js (https://www.chartjs.org/)
  5. Leaflet.js (https://leafletjs.com/)