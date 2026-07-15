const archivedDances = [
  { name: "Good At Being Bad", level: "", music: "Being Bad", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=_mA7yjXUYlE", tutorial: "", info:"" },
  { name: "My Toot Toot", level: "", music: "Don't Mess With My Toot Toot", count: "64", walls: "2", stepsheet: "", demo: "https://youtu.be/KeoQhHiVd5k", tutorial: "", info:"" },
  { name: "Seven Drunken Nights", level: "", music: "Seven Drunken Nights", count: "64", walls: "2", stepsheet: "", demo: "https://www.youtube.com/watch?v=blv9yAfCHqI", tutorial: "", info:"" },
  { name: "Zydeco Bounce", level: "", music: "Zydeco Bounce", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/NJT7R5C/zydeco-bounce", demo: "", tutorial: "", info:"" }
  { name: "AB Dancin' In The Country", level: "Absolute Beginner", music: "Dancin' In The Country - Tyler Hubbard", count: "24", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/167530/ab-dancin-in-the-country", demo: "https://www.youtube.com/watch?v=2B7fB0XYHuA", tutorial: "https://www.youtube.com/watch?v=2B7fB0XYHuA", info: "" },
   { name: "Jealous of the Sun", level: "", music: "Jealous of the Sun", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=W49Opr1rj_A", tutorial: "", info:"" },
  { name: "I Was On A Boat That Day", level: "", music: "I Was On A Boat That Day", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/i-was-on-a-boat-ID152075.aspx", demo: "", tutorial: "", info:"" },
  { name: "Let Me Call You Sweetheart", level: "", music: "Molly Malone", count: "24", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/148146/let-me-call-you-sweetheart", demo: "", tutorial: "", info:"" },
  { name: "Liar", level: "", music: "Liar", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=lJWHHhk1fjM", tutorial: "", info:"" },
  { name: "Lil Boo Thang", level: "", music: "Lil Boo Thang", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/174133/lil-boo-thang", demo: "", tutorial: "", info:"" },
  { name: "Linda Lu", level: "", music: "Linda Lu", count: "48", walls: "2", stepsheet: "", demo: "https://www.youtube.com/watch?v=yzoBDuQNi5s", tutorial: "", info:"" },
  { name: "Little Heartbreak", level: "", music: "Same Heartbreak Different Day", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?t=41s&v=XRNEtScNpRw", tutorial: "", info:"" },
  { name: "Madison, The", level: "", music: "1950's line dance", count: "", walls: "", stepsheet: "", demo: "https://www.youtube.com/watch?v=w6QWoLXJ9Z4", tutorial: "", info:"" },
  { name: "Maria Merengue", level: "", music: "Maria", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/171941/maria-merengue", demo: "", tutorial: "", info:"" },
  { name: "Mas Que Nada", level: "", music: "Mas Que Nada", count: "16", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/154145/mas-que-nada", demo: "", tutorial: "", info:"" },
  { name: "Men In Black/M.I.B.", level: "", music: "Men In Black", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=FX4i9CkYMIs", tutorial: "", info:"" },
  { name: "Morning After", level: "", music: "see The Morning After", count: "", walls: "", stepsheet: "", demo: "", tutorial: "", info:"" },
  { name: "Moving Down to Texas", level: "", music: "Moving Down to Texas", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=bJhUN8mKibE", tutorial: "", info:"" },
  { name: "My First Waltz", level: "", music: "Once Upon a December", count: "24", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/my-first-waltz-ID100217.aspx", demo: "", tutorial: "", info:"" },

  { name: "Neon Moon", level: "", music: "Neon Moon", count: "34", walls: "2", stepsheet: "", demo: "https://www.youtube.com/watch?v=Ael1fQw7jRQ", tutorial: "", info:"" },
  { name: "New York, New York", level: "", music: "New York, New York", count: "24", walls: "4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VRDGAR&mid=7A7C8B623E4FC8108B6A7A7C8B623E4FC8108B6A&q=new+york+new+york+line+dance+video&view=detail", tutorial: "", info:"" },
  { name: "No Problem*", level: "", music: "No Shoes, No Shirt, No Problems", count: "24", walls: "1", stepsheet: "", demo: "", tutorial: "", info:"" },

  { name: "Only Need a Beat", level: "", music: "Dance to the Music", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=jVaD0-xuH6c", tutorial: "", info:"" },

  
  { name: "One Margarita", level: "", music: "See 1 Margarita", count: "", walls: "", stepsheet: "", demo: "", tutorial: "", info:"" },
  

  { name: "Perks", level: "", music: "Perks", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?t=39s&v=8FN6eCnjMvg", tutorial: "", info:"" },
  { name: "Play That Funky Music", level: "", music: "Play That Funky Music White Boy", count: "48", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=uOcdMQlWzGA", tutorial: "", info:"" },
  { name: "Polka, Easy", level: "", music: "Beer Barrel Polka", count: "16", walls: "2", stepsheet: "https://www.copperknob.co.uk/stepsheets/56465/easy-polka", demo: "", tutorial: "", info:"" },
 
   { name: "Reggae Cowboy", level: "", music: "Get Into Raggae Cowboy", count: "48", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=ejAyOEnRpbw", tutorial: "", info:"" },
  
  { name: "Ring on Every Ringer", level: "", music: "Ring on Every Finger", count: "16", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?feature=youtu.be&list=PLH7Qh8ZFEhUd8QIhKRfzaimVhp0TeUglm&v=1vTncu_maWw", tutorial: "", info:"" },
  { name: "Rita’s Waltz", level: "", music: "Any Waltz song", count: "32", walls: "2", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=8EEE03CD64B209BD0EBF8EEE03CD64B209BD0EBF&q=rita%27s+waltz+line+dance+video&view=detail", tutorial: "", info:"" },
  { name: "River of Dreams 2 4 6 AB", level: "", music: "The River of Dreams", count: "16", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=MhNkjbJMrZU", tutorial: "", info:"" },
  { name: "Rock Me Mama", level: "", music: "Wagon Wheel", count: "32", walls: "2", stepsheet: "https://www.copperknob.co.uk/stepsheets/rock-me-mama-ID125078.aspx", demo: "", tutorial: "", info:"" },

{ name: "$how Me the Money", level: "", music: "Easy Tonight", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=kqSDtOb3vvU", tutorial: "", info:"" },
  { name: "Shut Up and Dance EZ", level: "", music: "Shut Up and Dance", count: "16", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/86LH7D4/shut-up-dance-ez", demo: "", tutorial: "", info:"" },
  { name: "Shut Up and Dance", level: "", music: "Shut Up and Dance", count: "40", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=1fkAf2cEsVM", tutorial: "", info:"" },
  
   { name: "Texas Hold 'Em", level: "", music: "Texas Hold 'Em", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=ZxO7OPqfT9k", tutorial: "", info:"" },
 
   { name: "That's How I Get By", level: "", music: "Get By", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=auYd-VGYBLs", tutorial: "", info:"" },
  { name: "The Door", level: "", music: "The Door", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?t=52s&v=RzhkJwQNE9g", tutorial: "", info:"" },
  { name: "The Morning After", level: "", music: "The Morning After", count: "16", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?t=67s&v=FfFTe3M1W04", tutorial: "", info:"" },
  { name: "These Boots", level: "", music: "Honky Tonkin' About", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=-xsQaxD4JLk", tutorial: "", info:"" },
  { name: "Thriller", level: "", music: "Thriller", count: "48", walls: "2", stepsheet: "https://www.copperknob.co.uk/stepsheets/ZMKZ86S/thriller-ez", demo: "", tutorial: "", info:"" },
  { name: "Time Of My Life", level: "", music: "I've Had The Time Of My Life", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/76784/time-of-my-life", demo: "", tutorial: "", info:"" },
  { name: "Today Is Your Birthday", level: "", music: "Today Is Your Birthday", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/JMK9769/today-is-your-birthday", demo: "", tutorial: "", info:"" },
  { name: "Trail Riders Shuffle", level: "", music: "The TrailRiders Shuffle", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/169258/trail-riders-shuffle", demo: "", tutorial: "", info:"" },
  
     { name: "Un Dos Tres", level: "", music: "Un Dos Tres", count: "32", walls: "4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VRDGAR&mid=788FAFA4A3F812A272BF788FAFA4A3F812A272BF&q=un+dos+tres+line+dance+video&qpvt=un+dos+tres+line+dance+video&view=detail", tutorial: "", info:"" },
 

     
  { name: "Wagon Wheel", level: "", music: "Wagon Wheel", count: "32", walls: "4", stepsheet: "https://www.copperknob.co.uk/stepsheets/36D632T/wagon-wheel", demo: "", tutorial: "", info:"" },
  
  { name: "Watermelon Crawl", level: "", music: "The Watermelon Crawl", count: "40", walls: "4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=E56E6F6382A6ACF7773DE56E6F6382A6ACF7773D&q=youtube+line+dance+videos+watermelon+crawl&view=detail", tutorial: "", info:"" },
  { name: "Whatever Lola Wants", level: "", music: "Whatever Lola Wants", count: "96", walls: "2", stepsheet: "https://www.copperknob.co.uk/stepsheets/MHSB32B/whatever-lola-wants-lola-gets", demo: "", tutorial: "", info:"" },
  { name: "When Love Walks In", level: "", music: "aka Fly Love, C'est Magnifique", count: "32", walls: "4", stepsheet: "", demo: "https://www.youtube.com/watch?v=fsmlbIWyuLg", tutorial: "", info:"" },


  ];