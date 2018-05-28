package com.moviereact;

import android.content.Intent;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import java.io.File;

public class WelcomeActivity extends AppCompatActivity {
    public final String JS_PATH = getExternalFilesDir(null) + "/patches/";
    public final String JS_BUNDLE_PATH = getExternalFilesDir(null) + "/patches/index.android.bundle";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_welcome);
        File file = new File(JS_BUNDLE_PATH);
        if (file.exists()) {
            Intent intent = new Intent(this, MainActivity.class);
            startActivity(intent);
            finish();
        } else {

        }

    }
}
