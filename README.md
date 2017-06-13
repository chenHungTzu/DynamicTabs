### javascript 動態tabview


**   **

Demo:

>**小螢幕展示**
>
>![](../master/images/mobile.PNG)
>
>**大螢幕展示**
>
>![](../master/images/web.PNG)

API:
> 
> 動作 | 回傳格式  | 說明
> ------------ | ------------- | ------------ 
> PTCDynamicTabs() |  function(`int`) | 回傳目前為第幾個tab 

使用範例:

>`html`
>>```
>><link href="~/Content/PTCTabs.css" rel="stylesheet" />
>>
>><div class="container row " style="padding-top:5vh">
>>
>>    <!--RWD condition ctrl-->
>>    <div type="button" class="visible-xs visible-sm hidden-md hidden-lg  btn btn-default >>ptc-dismiss">hide</div>
>>    <!--end RWD condition ctrl -->
>>
>>    <!--dynamic tabs-->
>>    <div class="row ptc-conditions" >
>>        <!--clone block-->
>>        <div clsss="ptc-content-clone" hidden>
>>            <button type="button" class="ptc-cancel" data-toggle="tooltip btn btn->>secondary" data-placement="bottom" title="移除分頁">x</button>
>>
>>            <!--write something in here....-->
>>            <div class="container-fluid">
>>                <div>I am cloned page....</div>
>>            </div>
>>
>>        </div>
>>        <!--end clone block-->
>>
>>        <!--tabs block-->
>>        <ul class="ptc-tabs nav nav-tabs"></ul>
>>       <!--end tabs block-->
>>
>>        <!--content block-->
>>        <div class="ptc-content tab-content"></div>
>>        <!--end content block-->
>>
>>
>>    </div>
>>    <!--end dynamic tabs-->
>></div>


>`javascript`
>>```
>><script type="text/javascript">
>>
>>$('.ptc-tabs').PTCDynamicTabs(function (index) {
>>
>>       //Do something when clicked tab.....
>>        
>>    });
>>.
>>.
>>.
>>```
