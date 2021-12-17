Klondike Gold Rush is a Greed-like game developed for a technical interview with Alaska Airlines.

Assumptions:
- Users cannot score twice for the same roll. For example, when a user rolls [1,2,1,1,3], 
they score 1000 for the triple 1s, not 1300 (1000 for the triple 1s plus 300 for 3 single 1s).
This was implied by the examples but not stated directly in the rules.

Questions:
- How would you change the program to roll a different n-sided die?
- How would you change the program to roll a different number of dice?
- How would you implement persistent or cumulative scores?

Different Paths I considered:
- I considered using an map instead of an array to keep track of the number of values rolled. The array stores the numberof times a value was rolled at the index of the value, the map would use the value as a key and the number rolled as the value of the key-value pair.Accessing and changing elements in an array is slightly cleaner than those operations for sets, but maps have other benefits. When rollCounts is an array, it is safer to pre-define all possible values that can be rolled. This guarantees worst-case space complexity of O(n) where n is the number of values that can be rolled. In contrast, using a map might have a better space complexity,since you would only need key-value pairs for the values a user rolls. However, implementing this would haveincrease the greatly increased the code complexity of calculateScores(), and in this project, I valued codecleanliness over space efficiency.
- I considered using Python or C++ instead of Javascript. I am much more familiar with Python or C++; I only coded in Javascript/HTML/CSS when I took AP Computer Science in sophomore year of high school. Choosing to developmy program using languages I hadn't used in five years was a difficult decision. I knew that I would be camping while developing this program, and I would not have access to the internet, greatly reducing the types of features I could implement. I decided to focus on a GUI for the project, since I could develop that without needinginternet. But to make a GUI, I either had to go back to Javascript so I could use HTML and CSS, or use Python GUI extensions that I had never touched before.
- There were lots of features I would have liked to implement if I had time and internet access. In particular,
I would have liked to implement a leaderboard (using JSON) and true random rolls (making calls to an API 
like random.org).
