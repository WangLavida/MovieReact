/**
 * Created by W.J on 2018/4/11.
 */

import React, {Component} from 'react';
import {
    Text,
    View
} from 'react-native';

export default{
    hotCities:"https://api-m.mtime.cn/Showtime/HotCitiesByCinema.api",
    comingNew:"https://api-m.mtime.cn/Movie/MovieComingNew.api",
    hotMovies:"https://api-m.mtime.cn/PageSubArea/HotPlayMovies.api",
    theatersMovies:"https://api.douban.com/v2/movie/in_theaters",
    news:"https://m.toutiao.com/list/",
    mDetail:"https://ticket-api-m.mtime.cn/movie/detail.api",
}

    //  获取新闻：https://m.toutiao.com/list/?tag=新闻类型&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=时间
    //
    // 获取文章：https://m.toutiao.com/i新闻ID/info/'
    //
    // 获取段子：https://www.toutiao.com/api/article/feed/?category=essay_joke&utm_source=toutiao&widen=1&max_behot_time=1500114422&max_behot_time_tmp=1500114422&tadrequire=true&as=A1F52966E9EEF00&cp=59692E6FD0E09E1
    //
    // 搜索： https://www.toutiao.com/search_content/?offset=相对位置&format=json&keyword=关键词&autoload=true&count=20&cur_tab=1
