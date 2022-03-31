package com.livekanvasstreamapp;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // here
public class MainActivity extends ReactActivity {

@Override
protected void onCreate(Bundle savedInstanceState) {
   SplashScreen.show(this); 
  super.onCreate(null);
}
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "LiveKanvasStreamApp";
  }
}
