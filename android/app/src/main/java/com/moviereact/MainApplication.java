package com.moviereact;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.rnfs.RNFSPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication {
  public static String JS_PATH;
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNFSPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Nullable
    @Override
    protected String getJSBundleFile() {
      File file = new File(JS_PATH+"/bundle/index.android.bundle");
      if(file != null && file.exists()){
        Log.i("1","1");
        return JS_PATH+"/bundle/index.android.bundle";
      }else{
        Log.i("2","2");
        return super.getJSBundleFile();
      }
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    Log.i("getReactNativeHost","getReactNativeHost");
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Log.i("onCreate","onCreate");
    JS_PATH = getExternalFilesDir(null) + "/patches/";
    SoLoader.init(this, /* native exopackage */ false);
  }
}
