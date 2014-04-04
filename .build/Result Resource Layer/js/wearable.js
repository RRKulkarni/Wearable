
/* Global declaration*/
var SubCategoryData = {
			  "CORE": ["Flying dutchess",
				  		"High Fives Exercise",
				  		"Seagulls",
				  		"Reverse Crunch",
				  		"Mountain Climber",
				  		"Diamond push up",
				  		"Dumbell side bend",
				  		"Double Crunch",
				  		"Swiss ball crunch",
				  		"Medicine ball - standing parallel throw",
				  		"Reverse handwalk",
				  		"Plank with lift arm",
				  		"Front pillar bridge (basic bridge)",
				  		"Handwalk",
				  		"Lateral 'pillar' bridge - jumping jack (lateral leg raise)",
				  		"Laternal pillar bridge - dynamic (lateral hip dip)",
				  		"Pillar bridge with arm lift",
				  		"Marching pillar bridge (bridge with posterior leg raise)"],
			  "ARMSSHOULDERS": ["Hit Man Exercise",
			                    "High Fives Exercise",
			                    "Seagulls Exercise ",
			                    "Push-Up Exercise to Stand",
			                    "Plyometric Push-Up to Stand",
			                    "Diamond Pushup Exercise",
			                    "Seated Dumbbell Hammer Curl",
			                    "Overhead Dumbbell Tricep Extension",
			                    "Lat Pulldown",
			                    "Incline Dumbbell Fly",
			                    "Dumbbell Pullover",
			                    "Seated Overhead Dumbbell Tricep Extension",
			                    "Reverse Incline Dumbbell Row",
			                    "Medicine Ball Standing Parallel Throw",
			                    "Medicine Ball Overhead Pass - Standing",
			                    "Medicine Ball Standing Chest Pass"],
			  "CHESTBACK": ["Pushup to Stand",
			                "Plyometric Pushup to Stand",
			                "Diamond Pushup",
			                "Lat Pulldown",
			                "Incline Dumbbell Fly",
			                "Dumbbell Pullover",
			                "Medicine Ball Standing Chest Pass",
			                "Seagulls",
			                "Superman Exercise with Towel Extension",
			                "Bent Over Raise to Bicep Curl"],
			   "LEGS":["Tuck Jumps",
			           "Squat Press",
			           "Mountain Climber",
			           "Lying Hamstring Press Exercise",
			           "Inverted Hamstring Exercise",
			           "Mini Band Walk with Lateral Straight Leg",
			           "Rear Lunge to Upright Row",
			           "Redux Alternating Lunge"],
	           "TOTALBODY":["Squat Press",
			           "Pushup to Stand",
			           "Mountain Climber",
			           "Diamond Pushup",
			           "Lateral 'pillar' bridge - jumping jack (lateral leg raise)",
			           "Side Lunge to Lateral Raise",
			           "Rear Lunge to Upright Row",
			           "Rear Lunge to Upright Row"], 
	           "UPPERBODY":["Squat Press",
	 			           "Pushup to Stand",
	 			           "Mountain Climber",
	 			           "Diamond Pushup",
	 			           "Lateral 'pillar' bridge - jumping jack (lateral leg raise)",
	 			           "Side Lunge to Lateral Raise",
	 			           "Rear Lunge to Upright Row",
	 			           "Rear Lunge to Upright Row"],
	          "LOWERBODY":["Tuck Jumps",
				           "Lying Hamstring Press",
				           "Inverted Hamstring Exercise",
				           "Mini Band Walk with Lateral Straight Leg",
				           "Front Pillar Bridge",
				           "Redux Alternating Lunge",
				           "Alternating Lunge",
				           "Glute Bridge - One Leg"]
			};

var listSize = 0;
var count =1;

