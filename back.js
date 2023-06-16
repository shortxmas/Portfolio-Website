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

  let sleep = "I am sleeping right now!"
  let sleepwgames = "I am most likely sleeping or playing late night video games right now!"
  let gogetwork = "I am most likely going to work or getting ready to go to work!!"
  let work = "I am most likely working right now!"
  let leavework = "I am most likely leaving work or getting ready to leave work!"
  let reg = "I am most likely playing video games, programming or hanging out with friends!"
  let reg2 = "I am most likely playing video games or programming right now!"
  let workbreak = "I am most likely on work break right now!"
  
  console.log(time.charAt(0))
  let hour = parseInt(time.charAt(0))
  console.log(time.charAt(time.length-2))
  let poa = time.charAt(time.length-2)

  if(dotw == "Monday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = sleep;
      }
      else if(hour=9 || hour==10 || hour==11)
      {
        document.getElementById("wd").innerHTML = reg2;
      }
      else
      {
        document.getElementById("wd").innerHTML = reg;
      }

    }
    else if(poa == 'A')
    {
      if(hour == 12 || hour == 1 || hour == 2)
      {
        document.getElementById("wd").innerHTML = sleepwgames;
      }
      else
      {
        document.getElementById("wd").innerHTML = sleep;

      }

    }
  }

  if(dotw == "Tuesday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = gogetwork;
      }
      else if(hour == 10)
      {
        document.getElementById("wd").innerHTML = leavework;
      }
      else if(hour ==11)
      {
        document.getElementById("wd").innerHTML = reg2;
      }
      else if(hour ==5)
      {
        document.getElementById("wd").innerHTML = workbreak;
      }

      else
      {
        document.getElementById("wd").innerHTML = work;
      }

    }
    else if(poa == 'A')
    {
      if(hour == 12 || hour == 1 || hour == 2)
      {
        document.getElementById("wd").innerHTML = sleepwgames;
      }
      else if(hour==11)
      {
        document.getElementById("wd").innerHTML = gogetwork;
      }
      else
      {
        document.getElementById("wd").innerHTML = sleep;

      }

    }
  }

  if(dotw == "Wednesday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = sleep;
      }
      else if(hour=9 || hour==10 || hour==11)
      {
        document.getElementById("wd").innerHTML = reg2;
      }
      else
      {
        document.getElementById("wd").innerHTML = reg;
      }

    }
    else if(poa == 'A')
    {
      if(hour == 12 || hour == 1 || hour == 2)
      {
        document.getElementById("wd").innerHTML = sleepwgames;
      }
      else
      {
        document.getElementById("wd").innerHTML = sleep;

      }

    }
  }


  if(dotw == "Thursday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = sleep;
      }
      else if(hour=9 || hour==10 || hour==11)
      {
        document.getElementById("wd").innerHTML = reg2;
      }
      else
      {
        document.getElementById("wd").innerHTML = reg;
      }

    }
    else if(poa == 'A')
    {
      if(hour == 12 || hour == 1 || hour == 2)
      {
        document.getElementById("wd").innerHTML = sleepwgames;
      }
      else
      {
        document.getElementById("wd").innerHTML = sleep;

      }

    }
  }

  if(dotw == "Friday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = sleep;
      }
      else if(hour=9 || hour==10 || hour==11)
      {
        document.getElementById("wd").innerHTML = reg2;
      }
      else
      {
        document.getElementById("wd").innerHTML = reg;
      }

    }
    else if(poa == 'A')
    {
      if(hour == 12 || hour == 1 || hour == 2)
      {
        document.getElementById("wd").innerHTML = sleepwgames;
      }
      else
      {
        document.getElementById("wd").innerHTML = sleep;

      }

    }
  }

  if(dotw == "Saturday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = gogetwork;
      }
      else if(hour == 10)
      {
        document.getElementById("wd").innerHTML = leavework;
      }
      else if(hour ==11)
      {
        document.getElementById("wd").innerHTML = reg2;
      }
      else if(hour ==5)
      {
        document.getElementById("wd").innerHTML = workbreak;
      }

      else
      {
        document.getElementById("wd").innerHTML = work;
      }

    }
    else if(poa == 'A')
    {
      if(hour == 12 || hour == 1 || hour == 2)
      {
        document.getElementById("wd").innerHTML = sleepwgames;
      }
      else if(hour==11)
      {
        document.getElementById("wd").innerHTML = gogetwork;
      }
      else
      {
        document.getElementById("wd").innerHTML = sleep;

      }

    }
  }

  if(dotw == "Sunday")
  {
    if(poa == 'P')
    {
      if(hour ==12)
      {
        document.getElementById("wd").innerHTML = gogetwork;
      }
      else if(hour == 10)
      {
        document.getElementById("wd").innerHTML = leavework;
      }
      else if(hour ==11)
      {
        document.getElementById("wd").innerHTML = reg2;
      }
      else if(hour ==5)
      {
        document.getElementById("wd").innerHTML = workbreak;
      }

      else
      {
        document.getElementById("wd").innerHTML = work;
      }

    }
    else if(poa == 'A')
    {
      if(hour == 12 || hour == 1 || hour == 2)
      {
        document.getElementById("wd").innerHTML = sleepwgames;
      }
      else if(hour==11)
      {
        document.getElementById("wd").innerHTML = gogetwork;
      }
      else
      {
        document.getElementById("wd").innerHTML = sleep;

      }

    }
  }




 
  





 
};