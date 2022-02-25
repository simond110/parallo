async  function runAuthQuery(params) {
    const config = {
    url: 'https://cloud.squidex.io/identity-server/connect/token',
    method: 'post',
    data: Qs.stringify({
      grant_type: 'client_credentials',
      client_id: '6213bcf66668e3580b19c3e0',
      client_secret: 'vu19qmwsvqouwkg5hhtxochmyssfifjnwydtt3uo7jex',
      scope: 'squidex-api'
    })
  };
  const bearerToken = await axios(config);  
  const getPlayableUrl = await axios.get(`https://cloud.squidex.io/api/content/parallo/pages/d07abd04-c03f-4d37-8a63-df986d63e624`,
    {
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "authorization": `Bearer ${bearerToken.data.access_token}`
      }
    });
  console.log(getPlayableUrl.data.data);  
  var data = getPlayableUrl.data.data;

  $("#title").text(data.title.iv);
  $("#logotext").text(data.logotext.iv);
  $("#wecandevelop").text(data.wecandevelop.iv);  
  $("#wecandeveloptext").text(data.wecandeveloptext.iv);
  $("#highperformance").text(data.highperformance.iv);
  $("#fastsupport").text(data.fastsupport.iv);
  $("#appmarketing").text(data.appmarketing.iv);
  $("#SubscribeText").text(data.SubscribeText.iv);
  $("#SubscribeTitle").text(data.SubscribeTitle.iv);

  $(this).attr("src", "images/card-front.jpg");
  $("#SubscribeImage").attr('src', 'https://cloud.squidex.io/api/assets/parallo/' + data.SubscribeImage.iv);
  $("#yourapp").attr('src', 'https://cloud.squidex.io/api/assets/parallo/' + data.yourapp.iv);

  $("#vendor").text(data.vendor.iv);
  $("#copyright").html(data.copyright.iv + ' ' + $("#vendor").html());  

}

runAuthQuery();  