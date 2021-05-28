var submitBtn = document.getElementById('searchPlayerBtn');
var playerInput = document.getElementById('text1');
var handle = document.querySelector('.test');
var displayStats = document.querySelector(".guns")

const fetchPlayers = async (query) => {
    const request = await fetch(`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${query}`,
     {
        headers: {
            'TRN-Api-Key': 'b3cdd27a-0b0a-4b51-9114-8bb2834cb715'
        }
    });

    const data = await request.json();
    return {data}
};

const fetchWeapons = async (query) => {
    const request = await fetch(`https://cors-anywhere.herokuapp.com/https://public-api.tracker.gg/v2/csgo/standard/profile/steam/hannsies/segments/weapon`,
     {
        headers: {
            'TRN-Api-Key': 'b3cdd27a-0b0a-4b51-9114-8bb2834cb715'
        }
    });

    const data = await request.json();
    console.log(data.data[0])
    return {data}
};

const showData = () => {

    var yes = fetchPlayers(playerInput.value)
    var guns = fetchWeapons()

    yes.then(res => {     
        const markup = 
        `
        <link rel="stylesheet" href="style.css">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="script1.js" type="text/javascript"></script>
        <link rel="stylesheet" href="style.css">

        <br>


        <div class="container mt-5 mb-5">
        <div class="row g-2">
            <div class="col-md-6">
                <div class="card p-3 px-4 d-flex justify-content-center">
                   <span class="price">${res.data.data.platformInfo.platformUserHandle}</span>
                    <div class="avatar avatar-xxl">
	<img src="${res.data.data.platformInfo.avatarUrl}/20x20" alt="..." class="avatar-img rounded-circle">
</div>
                    <div class="mt-4">
                        <div class="d-flex justify-content-between align-items-center" id="userID"> <span>User ID:</span> <span>${res.data.data.platformInfo.platformUserId}</span> </div>
                    </div>
                    
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="d-flex flex-column">
                        <div class="pricing-1 d-flex justify-content-between">
                            <div> <span class="d-block">Kills</span> <span class="font-weight-bold">${res.data.data.segments[0].stats.kills.displayValue}</span> 
                           <br></br>
                            <span>${res.data.data.segments[0].stats.kills.percentile}%</span>
                            <p>Overall</p>
                            </div>

                            <div> <span class="d-block">Death</span> <span class="font-weight-bold">${res.data.data.segments[0].stats.deaths.displayValue}</span> 
                            <br></br>
                            <span>${res.data.data.segments[0].stats.deaths.percentile}%</span>
                            <p>Overall</p>
                            </div>

                            <div> <span class="d-block">MVP</span> <span class="font-weight-bold">${res.data.data.segments[0].stats.mvp.displayValue}</span> 
                            <br></br>
                            <span>${res.data.data.segments[0].stats.mvp.percentile}%</span>
                            <p>Overall</p>
                            </div>

                            <div class="circle"> <span></span> <span></span> <span></span> <span></span> </div>
                        </div>


                        <div class="pricing-1 d-flex justify-content-between">
                            <div> <span class="d-block">Shots Accuracy:  </span> <span class="font-weight-bold"> ${res.data.data.segments[0].stats.shotsAccuracy.displayValue} </span>
                            <br></br>
                            <span>${res.data.data.segments[0].stats.shotsAccuracy.percentile}%</span>
                            <p>Overall</p>
                            </div>

                            <div> <span class="d-block">Shots Hit:  </span> <span class="font-weight-bold"> ${res.data.data.segments[0].stats.shotsHit.displayValue} </span> 
                            <br></br>
                            <span>${res.data.data.segments[0].stats.shotsHit.percentile}%</span>
                            <p>Overall</p>
                            </div>
                            
                            <div> <span class="d-block">Shots Fired:  </span> <span class="font-weight-bold"> ${res.data.data.segments[0].stats.shotsFired.displayValue} </span> 
                            <br></br>
                            <span>${res.data.data.segments[0].stats.shotsFired.percentile}%</span>
                            <p>Overall</p>
                            </div>

                            <div class="circle"> <span></span> <span></span> <span></span> <span></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    




        <div class="container py-5">
        <div class="row">
      
          <!-- For demo purpose -->
          <!-- END -->
      
          <div class="col-xl-3 col-lg-6 mb-4" id="statCards">
            <div class="rounded-lg p-5 shadow">
              <h2 class="h6 font-weight-bold text-center mb-4">Time Played</h2>
      
              <!-- Progress bar 1 -->

              <!-- END -->
      
              <!-- Demo info -->
              <div class="row text-center mt-4">
                <div class="col-6 border-right">
                  <div class="p font-weight-bold mb-0">${res.data.data.segments[0].stats.timePlayed.displayValue}</div><span class="small text-gray">Last week</span>
                </div>
                <div class="col-6">
                  <div class="h4 font-weight-bold mb-0">${res.data.data.segments[0].stats.timePlayed.percentile}%</div><span class="small text-gray">Overall</span>
                </div>
              </div>
              <!-- END -->
            </div>
          </div>
      
          <div class="col-xl-3 col-lg-6 mb-4">
            <div class="rounded-lg p-5 shadow" id="statCards">
              <h2 class="h6 font-weight-bold text-center mb-4">Win</h2>
      
              <!-- Progress bar 2 -->

              <!-- END -->
      
              <!-- Demo info-->
              <div class="row text-center mt-4">
                <div class="col-6 border-right">
                  <div class="h4 font-weight-bold mb-0">${res.data.data.segments[0].stats.wins.displayValue}</div><span class="small text-gray">Wins</span>
                </div>
                <div class="col-6">
                  <div class="h4 font-weight-bold mb-0">${res.data.data.segments[0].stats.wins.percentile}%</div><span class="small text-gray">Overall</span>
                </div>
              </div>
              <!-- END -->
            </div>
          </div>
      
          <div class="col-xl-3 col-lg-6 mb-4">
            <div class="rounded-lg p-5 shadow" id="statCards">
              <h2 class="h6 font-weight-bold text-center mb-4">Losses</h2>
      
              <!-- Progress bar 3 -->
              <div class="mx-auto" data-value='76'>
                          
              </div>
              <!-- END -->
      
              <!-- Demo info -->
              <div class="row text-center mt-4">
                <div class="col-6 border-right">
                  <div class="h4 font-weight-bold mb-0">${res.data.data.segments[0].stats.losses.displayValue}</div><span class="small text-gray">Last week</span>
                </div>
                <div class="col-6">
                  <div class="h4 font-weight-bold mb-0">${res.data.data.segments[0].stats.losses.percentile}%</div><span class="small text-gray">Overall</span>
                </div>
              </div>
              <!-- END -->
            </div>
          </div>
      
          <div class="col-xl-3 col-lg-6 mb-4">
            <div class="rounded-lg p-5 shadow" id="statCards">
              <h2 class="h6 font-weight-bold text-center mb-4">Win/Lose Percentile</h2>
      
              <!-- Progress bar 4 -->

              <!-- END -->
      
              <!-- Demo info -->
              <div class="row text-center mt-4">
                <div class="col-6 border-right">
                  <div class="h4 font-weight-bold mb-0">${res.data.data.segments[0].stats.wlPercentage.displayValue}</div><span class="small text-gray">Last week</span>
                </div>
                <div class="col-6">
                  <div class="h4 font-weight-bold mb-0">${res.data.data.segments[0].stats.wlPercentage.percentile}%</div><span class="small text-gray">Overall</span>
                </div>
              </div>
              <!-- END -->
            </div>
          </div>
        </div>
      </div>`;
        handle.insertAdjacentHTML('beforeend', markup);
    })

   
}

