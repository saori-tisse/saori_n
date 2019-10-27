// imports
// ====================
import * as $ from 'jquery';
import * as THREE from 'three';
import { TweenMax } from 'gsap';

// tab contents
// =====================
$(function () {
  // 初期表示
  $('.tabContents').hide();
  $('.tabContents').eq(0).show();
  $('[tab-item]').eq(0).addClass('active');
  // jsTabItemどれかがクリックされたら該当するページを表示する
  $('[tab-item]').click(function () {
    var index = $('[tab-item]').index(this);
    //現在表示されているタブ、内容を隠す
    $('.tabContents').hide();
    $('[tab-item]').removeClass('active');
    // 選択されたタブ、内容を表示する
    $('.tabContents').eq(index).show();
    $('[tab-item]').eq(index).addClass('active');
  });
});
