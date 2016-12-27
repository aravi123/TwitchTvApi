$(document).ready(function(){
	var channels = ["ESL_SC2","FreeCodeCamp","Test_channel"]
	for (var i = 0; i < channels.length; i++) {
		$.get("https://wind-bow.gomix.me/twitch-api/channels/"+channels[i],function(data){
			if (data.game==null) {
				var status = "Offline";
			}
			else{
				var status = data.game+":"+data.status;
			}
			var html = "<li><img src="+data.logo+"><h2 class=channel><a href="+data.url+">"+data.display_name+"</a></h2><h2 class=Content>"+status+"</h2></li>";
			$('.dd').append(html);
		});
	}
});