var SclistSize = 0;
var ScCount =1;
var currentId = "";
var CurrentSC;

	//Handler for document ready.
	$(document).ready(function() {
	  $("img").click(function(){
		 if(this.id=="prevbtn"){
	 			moveCategory("prev");
   		 }else if(this.id == "nextbtn"){
   		 		moveCategory("next");
   		 }else if(this.id == "scprevbtn"){
   		 		moveSubCategory("prev");
   		 }else if(this.id == "scnextbtn"){
   		 		moveSubCategory("next");
   		 }else if(this.id == "catselect"){
   			 /*Need to write code to get current category and pass to next screen*/
			
   			 var item =$("#categories > li").get(count -1);
   			 currentId = item.id;
   		
   			 $.each(SubCategoryData, function( key, val ) {
   				 if(key == currentId){
   					CurrentSC =  val;
   				 }
   			 	});
   			
   			 //Need to change the code here
   			 	$.mobile.changePage("#pageSubCategories", "fade");
   		 }else if(this.id =="playvid"){
   		 		$.mobile.changePage("#pageVideo", "fade");
   		 }else if(this.id == "scatselect"){
   		 		$.mobile.changePage("#pageContent", "fade");
   		 }else if(this.id == "backbutton"){
   			$.mobile.changePage("#pageSubCategories", "fade");
   		 }else{
   		 	
   		 }			
	  });
	  
	  $("#pageVideo").on("swipeleft",function(){
		  $.mobile.changePage("#pageContent", "fade");
	  });
	  
	});
	
	
	//Handler for loading categories page.
	function hideSplash() {
		$.mobile.changePage("#pageCategories", "fade");
		loadCategoryData();
	}
	function loadSubCategoryData(){
		var htmlString ="";
		for(var i=0; i<CurrentSC.length; i++){
			htmlString = htmlString + '<li id="SC'+i+'">'
			    +'<div align="center">'
			    	+'<font size="9" class="fontfamily" >'+CurrentSC[i]+'</font>'
			    +'</div>'
				+'</li>';
		}
		
		$('#subCategories').append(htmlString);
		//$('#subCategories').listview('refresh');
		
		$('#subCategories > li').hide();
		$('#subCategories > li:first').show();
		
		SclistSize = $('#subCategories li').size();
		
	}
	
	function loadCategoryData(){
		$('#categories > li').hide();
		$('#categories > li:first').show();
		
		listSize = $('#categories li').size();
		
		
	}
	
	function moveCategory(prmMove){
	 if(prmMove == "next"){
		 		 if(($('#categories > li:visible:first')|| $('#categories > li:visible:last')) && count != listSize){
			         	$('#categories > li:visible:last').next().show();
			         	$('#categories > li:visible:first').hide();
			         	count = count + 1;
			    	}
			    else{
			    	count = 1;
			    	$('#categories > li').hide();
			    	$('#categories > li:first').show();
			      }
		 }else{
		 		if(($('#categories > li:visible:first')|| $('#categories > li:visible:last')) && (count != 1)){
		 		 			$('#categories > li:visible:first').prev().show();
		 		 			$('#categories > li:visible:last').hide();
		 		 			count = count - 1;
		 		 		}else{
		 		 			count = listSize;
		 		 			$('#categories > li').hide();
							$('#categories > li:last').show();
		 		 		}
		 
		 }
	}
	function moveSubCategory(prmMove){
	 if(prmMove == "next"){
		 		 if(($('#subCategories > li:visible:first')|| $('#subCategories > li:visible:last')) && ScCount != SclistSize){
			         	$('#subCategories > li:visible:last').next().show();
			         	$('#subCategories > li:visible:first').hide();
			         	ScCount = ScCount + 1;
			    	}
			    else{
			    	ScCount = 1;
			    	$('#subCategories > li').hide();
			    	$('#subCategories > li:first').show();
			      }
		 }else{
		 		if(($('#subCategories > li:visible:first')|| $('#subCategories > li:visible:last')) && (ScCount != 1)){
		 		 			$('#subCategories > li:visible:first').prev().show();
		 		 			$('#subCategories > li:visible:last').hide();
		 		 			ScCount = ScCount - 1;
		 		 		}else{
		 		 			ScCount = SclistSize;
		 		 			$('#subCategories > li').hide();
							$('#subCategories > li:last').show();
		 		 		}
		 
		 }
	}
	
	//Handler for pageSplash init.
	$(document).on("pageshow", "#pageSplash", function(event) {
		//initializeData();
		setTimeout(hideSplash, 2000);
	});
	
	//Handler for pageSubCategories init.
	$(document).on("pageshow", "#pageSubCategories", function(event) {
		loadSubCategoryData();
		$('#subCategories').listview('refresh');
	});
	
	//Handler for pageEndSplash init.
	$(document).on("pageshow", "#pageEndSplash", function(event) {
		setTimeout(hideSplash, 2000);
	});
	
	//Handler for pageVideo init.
	$(document).on("pageshow", "#pageVideo", function(event) {
		var v ="";
		if(currentId == "CHESTBACK"){
			v = $("<video id='v' onclick='playPause()' width='100%' height='100%' src='vid/CHESTBACK.mp4' autoplay='autoplay' controls></video>");
		}else if(currentId == "LEGS"){
			v = $("<video id='v' onclick='playPause()' width='100%' height='100%' src='vid/LEGS.mp4' autoplay='autoplay' controls></video>");
		}else if(currentId == "TOTALBODY"){
			v = $("<video id='v' onclick='playPause()' width='100%' height='100%' src='vid/TOTALBODY.mp4' autoplay='autoplay' controls></video>");
		}else if(currentId == "UPPERBODY"){
			v = $("<video id='v' onclick='playPause()' width='100%' height='100%' src='vid/UPPERBODY.mp4' autoplay='autoplay' controls></video>");
		}else if(currentId == "LOWERBODY"){
			v = $("<video id='v' onclick='playPause()' width='100%' height='100%' src='vid/LOWERBODY.mp4' autoplay='autoplay' controls></video>");
		}else if(currentId == "CORE"){
			v = $("<video id='v' onclick='playPause()' width='100%' height='100%' src='vid/CORE.mp4' autoplay='autoplay' controls></video>");
		}else{
			v = $("<video id='v' onclick='playPause()' width='100%' height='100%' src='vid/CORE.mp4' autoplay='autoplay' controls></video>");
		}
		
		$("#player").empty();
		$("#player").append(v);
		
		var myVideo = document.getElementById("v");
		 if (myVideo.requestFullscreen) {
	    	   myVideo.requestFullscreen();
	         } else if (myVideo.mozRequestFullScreen) {
	        	 myVideo.mozRequestFullScreen();
	         } else if (myVideo.webkitRequestFullscreen) {
	        	 myVideo.webkitRequestFullscreen();
	         }
		
		if (myVideo.paused)
			myVideo.play();
		else
			myVideo.pause();
			
	   var video = $('video')[0];
        video.addEventListener('ended', function () {
                      $.mobile.changePage("#pageEndSplash", "fade");
                      });	
	});
	

	
	//Handler for playPause video.
	function playPause() {
		var myVideo = document.getElementById("v");
		//myVideo.webkitEnterFullscreen();
	       if (myVideo.requestFullscreen) {
	    	   myVideo.requestFullscreen();
	         } else if (myVideo.mozRequestFullScreen) {
	        	 myVideo.mozRequestFullScreen();
	         } else if (myVideo.webkitRequestFullscreen) {
	        	 myVideo.webkitRequestFullscreen();
	         }
		
		if (myVideo.paused)
			myVideo.play();
		else
			myVideo.pause();
		
		var video = $('video')[0];
        video.addEventListener('ended', function () {
                      $.mobile.changePage("#pageEndSplash", "fade");
			});	
	}
	
	//Not yet used
	function initializeData(){
		//selectDB();
	}