const clearStats = () => {
    handle.innerHTML = "";
    displayStats.innerHTML = "";
}


submitBtn.addEventListener('click', function(){
    showData();
    clearStats();
})

// function clicking(){

//     var yes = fetchPlayers(playerInput.value)
//     var guns = fetchWeapons()
//     var displayName = document.getElementById("test")
//     var displayGun = document.getElementById("guns")
//     var displayAccuracy = document.getElementById("accuracy")
//     var displayFired = document.getElementById("fired")
//     var displayHits = document.getElementById("hit")

//     // var display

//     yes.then(res => {
//         // var avatar = JSON.stringify(res.data.data[0].avatarUrl)
//         // console.log(avatar)
//         // var img = document.createElement('img');
//         // img.src = avatar;

//         // document.body.appendChild(img);
        
//         displayName.innerHTML = JSON.stringify(res.data.data[0].platformUserHandle)
//     })

//     guns.then(res => {
//         // var avatar = JSON.stringify(res.data.data[0].avatarUrl)
//         // console.log(avatar)
//         // var img = document.createElement('img');
//         // img.src = avatar;

//         // document.body.appendChild(img);
        
//         displayGun.innerHTML = JSON.stringify(res.data.data[0].attributes.key)
//         displayAccuracy.innerHTML = JSON.stringify(res.data.data[0].stats.shotsAccuracy.displayValue)
//         displayFired.innerHTML = JSON.stringify(res.data.data[0].stats.shotsFired.displayValue)
//         displayHits.innerHTML = JSON.stringify(res.data.data[0].stats.shotsHit.displayValue)


//         console.log(res.data.data[0].attributes.key)
//     })
// }


var searchBG = document.getElementById('layered')

window.addEventListener("scroll", function(){
    let offset = window.pageXOffset;
    searchBG.style.backgroundPositionX = offset *  + "px";
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});