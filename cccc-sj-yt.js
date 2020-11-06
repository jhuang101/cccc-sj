window.onload = () => {
  const day = 5; //Sunday is 0. Sunday - Saturday : 0-6

  const startHH = 12; // start hour (0-24) ten o'clock
  const startMM = 30; // start miniute

  const endHH = 12; //end hour one o'clock
  const endMM = 36; //end minute

  setInterval(() => {
    //get pacific time
    const timeNow = new Date(Date.now() - 3600 * 8);

    let withinTimeInterval = false;

    if(timeNow.getDay() === day){
      const startTime = new Date(timeNow);
      startTime.setHours(startHH);
      startTime.setMinutes(startMM);

      const endTime = new Date(timeNow);
      endTime.setHours(endHH);
      endTime.setMinutes(endMM);
      if(startTime <= timeNow && endTime >= timeNow){
        withinTimeInterval = true;
      }
    }

    if(withinTimeInterval){
        console.log("in execution");
        if(document.getElementById("yt-pl-el__iframe")){
          //the iframe already exist, do nothing , done!
        }
        else {
          const customYT = document.getElementById("yt-pl-el");
          if(customYT){
            const ytEl = document.createElement('iframe');
            ytEl.style.width = "1600px";
            ytEl.style.height = "800px";
          
            ytEl.setAttribute("id", "yt-pl-el__iframe");
            ytEl.setAttribute("src", "https://www.youtube.com/embed/live_stream?channel=UCQV51aZWOgsPmsk8M12h0ew");

            customYT.appendChild(ytEl);
          }
        }
      
    }
    else {
      //The following code will remove the youtube from the website immediately if the current time is pass end time. 
      /* 
      const ytEl = document.getElementById("yt-pl-el__iframe");
      if(ytEl){
        const customYT = document.getElementById("yt-pl-el");
        if(customYT){
          customYT.removeChild(ytEl);
        }
      }
      */
    }

  }, 1000);
};


