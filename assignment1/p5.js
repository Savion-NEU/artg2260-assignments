<!DOCTYPE html>
<!-- saved from url=(0036)https://p5js.org/reference/#/p5/fill -->
<html class=" js pointerevents"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">
    <meta name="description" content="p5.js a JS client-side library for creating graphic and interactive experiences, based on the core principles of Processing.">
    <title tabindex="1">p5.js | reference</title>
    <link rel="stylesheet" href="./p5_files/all.css"><style></style>
    <link rel="stylesheet" href="./p5_files/reference.css">
    <script type="text/javascript" src="./p5_files/5ace315e-3b19-4568-9e85-5bfcb29004c0.js.download"></script>

    <script src="./p5_files/jquery.min.js.download"></script>
    <script>window.jQuery || document.write('<script src="https://p5js.org/assets/js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
    <script src="./p5_files/p5.min.js.download"></script>
    <script src="./p5_files/p5.dom.min.js.download"></script>
    <script src="./p5_files/p5.sound.min.js.download"></script>
    <script src="./p5_files/underscore-min.js.download"></script>
    <script src="./p5_files/backbone-min.js.download"></script>

    <script type="text/javascript" src="./p5_files/ace.js.download"></script><style id="ace_editor">.ace_editor {position: relative;overflow: hidden;font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;font-size: 12px;line-height: normal;direction: ltr;}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_content {position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: text;min-width: 100%;}.ace_dragging, .ace_dragging * {cursor: move !important;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: '';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;text-indent: -1em;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;}.ace_text-input.ace_composition {background: #f8f8f8;color: #111;z-index: 1000;opacity: 1;text-indent: 0;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;white-space: pre;height: 100%;width: 100%;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;}.ace_text-layer {font: inherit !important;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;border-left: 2px solid}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0px;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_smooth-blinking .ace_cursor {-moz-transition: opacity 0.18s;-webkit-transition: opacity 0.18s;-o-transition: opacity 0.18s;-ms-transition: opacity 0.18s;transition: opacity 0.18s;}.ace_editor.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}.ace_line .ace_fold {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.1));background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;display: block;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {-moz-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);-webkit-box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {-moz-transition: opacity 0.4s ease 0.05s;-webkit-transition: opacity 0.4s ease 0.05s;-o-transition: opacity 0.4s ease 0.05s;-ms-transition: opacity 0.4s ease 0.05s;transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {-moz-transition: opacity 0.05s ease 0.05s;-webkit-transition: opacity 0.05s ease 0.05s;-o-transition: opacity 0.05s ease 0.05s;-ms-transition: opacity 0.05s ease 0.05s;transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}</style><style id="ace-tm">.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;border-radius: 2px;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}</style><style>    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }</style>
    <script type="text/javascript" src="./p5_files/mode-javascript.js.download"></script>
    <script type="text/javascript" src="./p5_files/prism.js.download"></script>
    <script type="text/javascript" src="./p5_files/scroll.js.download"></script>
    <script type="text/javascript" src="./p5_files/init.js.download"></script>

  </head>

  <body id="reference" style="">
    <a href="https://p5js.org/reference/#content" class="skip">Skip to content</a>

    <!-- p5*js language buttons -->
    


    <div id="reference-page" class="container">

      <!-- logo -->
      <header id="lockup">
        <a href="https://p5js.org/">
          <img src="./p5_files/p5js.svg" alt="link to p5 home page" id="logo_image" class="logo">
          <div id="p5_logo"></div>
        </a>
        <p class="tagline" style="display:block !important">Processing Intuition times JavaScript power</p>
      </header>

      <!-- site navigation -->
      <div class="column-span">
        <nav role="navigation">
          <ul id="menu">
            <li><a href="https://p5js.org/">Home</a></li>
            <li><a href="https://p5js.org/download/">Download</a></li>
            <li><a href="https://p5js.org/get-started/">Start</a></li>
            <li><a href="https://p5js.org/reference/">Reference</a></li>
            <li><a href="https://p5js.org/libraries/">Libraries</a></li>
            <li><a href="https://p5js.org/learn/">Learn</a></li>
            <li><a href="https://p5js.org/examples/">Examples</a></li>
            <li><a href="https://p5js.org/books/">Books</a></li>
            <li><a href="https://p5js.org/community/">Community</a></li>
            <li><a href="http://forum.processing.org/two/" target="_blank" class="other-link">Forum</a></li>
            <li><a href="http://github.com/processing/p5.js" target="_blank" class="other-link">GitHub</a></li>
            <li><a href="http://twitter.com/p5xjs" target="_blank" class="other-link">Twitter</a></li>
          </ul>
        </nav>
      </div>


      <div class="column-span">
        <section id="content" role="region" label="main content">

          <a href="https://p5js.org/reference/" class="anchor"><h1>Reference</h1></a>

          <div id="search" class="search-wrapper"><span class="twitter-typeahead" style="position: relative; display: inline-block; direction: ltr;"><input type="text" class="form-control input-lg tt-hint" value="" title="search reference" aria-label="search text field" aria-haspopup="false" disabled="" autocomplete="off" spellcheck="false" style="position: absolute; top: 0px; left: 0px; border-color: transparent; box-shadow: none; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255);"><input type="text" class="form-control input-lg tt-input" value="" placeholder="Search the API" title="search reference" aria-label="search text field" aria-haspopup="false" autocomplete="off" spellcheck="false" dir="auto" style="position: relative; vertical-align: top; background-color: transparent;"><pre aria-hidden="true" style="position: absolute; visibility: hidden; white-space: pre; font-family: AvenirNextLTW01-Medium; font-size: 45px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: 0px; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span class="tt-dropdown-menu" style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"><div class="tt-dataset-0"></div></span></span></div>
          <div id="collection-list-nav" style="display: none;"><p>
  <small>
    Can't find what you're looking for? You may want to check out
    <a href="https://p5js.org/reference/#/libraries/p5.dom">p5.dom</a> or
    <a href="https://p5js.org/reference/#/libraries/p5.sound">p5.sound</a>.
    You can download an offline version of the reference <a href="https://p5js.org/offline-reference/p5-reference.zip" target="_blank">here</a>.
  </small>
</p>






  
  
    <dl>
  
  <dd><a href="https://p5js.org/reference/#group-Color">Color</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Constants">Constants</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Conversion">Conversion</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-DOM">DOM</a></dd>
  
    </dl>
  	
  	
  

  
  
    <dl>
  
  <dd><a href="https://p5js.org/reference/#group-Data">Data</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Environment">Environment</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Events">Events</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-IO">IO</a></dd>
  
    </dl>
  	
  	
  

  
  
    <dl>
  
  <dd><a href="https://p5js.org/reference/#group-Image">Image</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Lights, Camera">Lights, Camera</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Math">Math</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Rendering">Rendering</a></dd>
  
    </dl>
  	
  	
  

  
  
    <dl>
  
  <dd><a href="https://p5js.org/reference/#group-Shape">Shape</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Structure">Structure</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Transform">Transform</a></dd>
  
  	
  

  
  
  <dd><a href="https://p5js.org/reference/#group-Typography">Typography</a></dd>
  
    </dl>
  	
  	
  
</div>

          <!--class="container-fluid"-->
          <div id="list" tabindex="2" class="list-wrapper allItems-collection" style="display: none;"></div>
          <div id="item" tabindex="1" class="item-wrapper apidocs" style="display: block;"><h3>fill()</h3>


<div class="example">
  <h4>Example</h4>
  <span class="visuallyhidden">Examples for fill</span>

	<div class="example-content" data-alt="60x60 dark charcoal grey rect with black outline in center of canvas.
60x60 yellow rect with black outline in center of canvas.
60x60 royal blue rect with black outline in center of canvas.
60x60 red rect with black outline in center of canvas.
60x60 pink rect with black outline in center of canvas.
60x60 black rect with black outline in center of canvas.
60x60 light green rect with black outline in center of canvas.
60x60 soft green rect with black outline in center of canvas.
60x60 red rect with black outline in center of canvas.
60x60 dark fushcia rect with black outline in center of canvas.
60x60 blue rect with black outline in center of canvas.">
    
<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 1</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// Grayscale integer value</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">51</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas0" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 dark charcoal grey rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 2</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// R, G &amp; B integer values</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">204</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas1" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 yellow rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 158.3px;"><span class="visuallyhidden">fill example 3</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// H, S &amp; B integer values</span>
<span class="token function">colorMode</span><span class="token punctuation">(</span>HSB<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">204</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas2" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 royal blue rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="6" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 4</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// Named SVG/CSS color string</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas3" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 red rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 5</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// three-digit hexadecimal RGB notation</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'#fae'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas4" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 pink rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 6</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// six-digit hexadecimal RGB notation</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'#222222'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas5" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 black rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 7</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// integer RGB notation</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'rgb(0,255,0)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas6" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 light green rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 8</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// integer RGBA notation</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'rgba(0,255,0, 0.25)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas7" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 soft green rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 9</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// percentage RGB notation</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'rgb(100%,0%,10%)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas8" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 red rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 10</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// percentage RGBA notation</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'rgba(100%,0%,100%,0.5)'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas9" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 dark fushcia rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>

<div class="example_container" style="height: 131.8px;"><span class="visuallyhidden">fill example 11</span>

<pre class="ref  language-javascript"><code class="  language-javascript"><span class="token comment" spellcheck="true">// p5 Color object</span>
<span class="token function">fill</span><span class="token punctuation">(</span><span class="token function">color</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">rect</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre><div class="cnv_div"><canvas id="defaultCanvas10" width="200" height="200" style="width: 100px; height: 100px;"></canvas><span class="visuallyhidden">60x60 blue rect with black outline in center of canvas.</span></div><div class="edit_space"><button value="edit" class="edit_button">edit</button><button value="reset" class="reset_button">reset</button><textarea rows="5" cols="62" style="display: none;"></textarea></div></div>
  </div>
</div> 



<div class="description">
  <h4>Description</h4>

  <span class="description-text"><p>Sets the color used to fill shapes. For example, if you run
fill(204, 102, 0), all subsequent shapes will be filled with orange. This
color is either specified in terms of the RGB or HSB color depending on
the current colorMode(). (The default color space is RGB, with each value
in the range from 0 to 255). The alpha range by default is also 0 to 255.
<br><br>
If a single string argument is provided, RGB, RGBA and Hex CSS color strings
and all named color strings are supported. In this case, an alpha number
value as a second argument is not supported, the RGBA form should be used.
<br><br>
A p5 Color object can also be provided to set the fill color.</p>
</span>

  

  
  

  
  
</div>

<div>
  <h4>Syntax</h4>
  <p>
    
    </p><pre class="  language-javascript"><code class="  language-javascript"><span class="token function">fill</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span>v2<span class="token punctuation">,</span>v3<span class="token punctuation">,</span><span class="token punctuation">[</span>alpha<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>
    
    <pre class="  language-javascript"><code class="  language-javascript"><span class="token function">fill</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span><span class="token punctuation">[</span>alpha<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>
    
    <pre class="  language-javascript"><code class="  language-javascript"><span class="token function">fill</span><span class="token punctuation">(</span>values<span class="token punctuation">)</span></code></pre>
    
    <pre class="  language-javascript"><code class="  language-javascript"><span class="token function">fill</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span></code></pre>
    
  <p></p>
</div>













<p class="label label-success chainable">chainable</p>




<!--  <div class="meta">
    {{#if overwritten_from}}
    <p>Inherited from
      <a href="#">
        {{overwritten_from/class}}
      </a>
      {{#if foundAt}}
      but overwritten in
      {{/if}}
      {{else}}
      {{#if extended_from}}
    <p>Inherited from
      <a href="#">{{extended_from}}</a>:
      {{else}}
      {{#providedBy}}
    <p>Provided by the <a href="../modules/{{.}}.html">{{.}}</a> module.</p>
    {{/providedBy}}
    <p>
      {{#if foundAt}}
      Defined in
      {{/if}}
      {{/if}}
      {{/if}}
      {{#if foundAt}}
      <a href="{{foundAt}}">`{{{file}}}:{{{line}}}`</a>
      {{/if}}
    </p>

    {{#if deprecationMessage}}
    <p>Deprecated: {{deprecationMessage}}</p>
    {{/if}}

    {{#if since}}
    <p>Available since {{since}}</p>
    {{/if}}
  </div>-->


<div class="params">
  <h4>Parameters</h4>
  <table>
  
    <tbody><tr>
    <td>
    
    
      <code class="  language-javascript">v1</code>
     
    
    </td>
    <td>
    
      <span class="param-type label label-info">Number</span>: <p>red or hue value relative to
                                the current color range</p>
 
    
    
    </td>
    </tr>
  
    <tr>
    <td>
    
    
      <code class="  language-javascript">v2</code>
     
    
    </td>
    <td>
    
      <span class="param-type label label-info">Number</span>: <p>green or saturation value
                                relative to the current color range</p>
 
    
    
    </td>
    </tr>
  
    <tr>
    <td>
    
    
      <code class="  language-javascript">v3</code>
     
    
    </td>
    <td>
    
      <span class="param-type label label-info">Number</span>: <p>blue or brightness value
                                relative to the current color range</p>
 
    
    
    </td>
    </tr>
  
    <tr>
    <td>
    
    
      <code class="  language-javascript">alpha</code>
     
    
    </td>
    <td>
    
      <span class="param-type label label-info">Number</span>:  
    
    
    </td>
    </tr>
  
    <tr>
    <td>
    
    
      <code class="  language-javascript">value</code>
     
    
    </td>
    <td>
    
      <span class="param-type label label-info">String</span>: <p>a color string</p>
 
    
    
    </td>
    </tr>
  
    <tr>
    <td>
    
    
      <code class="  language-javascript">values</code>
     
    
    </td>
    <td>
    
      <span class="param-type label label-info">Number[]</span>: <p>an array containing the red,green,blue &amp;
                                and alpha components of the color</p>
 
    
    
    </td>
    </tr>
  
    <tr>
    <td>
    
    
      <code class="  language-javascript">color</code>
     
    
    </td>
    <td>
    
      <span class="param-type label label-info">p5.Color</span>: <p>the fill color</p>
 
    
    
    </td>
    </tr>
  
  </tbody></table>
</div>


<p>

<!--   <div class="meta">
    
    <p>Class: 
    <strong><a href='#/p5'>p5</a></strong></p>
    

  </div> -->


  </p><p class="ref-notice"> If you see any errors or have suggestions, <a href="https://github.com/processing/p5.js/issues">please let us know</a>.</p><p>

  <a style="border-bottom:none !important;" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><img src="./p5_files/88x31.png" style="width:88px"></a>

  
  </p><p style="font-size: 0.75em">Find any typos or bugs? <code>fill()</code> is documented and defined in <a href="https://github.com/processing/p5.js/blob/master/src/color/setting.js#L334" target="_blank"><code>src/color/setting.js</code></a>. Please feel free to <a href="https://github.com/processing/p5.js/edit/master/src/color/setting.js#L334" target="_blank" style="font-family: inherit">edit the file</a> and issue a pull request!</p>
  

<p></p>
</div>
          <div id="file" class="file-wrapper"></div>

        </section>


        <footer>
          <p>p5.js was created by <a href="http://lauren-mccarthy.com/" target="_blank">Lauren McCarthy</a> and is developed by a community of collaborators,
          with support from the <a href="https://processing.org/foundation/" target="_blank">Processing Foundation</a>
          and <a href="http://itp.nyu.edu/itp/" target="_blank">NYU ITP</a>. Identity and graphic design by <a href="http://jereljohnson.com/" target="_blank">Jerel Johnson</a>.
          <a href="https://p5js.org/copyright.html">© Info.</a></p>
        </footer>
      </div><!-- end column-span -->

      <!-- outside of column for footer to go across both -->
      <p class="clearfix"> &nbsp; </p>

      <object type="image/svg+xml" data="./p5_files/thick-asterisk-alone.svg" id="asterisk-design-element" style="transform: rotate(-6.22deg);">
           *<!-- to do: add fallback image in CSS -->
      </object>
    </div>

    <!-- header -->
    <div id="family">
      <p class="left"><a href="http://processing.org/">Processing</a>
        <a class="here" href="https://p5js.org/">p5.js</a>
        <a href="http://py.processing.org/">Processing.py</a>
        <a href="http://android.processing.org/">Processing for Android</a>
      </p>
      <form id="search_form" style="pointer-events:all;" name="search" method="get" action="https://www.google.com/search">
        <input type="hidden" name="as_sitesearch" value="p5js.org">
        <input type="text" name="fn" id="fn" size="20">
        <label for="fn"><input id="search_button" type="submit" value=" " name="Go" alt="submit search"></label>
      </form>

      <p class="right">
        <a href="https://processingfoundation.org/">Processing Foundation</a>
      </p>
    </div>

    <script src="./p5_files/require.min.js.download"></script>
    <script src="./p5_files/prism.js.download"></script>
    <script src="./p5_files/render.js.download"></script>
    <script src="./p5_files/reference.js.download"></script>
    <script type="text/javascript">

    var translations;
    var timeout;

    function updateLanguage() {
      if (translations) {
        $('h1').html(translations['h1']);
        $('.group-name, .subgroup-name').each(function() {
          $(this).text(translations[$(this).text()]);
        });
        var routes = window.location.hash.split('/');
        var obj = routes[1];
        var name = routes[2];
        if (translations[obj] && translations[obj][name]) {
          var entry = translations[obj][name];
          $('.description-text').html('<p>'+entry.description+'</p>');
          $('.returns').html(entry.returns);
          $('.params').find('tr').each(function(i) {
            if (i < entry.params.length) {
              $(this).children('td').eq(1).html(entry.params[i])
            }
          });
        }
      }
      clearTimeout(timeout);
    }


    $(document).ready(function() {
      var routes = window.location.pathname.split('/');
      var lang = routes[1];
      if (lang.length === 2) {
        $.getJSON('/assets/reference/'+lang+'.json', function(data) {
          translations = data;
          if (timeout) clearTimeout(timeout);
          timeout = setTimeout(updateLanguage, 500);
        });
      }
    });

    $(window).bind('hashchange', function() {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(updateLanguage, 500);
    });
    </script>

  

</body></html>