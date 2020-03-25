//use code at main screen 
 
 let counter:any=0;
  const backAction = (navigation:any) => {
    const shortToast = (message: string) => {
      Toast.show(message, {
        duration: Toast.durations.LONG,
       
      });
    };
   
    if (counter > 0) {
      BackHandler.exitApp();
    } else {
      setTimeout(() => {
        counter=0;
        console.log('counter',counter);
      }, 1000);
      console.log("f",counter)
      counter++;
      
      shortToast('Press again to quit the application');
      return true;
    }
    BackHandler.removeEventListener;
      
  };

  useBackButtonHandler(backAction);
