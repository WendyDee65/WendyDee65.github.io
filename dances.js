const dances = [
  // ===== 1 =====
  { name: "1 Margarita", level: "", music: "One Margarita", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=eM__o29Ngnc&t=24s", tutorial: "" },
  { name: "11 Beers", level: "", music: "11 Beers", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/161082/11-beers-ab", demo: "", tutorial: "" },
  { name: "3 Tequila Floor", level: "", music: "3 Tequila Floor", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=ReIkczu-Qb0&t=1s", tutorial: "" },
  { name: "3 Tequila Floor AB", level: "", music: "3 Tquila Floor", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=fqjcSFnkmOE&t=3s", tutorial: "" },
  { name: "2 Happy", level: "", music: "Happy Hour", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/2-happy-ID79396.aspx", demo: "", tutorial: "" },

  // ===== A =====
  { name: "A Bar Song", level: "", music: "A Bar Song (Tipsy)", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=6WUNB-EQbsc", tutorial: "" },
  { name: "AA", level: "", music: "AA", countWall: "32/4", stepsheet: "", demo: "", tutorial: "" },
  { name: "Across the Room", level: "", music: "You Look Like You Love Me", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=fq3L9zbd8_A", tutorial: "" },
  { name: "After Hours", level: "", music: "No demo available", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/186672/ab-after-hours", demo: "", tutorial: "" },

  // ===== B =====

  { name: "Baby I Wanna Know", level: "", music: "Hey Baby", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=yAKJ5w6qIfA", tutorial: "" },
  { name: "Back on Texas Time", level: "", music: "Texas Time", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=db0fkKuYZ04", tutorial: "" },
  { name: "Bang Bang", level: "", music: "(EZ) Bang Bang", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=MZUrcbiX4t0", tutorial: "" },
  { name: "Beach Chair", level: "", music: "Beach Chair", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=2GdXPg3-R2s", tutorial: "" },
  { name: "Best Of My Boo", level: "", music: "Lil Boo Thang", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=5s&v=qMH78cC305A", tutorial: "" },
  { name: "Better When I'm Dancin'", level: "", music: "Better When I'm Dancin'", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=UHmvwTzUUwY", tutorial: "" },
  { name: "Black Velvet", level: "", music: "Black Velvet", countWall: "32/1", stepsheet: "", demo: "https://www.youtube.com/watch?t=9s&v=pW5gXKOk5yA", tutorial: "" },
  { name: "Blurred Lines", level: "", music: "Blurred Lines", countWall: "64/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=7EF74DA76C95C6E79BB77EF74DA76C95C6E79BB7&q=blurred+lines+line+dance+video&view=detail", tutorial: "" },
  { name: "Body Like a Back Road", level: "", music: "Body Like a Back Road", countWall: "16/2", stepsheet: "", demo: "https://video.search.yahoo.com/search/video?fr=tightropetb&p=body+like+a+back+road+EZ+line+dance", tutorial: "" },
  { name: "Boots Don't AB EZ", level: "", music: "Boots Don't", countWall: "16/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=o3ndxIacOVg&t=31s", tutorial: "" },
  { name: "Boot Scootin' Boogie", level: "", music: "Boot Scootin’ Boogie", countWall: "46/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VDRVRV&mid=07D9ADB097988E7D4F5007D9ADB097988E7D4F50&q=youtube+line+dance+videos+watermelon+crawl&view=detail", tutorial: "" },
  { name: "Boots on Bars", level: "", music: "Boots on Bars", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=E4suHJE74R8", tutorial: "" },
  { name: "Boots on the Ground (with clacker fan)", level: "", music: "Boots on the Ground", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=9NTpCApxBGE", tutorial: "" },
  { name: "Bossa Nova", level: "", music: "Blame It On The Bossa Nova", countWall: "64/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=hadL59L56ZY&feature=youtu.be", tutorial: "" },
  { name: "Bringing It Back", level: "", music: "We're Bringing It Back", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=39s&v=ZIDnFl67TCM", tutorial: "" },
  { name: "Drinkaby", level: "", music: "Drinkaby", countWall: "48/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=79s&v=_Sm2vEW-9Fs", tutorial: "" },
  { name: "Brown Eyed Girl EZ", level: "", music: "Brown Eyed Girl", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=5xBs14HRnL4", tutorial: "" },
  { name: "Brown Eyed Girl", level: "", music: "Brown Eyed Girl", countWall: "48/1", stepsheet: "", demo: "https://www.youtube.com/watch?v=ir9h3TaYNWo", tutorial: "" },

  // ===== C =====

  { name: "Cab Driver", level: "", music: "Cab Driver", countWall: "24/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/cab-driver-ID92788.aspx", demo: "", tutorial: "" },
  { name: "Cajun Cha Cha", level: "", music: "Down at the Twist and Shout", countWall: "16/1", stepsheet: "", demo: "https://www.youtube.com/watch?v=6tqIdzCV250", tutorial: "" },
  { name: "Cake By The Ocean", level: "", music: "Cake By The Ocean", countWall: "32/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/ez-cake-by-the-ocean-ID109398.aspx", demo: "", tutorial: "" },
  { name: "Calum's Rise", level: "", music: "Rise", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=oN6MYHVml_8", tutorial: "" },
  { name: "CC Shuffle", level: "", music: "I'm That Kind of Girl", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/100203/cc-shuffle", demo: "", tutorial: "" },
  { name: "Cheeseburger", level: "", music: "Cotton Eyed Joe", countWall: "32/Partner", stepsheet: "", demo: "https://www.youtube.com/watch?t=7s&v=GQqiHNJBYFI", tutorial: "" },
  { name: "Chicken Walk Jive", level: "", music: "Chicken Walk Jive", countWall: "64/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=BADAFE81FD1CB32851E8BADAFE81FD1CB32851E8&q=chicken+walk+jive+line+dance+video&view=detail", tutorial: "" },
  { name: "Coastin’", level: "", music: "Lord of the Dance", countWall: "40/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VRDGAR&mid=1CD4EF56DD122A5EF6281CD4EF56DD122A5EF628&q=coastin+line+dance+video&view=detail", tutorial: "" },
  { name: "Colours of the Wind", level: "", music: "Colours of the Wind", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=fLtMJx-ICPE", tutorial: "" },
  { name: "Come Dance With Me", level: "", music: "Come Dance With Me", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/come-dance-with-me-ID59703.aspx", demo: "", tutorial: "" },
  { name: "Cool Whip", level: "", music: "Let It Whip", countWall: "32/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=BE6F5EB60495158A2AB5BE6F5EB60495158A2AB5&q=cool+whip+line+dance+video&view=detail", tutorial: "" },
  { name: "Corn", level: "", music: "Corn", countWall: "16/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/corn-ab-ID152847.aspx", demo: "", tutorial: "" },
  { name: "Cotton Eyed Joe", level: "", music: "Cotton Eyed Joe", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/cotton-eye-joe-ID97731.aspx", demo: "", tutorial: "" },
  { name: "Country As Can Be", level: "", music: "Country As a Boy Can Be", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/81667/country-as-can-be", demo: "", tutorial: "" },
  { name: "Cowboy Boogie", level: "", music: "Man! I Feel Like A Woman", countWall: "24/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/cowboy-cha-cha-ID59491.aspx", demo: "", tutorial: "" },
  { name: "Cowboy Cha Cha", level: "", music: "Neon Moon", countWall: "20/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/cowboy-cha-cha-ID59491.aspx", demo: "", tutorial: "" },
  { name: "Cowboy Charleston", level: "", music: "Any Way The Wind Blows", countWall: "32/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=E88E17FC310E868C285AE88E17FC310E868C285A&q=Scotter+Lee+cowboy+charleston+lline+dance+video&view=detail", tutorial: "" },
  { name: "Cowgirl's Twist", level: "", music: "What The Cowgirl's Do", countWall: "32/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=WRVORC&PC=HCTS&aqs=edge..69i57j0l6.5587j0j1&cvid=7f5a9195f4194f4690f9d316d7cfa237&mid=60E2482F548C91862E0660E2482F548C91862E06&mmscn=vwrc&pglt=2083&q=cowgirl+twist+like+dance&view=detail", tutorial: "" },
  { name: "Crusin’", level: "", music: "Playa Silencio", countWall: "32/1", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=DB6172E94EB1091CD88ADB6172E94EB1091CD88A&q=crusin%27+line+dane+video&view=detail", tutorial: "" },
  { name: "Cupid Shuffle", level: "", music: "Cupid Shufflle", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=Of4K4cq_n88", tutorial: "" },
  { name: "Cut A Rug", level: "", music: "Little by Little", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=TgRYpA0qNi8", tutorial: "" },
  // ===== D =====

  { name: "Damn!!!!!", level: "", music: "Damn!", countWall: "48/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=17s&v=z79WqZp2RtQ", tutorial: "" },
  { name: "Dance The Night", level: "", music: "Dance The Night", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=2I-4RAyE1mc", tutorial: "" },
  { name: "Dancin' In The Country", level: "", music: "Dancin' In The Country", countWall: "24/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/167530/ab-dancin-in-the-country", demo: "", tutorial: "" },
  { name: "Dancing Queen", level: "", music: "Dancing Queen", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=H4yx5x7ieyI", tutorial: "" },
  { name: "Despacito", level: "", music: "Despacito", countWall: "64/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VDRVRV&mid=5F8561BFB9386E59D85D5F8561BFB9386E59D85D&q=despacito+line+dance+tutorial&view=detail", tutorial: "" },
  { name: "Dizzy", level: "", music: "Dizzy", countWall: "32/4", stepsheet: "", demo: "", tutorial: "" },
  { name: "Do It Like This", level: "", music: "Do It Like This", countWall: "16/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/124544/do-it-like-this", demo: "", tutorial: "" },
  { name: "Dolly Would", level: "", music: "Dolly Would", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=733JUhitEfI", tutorial: "" },
  { name: "Do Ya Love Me?", level: "", music: "Do You Love Me", countWall: "48/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=DaKDMcRLV1Q", tutorial: "" },
  { name: "Dream Lover", level: "", music: "Dream Lover", countWall: "64/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=pBLLb7BOnKQ", tutorial: "" },
  { name: "Drinkaby", level: "", music: "Drinkaby", countWall: "48/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=ux7H81qFdN8", tutorial: "" },
  { name: "Drunk (And I Don't Wanna Go Home)", level: "", music: "Drunk (And I Don't Wanna Go Home)", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/drunk-and-i-dont-wanna-go-home-ID149837.aspx", demo: "", tutorial: "" },

  // ===== E =====

  { name: "Easy Flowers", level: "", music: "Flowers", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/168505/easy-flowers", demo: "", tutorial: "" },
  { name: "Electric Slide", level: "", music: "Dancer's Den", countWall: "18/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=32555DE49837D23FD87932555DE49837D23FD879&q=electric+slide+line+dance+video&view=detail", tutorial: "" },
  { name: "Empty", level: "", music: "Love Somebody", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=lxFpOn-OhzU", tutorial: "" },
  { name: "Everybody Dance!", level: "", music: "Everybody Dance", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=KmjwnfFd-7M", tutorial: "" },
  { name: "Everybody Wanna", level: "", music: "Everybody Wanna", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/everybody-wanna-ID133159.aspx", demo: "", tutorial: "" },
  { name: "Ex's and Oh's", level: "", music: "See X's & O's", countWall: "", stepsheet: "", demo: "", tutorial: "" },
  { name: "Eye Candy", level: "", music: "Candyman", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/55349/eye-candy", demo: "", tutorial: "" },
  { name: "Eyes 4 U", level: "", music: "I Don't Want Nobody To Have My Love But You", countWall: "48/1", stepsheet: "", demo: "https://www.youtube.com/watch?v=dDGj3QyQxak", tutorial: "" },

  // ===== F =====

  { name: "Fancy Like", level: "", music: "Fancy Like", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/fancy-like-ID152252.aspx", demo: "", tutorial: "" },
  { name: "Fast EZ", level: "", music: "Fast", countWall: "16/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/fast-ez-ID115588.aspx", demo: "", tutorial: "" },
  { name: "Fireball", level: "", music: "See Shake It (Fireball)", countWall: "", stepsheet: "", demo: "", tutorial: "" },
  { name: "Fishing in the Dark", level: "", music: "Fishin' In the Dark", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?t=177s&v=8Ns0A-500_U", tutorial: "" },
  { name: "Little Flowers", level: "", music: "Flowers", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/168537/little-flowers", demo: "", tutorial: "" },
  { name: "Fishing in the Dark", level: "", music: "Fishin' in the Dark", countWall: "32/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/105272/fishing-in-the-dark", demo: "", tutorial: "" },
  { name: "Fly Love", level: "", music: "See When Love Walks In", countWall: "", stepsheet: "", demo: "", tutorial: "" },
  { name: "Footloose", level: "", music: "Footloose", countWall: "32/4", stepsheet: "", demo: "https://nortonsafe.search.ask.com/search?chn=1300&ctype=videos&doi=2017-12-1&geo=&guid=daec78dc-7b37-45ad-a90a-36cbc2996c40&o=APN12178&p2=%5EEQ%5Efd00us%5E&page=1&prt=nis&q=footloose+line+dance+video&tpr=sbt&ver=22.11.2.7&vidId=8xzxXxOEd5E&vidOrd=3", tutorial: "" },

    // ===== G =====

  { name: "Glass of Wine", level: "", music: "Cry To Me", countWall: "16/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=cXQrf-MIQbY", tutorial: "" },
  { name: "Get On Your Feet", level: "", music: "We're On Our Way", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=twAk24q1fkM", tutorial: "" },
  { name: "Get Your Kicks", level: "", music: "Get Your Kicks on Route 66", countWall: "48/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/get-your-kicks-ID80398.aspx", demo: "", tutorial: "" },
  { name: "Giddy-Up on Cowboy", level: "", music: "Git Your Cowboy On", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=66uOd3daI0k", tutorial: "" },
  { name: "Ghost Trail", level: "", music: "Zorba", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/53823/ghost-train", demo: "", tutorial: "" },
  { name: "Gin & Tonic", level: "", music: "Love Drunk", countWall: "32/4", stepsheet: "", demo: "", tutorial: "" },
  { name: "Give Me Your Tempo", level: "", music: "Tempo", countWall: "32/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/161193/give-me-your-tempo", demo: "", tutorial: "" },
  { name: "Gives Me Shivers", level: "", music: "Shivers", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/154517/gives-me-shivers", demo: "", tutorial: "" },
  { name: "Going Blonde", level: "", music: "Going Blonde", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?t=2s&v=mRmm7aMgJxM", tutorial: "" },
  { name: "Good At Being Bad", level: "", music: "Being Bad", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=_mA7yjXUYlE", tutorial: "" },
  { name: "Gypsy Queen", level: "", music: "Gypsy Queen", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=4s&v=YqtO87TqGQU", tutorial: "" },

  // ===== H =====

  { name: "Half Past Tipsy", level: "", music: "1, 2 Many", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=2s&v=Ca14l_aC9rw", tutorial: "" },
  { name: "Happy", level: "", music: "Because I'm Happy", countWall: "64/1", stepsheet: "https://www.copperknob.co.uk/stepsheets/happy-4-beginners-ID97571.aspx", demo: "", tutorial: "" },
  { name: "Head Over Cowboy Boots", level: "", music: "Head Over Boots", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/168617/head-over-cowboy-boots", demo: "", tutorial: "" },
  { name: "Heel, Toe, Rodeo", level: "", music: "Cowboy Up", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=TnWPMIl-TH8", tutorial: "" },
  { name: "Hoedown", level: "", music: "Hoedown", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=orx9KdYEMGw", tutorial: "" },
  { name: "Homecoming", level: "", music: "Homecoming", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=TjX2s_SvcW0", tutorial: "" },
  { name: "Honky Tonk Highway", level: "", music: "see \"That\" Honky Tonk Highway", countWall: "", stepsheet: "", demo: "", tutorial: "" },

  // ===== I =====

  { name: "I Love A Rainy Night", level: "", music: "I Love A Rainy Night", countWall: "32/4", stepsheet: "", demo: "https://video.search.yahoo.com/yhs/search?fr=yhs-iba-1&hsimp=yhs-1&hspart=iba&p=i+love+a+rainy+night+line+dance+video", tutorial: "" },
  { name: "Imelda's Way", level: "", music: "Inside Out", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=XbqFj_Vuk9I", tutorial: "" },
  { name: "In-Vince-Ible", level: "", music: "Young Man's Town", countWall: "64/4", stepsheet: "", demo: "https://video.search.yahoo.com/search/video?fr=tightropetb&p=in-vince-ible+line+dance+video", tutorial: "" },
  { name: "I Sold My Soul", level: "", music: "Suit and Tie (Sixteen Tons)", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=32s&v=h5qA4oZo8xc", tutorial: "" },
  { name: "I Was On A Boat That Day", level: "", music: "I Was On A Boat That Day", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/i-was-on-a-boat-ID152075.aspx", demo: "", tutorial: "" },

  // ===== J =====

  { name: "Jambalaya EZ", level: "", music: "Jambalaya", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=zAQZ24DoTxY", tutorial: "" },
  { name: "Jambalaya", level: "", music: "Jambalaya", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/jambalaya-ID49391.aspx", demo: "", tutorial: "" },
  { name: "Jealous of the Sun", level: "", music: "Jealous of the Sun", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=W49Opr1rj_A", tutorial: "" },
  { name: "Jerusalema", level: "", music: "Jerusalema", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/143546/jerusalema", demo: "", tutorial: "" },
  { name: "Just a Two Steppin'", level: "", music: "Amigo", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/119245/just-a-two-steppin", demo: "", tutorial: "" },

  // ===== K =====

  { name: "K is For Kicks", level: "", music: "Feel It Still", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=2s&v=dugtHOkNH1I", tutorial: "" },
  { name: "Keep It Simple", level: "", music: "Keep It Simple", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=XqIZ62Q40Mw", tutorial: "" },

  // ===== L =====

  { name: "Lady in Red", level: "", music: "Lady in Red", countWall: "32/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/lady-in-red-ez-ID118129.aspx", demo: "", tutorial: "" },
  { name: "Lay Low", level: "", music: "Lay Low", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=1zKrMcvzQ6A", tutorial: "" },
  { name: "Let Me Call You Sweetheart", level: "", music: "Molly Malone", countWall: "24/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/148146/let-me-call-you-sweetheart", demo: "", tutorial: "" },
  { name: "Liar", level: "", music: "Liar", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=lJWHHhk1fjM", tutorial: "" },
  { name: "Lil Boo Thang", level: "", music: "Lil Boo Thang", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/174133/lil-boo-thang", demo: "", tutorial: "" },
  { name: "Linda Lu", level: "", music: "Linda Lu", countWall: "48/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=yzoBDuQNi5s", tutorial: "" },
  { name: "Little Heartbreak", level: "", music: "Same Heartbreak Different Day", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=41s&v=XRNEtScNpRw", tutorial: "" },
  { name: "Lonely Drum", level: "", music: "Lonely Drum", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=3s&v=2cGvEXTOq7c", tutorial: "" },
  { name: "Love Potion 666", level: "", music: "Love Potion 666", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=39s&v=VPmY5QWu6TM", tutorial: "" },

    // ===== M =====

  { name: "Made in Mexico", level: "", music: "Made in Mexico", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=bx5f336n1eo", tutorial: "" },
  { name: "Madison, The", level: "", music: "1950's line dance", countWall: "", stepsheet: "", demo: "https://www.youtube.com/watch?v=w6QWoLXJ9Z4", tutorial: "" },
  { name: "Mamma Maria", level: "", music: "Rhiannon", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=EScJ481h_Jw", tutorial: "" },
  { name: "Margaritaville", level: "", music: "Margaritaville", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/170645/margaritaville", demo: "", tutorial: "" },
  { name: "Maria Merengue", level: "", music: "Maria", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/171941/maria-merengue", demo: "", tutorial: "" },
  { name: "Mas Que Nada", level: "", music: "Mas Que Nada", countWall: "16/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/154145/mas-que-nada", demo: "", tutorial: "" },
  { name: "Men In Black/M.I.B.", level: "", music: "Men In Black", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=FX4i9CkYMIs", tutorial: "" },
  { name: "Morning After", level: "", music: "see The Morning After", countWall: "", stepsheet: "", demo: "", tutorial: "" },
  { name: "Moving Down to Texas", level: "", music: "Moving Down to Texas", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=bJhUN8mKibE", tutorial: "" },
  { name: "Mr. Lonely", level: "", music: "Mr. Lonely", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?feature=youtu.be&v=P-hpA9wwIw4", tutorial: "" },
  { name: "My Dancing Queen", level: "", music: "Dancing Queen", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/125214/abba-my-dancing-queen", demo: "", tutorial: "" },
  { name: "My First Waltz", level: "", music: "Once Upon a December", countWall: "24/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/my-first-waltz-ID100217.aspx", demo: "", tutorial: "" },
  { name: "My Toot Toot", level: "", music: "Don't Mess With My Toot Toot", countWall: "64/2", stepsheet: "", demo: "https://youtu.be/KeoQhHiVd5k", tutorial: "" },

  // ===== N =====

  { name: "Neon Moon", level: "", music: "Neon Moon", countWall: "34/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=Ael1fQw7jRQ", tutorial: "" },
  { name: "New York, New York", level: "", music: "New York, New York", countWall: "24/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VRDGAR&mid=7A7C8B623E4FC8108B6A7A7C8B623E4FC8108B6A&q=new+york+new+york+line+dance+video&view=detail", tutorial: "" },
  { name: "No Problem*", level: "", music: "No Shoes, No Shirt, No Problems", countWall: "24/1", stepsheet: "", demo: "", tutorial: "" },

  // ===== O =====

  { name: "One Margarita", level: "", music: "See 1 Margarita", countWall: "", stepsheet: "", demo: "", tutorial: "" },
  { name: "One More Silver Dollar", level: "", music: "Everything I Love", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=-f1l53LUHVk", tutorial: "" },
  { name: "Only Need a Beat", level: "", music: "Dance to the Music", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=jVaD0-xuH6c", tutorial: "" },

  // ===== P =====

  { name: "Perks", level: "", music: "Perks", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=39s&v=8FN6eCnjMvg", tutorial: "" },
  { name: "Play That Funky Music", level: "", music: "Play That Funky Music White Boy", countWall: "48/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=uOcdMQlWzGA", tutorial: "" },
  { name: "Polka, Easy", level: "", music: "Beer Barrel Polka", countWall: "16/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/56465/easy-polka", demo: "", tutorial: "" },
  { name: "Power Jam", level: "", music: "Any East Coast Swing song", countWall: "24/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=84CAC0C7E6F951F09CB984CAC0C7E6F951F09CB9&q=power+jam+line+dance+video&view=detail", tutorial: "" },

  // ===== Q =====

  // ===== R =====

  { name: "Raised Like That", level: "", music: "Raised Like That", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=_NFUvWDfyZE", tutorial: "" },
  { name: "Rattlesnake Kiss", level: "", music: "Ain't in Kansas Anymore", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=l_4FwpHVBEU", tutorial: "" },
  { name: "Real Men Cry", level: "", music: "Cry, Lee Brice", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=wgGSV730ErE", tutorial: "" },
  { name: "Reggae Cowboy", level: "", music: "Get Into Raggae Cowboy", countWall: "48/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=ejAyOEnRpbw", tutorial: "" },
  { name: "Right Foot First", level: "", music: "Right Foot First", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=woasm8NhQs4", tutorial: "" },
  { name: "Ring on Every Ringer", level: "", music: "Ring on Every Finger", countWall: "16/4", stepsheet: "", demo: "https://www.youtube.com/watch?feature=youtu.be&list=PLH7Qh8ZFEhUd8QIhKRfzaimVhp0TeUglm&v=1vTncu_maWw", tutorial: "" },
  { name: "Rita’s Waltz", level: "", music: "Any Waltz song", countWall: "32/2", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=8EEE03CD64B209BD0EBF8EEE03CD64B209BD0EBF&q=rita%27s+waltz+line+dance+video&view=detail", tutorial: "" },
  { name: "River of Dreams 2 4 6 AB", level: "", music: "The River of Dreams", countWall: "16/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=MhNkjbJMrZU", tutorial: "" },
  { name: "Rock Me Mama", level: "", music: "Wagon Wheel", countWall: "32/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/rock-me-mama-ID125078.aspx", demo: "", tutorial: "" },
    // ===== S =====

  { name: "Senorita La-La-La", level: "", music: "Senorita", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=2s&v=OilQ26V7Xzo", tutorial: "" },
  { name: "Seven Drunken Nights", level: "", music: "Seven Drunken Nights", countWall: "64/2", stepsheet: "", demo: "https://www.youtube.com/watch?v=blv9yAfCHqI", tutorial: "" },
  { name: "Shake It (Fireball)", level: "", music: "Fireball", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=q7cfZo7GSQ4", tutorial: "" },
  { name: "She's a Natural (Country Girl)", level: "", music: "Natural", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=YpgLkB2pFbg", tutorial: "" },
  { name: "Shivers", level: "", music: "See Gives Me Shivers", countWall: "", stepsheet: "", demo: "", tutorial: "" },
  { name: "$how Me the Money", level: "", music: "Easy Tonight", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=kqSDtOb3vvU", tutorial: "" },
  { name: "Shut Up and Dance EZ", level: "", music: "Shut Up and Dance", countWall: "16/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/86LH7D4/shut-up-dance-ez", demo: "", tutorial: "" },
  { name: "Shut Up and Dance", level: "", music: "Shut Up and Dance", countWall: "40/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=1fkAf2cEsVM", tutorial: "" },
  { name: "Simplemente", level: "", music: "Bye-Bye-Civera", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/75095/simplemente", demo: "", tutorial: "" },
  { name: "Some More Of It", level: "", music: "Feels Right (I Love It)", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=O42--jBmpUw", tutorial: "" },
  { name: "Somethin' Bout a Woman", level: "", music: "Somethin' Bout a Woman", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=75s&v=0E2q_x_NaBg", tutorial: "" },
  { name: "Something In The Water", level: "", music: "Something in the Water", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=3QnoMDn2UpA", tutorial: "" },
  { name: "Southern Soul Bounce", level: "", music: "Southern Soul Bounce", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/166769/southern-soul-bounce", demo: "", tutorial: "" },
  { name: "Stand By Me", level: "", music: "Stand By Me", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=bKBYr0ACiAM", tutorial: "" },
  { name: "Storm & Stone", level: "", music: "Run", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/S4BR33V/storm-and-stone", demo: "", tutorial: "" },
  { name: "Stray Cat Strutting", level: "", music: "Stray Cat", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=2id-uvjCx80", tutorial: "" },
  { name: "Strummingbird", level: "", music: "One More", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=cVX_24-Gav0", tutorial: "" },
  { name: "Swingin' Thing", level: "", music: "Saturday In The Park", countWall: "32/1", stepsheet: "", demo: "https://www.youtube.com/watch?v=77UN1cAH-Ao", tutorial: "" },

  // ===== T =====

  { name: "Ten Step", level: "", music: "Cajun Moon", countWall: "Beg 18/1", stepsheet: "https://www.copperknob.co.uk/stepsheets/HP9SV8M/ten-step-lp", demo: "", tutorial: "" },
  { name: "Texas Hold 'Em", level: "", music: "Texas Hold 'Em", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=1s&v=ZxO7OPqfT9k", tutorial: "" },
  { name: "That Honky Tonk Highway", level: "", music: "Honky Tonk Highway", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/CB8VKHC/that-honky-tonk-highway", demo: "", tutorial: "" },
  { name: "That's How I Get By", level: "", music: "Get By", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=auYd-VGYBLs", tutorial: "" },
  { name: "The Door", level: "", music: "The Door", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=52s&v=RzhkJwQNE9g", tutorial: "" },
  { name: "The Morning After", level: "", music: "The Morning After", countWall: "16/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=67s&v=FfFTe3M1W04", tutorial: "" },
  { name: "These Boots", level: "", music: "Honky Tonkin' About", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=-xsQaxD4JLk", tutorial: "" },
  { name: "Thriller", level: "", music: "Thriller", countWall: "48/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/ZMKZ86S/thriller-ez", demo: "", tutorial: "" },
  { name: "Time Of My Life", level: "", music: "I've Had The Time Of My Life", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/76784/time-of-my-life", demo: "", tutorial: "" },
  { name: "Today Is Your Birthday", level: "", music: "Today Is Your Birthday", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/JMK9769/today-is-your-birthday", demo: "", tutorial: "" },
  { name: "Trail Riders Shuffle", level: "", music: "The TrailRiders Shuffle", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/169258/trail-riders-shuffle", demo: "", tutorial: "" },
  { name: "Tush Push", level: "", music: "Pink Cadillac", countWall: "40/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=CB677C117ECB3FA193F7CB677C117ECB3FA193F7&q=tush+push+line+dance+video&view=detail", tutorial: "" },
  { name: "Twenty Two (22)", level: "", music: "You Look Like You Love Me", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=69yPKvMnO6w", tutorial: "" },
  { name: "Two Step", level: "", music: "Two Step", countWall: "16/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/9MW66SL/two-step", demo: "", tutorial: "" },

  // ===== U =====

  { name: "Un Dos Tres", level: "", music: "Un Dos Tres", countWall: "32/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VRDGAR&mid=788FAFA4A3F812A272BF788FAFA4A3F812A272BF&q=un+dos+tres+line+dance+video&qpvt=un+dos+tres+line+dance+video&view=detail", tutorial: "" },
  { name: "Uptown Funky", level: "", music: "Uptown Funk", countWall: "32/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=53315E73CA09573CE7A153315E73CA09573CE7A1&q=uptown+fund+line+dance+video&view=detail", tutorial: "" },

  // ===== V =====

  // ===== W =====

  { name: "Wagon Wheel", level: "", music: "Wagon Wheel", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/36D632T/wagon-wheel", demo: "", tutorial: "" },
  { name: "Waltz Across Texas", level: "", music: "Waltz Across Texas", countWall: "48/1", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=CE134AF6B3147101B49DCE134AF6B3147101B49D&q=waltz+across+texas+line+dance+video&view=detail", tutorial: "" },
  { name: "Watermelon Crawl", level: "", music: "The Watermelon Crawl", countWall: "40/4", stepsheet: "", demo: "https://www.bing.com/videos/search?FORM=VIRE&mid=E56E6F6382A6ACF7773DE56E6F6382A6ACF7773D&q=youtube+line+dance+videos+watermelon+crawl&view=detail", tutorial: "" },
  { name: "Wave On Wave", level: "", music: "Wave On Wave", countWall: "32/2", stepsheet: "", demo: "https://www.youtube.com/watch?t=38s&v=moklaSzRVAM", tutorial: "" },
  { name: "Well, Yee Haw!", level: "", music: "Yee Haw", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=KStQhscdt28", tutorial: "" },
  { name: "We're Good to Go", level: "", music: "Good To Go", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?t=8s&v=np7AL78iCcM", tutorial: "" },
  { name: "Whatever Lola Wants", level: "", music: "Whatever Lola Wants", countWall: "96/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/MHSB32B/whatever-lola-wants-lola-gets", demo: "", tutorial: "" },
  { name: "When Love Walks In", level: "", music: "aka Fly Love, C'est Magnifique", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=fsmlbIWyuLg", tutorial: "" },
  { name: "Wild and Easy", level: "", music: "Wild", countWall: "32/1", stepsheet: "", demo: "https://www.youtube.com/watch?v=Ln-waDJqs4g", tutorial: "" },

  // ===== X =====

  { name: "X's & O's", level: "", music: "Ex's and Oh's", countWall: "32/2", stepsheet: "https://www.copperknob.co.uk/stepsheets/RSQWW7H/xs-os", demo: "", tutorial: "" },

  // ===== Y =====

  // ===== Z =====

  { name: "Ziggy", level: "", music: "I Wanna Dance With Somebody", countWall: "32/4", stepsheet: "", demo: "https://www.youtube.com/watch?v=w-xf5KMx0NU", tutorial: "" },
  { name: "Zorba", level: "", music: "See Ghost Train", countWall: "", stepsheet: "", demo: "", tutorial: "" },
  { name: "Zydeco Bounce", level: "", music: "Zydeco Bounce", countWall: "32/4", stepsheet: "https://www.copperknob.co.uk/stepsheets/NJT7R5C/zydeco-bounce", demo: "", tutorial: "" }
];