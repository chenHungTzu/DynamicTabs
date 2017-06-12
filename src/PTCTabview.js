(function ($) {
    'use strict';

    if ($ === null || typeof $ === 'undefined') {
        console.error('jQuery required not found.');
        return;
    }


    $.fn.PTCDynamicTabs = function (callback) {

        //找到ul
        var $target = $(this);

        //找到content
        var $content = $(this).next();

        //找到待複製區塊
        var $clone = $(this).prev();

        //基本驗證
        if (!$target.is('ul'))
            throw 'this element is not ul';

        if (!$content.is('div') || !$content.is('.ptc-content'))
            throw 'this element is not div or ptc-content';

        //tab序號
        var index = 1;

        recoveryTag();

        //配合小螢幕的控制ui
        InitMobileActions();

        //Tab的html
        function newTab() {

            var className = (!lastUl() || lastUl().length == 0) ? "active" : "";

            return "<li class='" + className + " ptc-li '>" +
                   "<a class='ptc-tab-ch c" + index + "'" + ' data-toggle="tab" ' + " href='#c" + index + "'>page"+index+"</a></li>"


            //return `<li class="${className} ptc-li"><a class="ptc-tab-ch c${index}" data-toggle="tab"  href="#c${index}">查詢條件${index}</a></li>`;
        }

        //content的html
        function newContent() {
            var className = (!lastContentChild() || lastContentChild().length == 0) ? "in active" : "";

            return "<div id='c" + index + "' class='ptc-content-ch tab-pane fade " + className + "'>" + $clone.html() + "</div>";

            //return `<div id="c${index}" class="ptc-content-ch tab-pane fade ${className}">${$clone.html()}</div>`;
        }

        //tag的html
        function tag() {

            return "<li><a class='ptc-add-tag' data-toggle='tab'>+</a></li>";

        }


        function lastUl() {

            return $target.find('li').last();

        }

        function lastContentChild() {

            return $content.find('.ptc-content-ch').last();
        }

        function recoveryTag() {

            if (!lastUl() || lastUl().length == 0) {
                $target.append(tag());
            } else {
                lastUl().parent().append(tag());
            }

            $('.ptc-add-tag').click(function () {
                addNew(this);
            });

        }

        function addNew(tab) {

            addNewTab(tab);

            addNewContent()

            callback(index);

            index++;

        }

        function addNewTab(tab) {

            $(tab).parent().remove();

            if (!lastUl() || lastUl().length == 0) {
                $target.append(newTab());
            } else {
                lastUl().parent().append(newTab());
            }


            recoveryTag();
        }

        function addNewContent(content) {
            if (!lastContentChild() || lastContentChild().length == 0) {
                $content.append(newContent());
            } else {
                lastContentChild().parent().append(newContent());
            }
            $('.ptc-cancel').click(function () {

                var content = $(this).parent().last();

                $(content).remove();

                var id = content.attr('id');

                //var className = `.${content.attr('id')}`;

                $target.find('.'+id).parent().remove();

                $target.find('.ptc-li > a').first().click();

            });


        }

        //小螢幕控制ui
        function InitMobileActions() {

            $('.ptc-dismiss').click(function () {


                if ($('.ptc-conditions').is(":visible")) {

                    $(this).text('open');

                    $('.ptc-conditions').hide(500).css({ visibility: "hidden", display: "" });
                } else {

                    $(this).text('hide');

                    $('.ptc-conditions').show(500).css({ visibility: "visible", display: "" });
                }


            });


        }
        $('.ptc-add-tag').click();
    }


    $.fn.ReductionDynamicTabs = function (options) {

        var $form = $(this);

        if (!Array.isArray(options.array)) { return; }

        if ($form.length <= 0 || !$form.is('form')) { throw '"form" is not a <form>'; }

        options.refill = options.refill || function () { };

        options.array.forEach(function (data, index, Array) {
            if (index >= 1)
                $('.ptc-add-tag').click();

            options.refill(data, index);

        });

    }


})(jQuery);


