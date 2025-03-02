# Weather App built with Next.js

This is a simple exercise where I consolidate my knowledge of Next.js’s ability to combine SSR and CSR techniques.

Although building a weather app might make the repository more complex than initially intended, I seized the opportunity to put into practice essential techniques such as API integration, mapping, indexing, sorting, and data parsing.

The application includes a simple place search module that integrates with the free version of Open Street Map (https://nominatim.openstreetmap.org/).
It also uses a weather module that searches by coordinates from Open Meteo, also in its free version (https://open-meteo.com/).

### How Does It Work?

The app captures the user's input and uses it to trigger a search on the Open Street Map API, which returns results matching the query. The user then selects the option that best matches their intended location, which provides the name and coordinates of that place.

Once the coordinates are obtained, the app calls the Open Meteo API with those values, which returns the specific weather for that location. I was pleasantly surprised by what could be achieved with my modest knowledge of weather APIs—this makes the Open Meteo API a very powerful tool for building weather apps.

After receiving the response from Open Meteo, we parse the data and map the weather conditions to icons taken from Meteocons.

A big thank you to @basmilius for creating these weather icons and making them freely available to the public—it certainly made my project more enjoyable.

As a final note, while working on this exercise I couldn’t help but notice that searching for weather in remote locations—such as Aconcagua Peak or the Andes Mountains in Venezuela or Colombia—is much easier with this combination of APIs than with standard weather apps (Apple’s, Weather Underground, Weather Channel). I’m obsessed with tracking weather data wherever I go, and in remote areas of Venezuela it used to be nearly impossible—until technologies like Zoom Earth emerged.

However, in everyday weather apps, finding weather information for small towns in distant regions can still be challenging. Perhaps the ability to directly map coordinates to places using these two APIs—rather than relying solely on a private vendor's database—makes this fun little feature possible.

Feel free to test the app here: https://weather-app-theta-dun.vercel.app





