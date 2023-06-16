document.getElementById("fjs").onclick = function()
{
  // current datetime string in America/Chicago timezone
  let hst = new Date().toLocaleString("en-US", { timeZone: "Pacific/Honolulu" });
  const timeArray = hst.split(" ")
  let time = timeArray[1] + " " + timeArray[2];
  



  let hst2 = new Date(hst);
  const dayarray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let dotw = dayarray[hst2.getDay()-1];

  let full = "It is currently " + time + " on a " + dotw + " in Hawaii!"

  document.getElementById("time").innerHTML = full;

  let sleep = "I am most likely sleeping right now!"
  let sleepwgames = "I am most likely sleeping or playing late night video games!"
  let gogetwork = "I am most likely going to work or getting ready to go to work!!"
  let work = "I am most likely working right now!"
  let leavework = "I am most likely leaving work or getting ready to leave work!"
  let reg = "I am most likely playing video games or hanging out with friends!"
  
  console.log(time.charAt(0))
  let hour = parseInt(time.charAt(0))
  console.log(time.charAt(time.length-2))
  let poa = time.charAt(time.length-2)

  if(dotw == "Thursday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = sleep;
      }
      else
      {
        document.getElementById("wd").innerHTML = reg;
      }

    }

    if( poa == 'A')
    {

    }
  }




  if(hour >=12 && hour <=2 && poa==a && dotw == "Monday")
  {
    document.getElementById("wd").innerHTML = sleepwgames;
  }
  


  if(time.charAt(0) == 11 && dotw == Tuesday)
  {
    document.getElementById("wd").innerHTML = gogetwork;
  }
  





 
};