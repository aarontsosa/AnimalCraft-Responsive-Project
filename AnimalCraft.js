
// $('a[href="#tiger-tab"]').tab('show') // Select tab by name
// $('a[href="#panda-tab"]').tab('show') // Select tab by name
// $('a[href="#penguin-tab"]').tab('show') // Select tab by name
// $('a[href="#monkey-tab"]').tab('show') // Select tab by name

$("a.tiger-tab").on('click',function(){
    $(".tab-pane").hide();
    $($(this).attr("href")).show();
  });

$("a.monkey-tab").on('click',function(){
    $(".tab-pane").hide();
    $($(this).attr("href")).show();
  });

$("a.panda-tab").on('click',function(){
    $(".tab-pane").hide();
    $($(this).attr("href")).show();
  });

$("a.penguin-tab").on('click',function(){
    $(".tab-pane").hide();
    $($(this).attr("href")).show();
  });



// $('#myTabs a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })

// $('#myTabs2 a').click(function (e) {
//   e.preventDefault()
//   $(this).tab('show')
// })