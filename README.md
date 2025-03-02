# Weather App built with Next.js

This is a simple exercise where I consolidate knowledge about Next.js's capabilities of combining SSR and CSR techniques.

Although exercising these techniques with a Weather app may get the repo beyond the statement above, I wanted to seize this opportunity to put in practice some essential techniques, such as API integration, mapping, indexing, sorting, and parsing data.

- The application has a simple place search module that integrates the free version of *Open Street Map* https://nominatim.openstreetmap.org/
- It also uses a search by coordinates weather module from *Open Meteo*, also its free version https://open-meteo.com/

### How does it work?

The app maps the coordinates to a weather search by catching the user's input. The user's input will trigger the search on the Open Street Map API, which will throw results on that search. Then, the user chooses the option that most aligns with his or her intention, which will catch an option that includes the name and coordinates of the place the user is looking for.

Once we get the coordinates of the place, we trigger the Open Meteo API with those coordinates, returning us the specific weather for that exact location. This impressed me with my little knowledge about Weather APIs. My perspective is that this makes Open Meteo API a very powerful weather app.

After we get Open Meteo's response, we parse all the data and map the weather conditions to Weather Icons, which were taken from here: https://bas.dev/work/meteocons

Thank you so much @basmilius, for building those weather icons and exposing them freely to the public; it definitely made my practice more fun.

As a last note, with this exercise, I couldn't help but notice that searching weather of very distant places like the Aconcagua Peak, or the peaks at the Andes Mountains in Venezuela or Colombia with this combination of APIs is indeed easier than searching those places directly in normal weather apps (Apple's, Weather Underground, Weather Channel). I have an obsession about searching for weather data everywhere I go, and in very distant places in Venezuela it wasn't possible to do, at least not before today's technology like Zoom Earth | https://zoom.earth/ for example.

However, on the everyday weather apps, the weather results for small towns in distant regions aren't still very smooth to find. Maybe the freedom to map coordinates to places with these two APIs, instead of just looking through a private vendor's database, makes this fun little feature possible.

Here's a demo to those distant places search:

![image](https://github.com/user-attachments/assets/4fabf347-edb1-4939-9516-9a37364cf4fc)





