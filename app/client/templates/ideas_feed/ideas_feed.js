/*****************************************************************************/
/* IdeasFeed: Event Handlers */
/*****************************************************************************/
Template.IdeasFeed.events({
});

/*****************************************************************************/
/* IdeasFeed: Helpers */
/*****************************************************************************/
Template.IdeasFeed.helpers({
	ideas:function(){
		return Ideas.find({}, {sort:{dateCreated: -1}, limit:Session.get("ideaLimit")});
	},

	image:function(){
		var uploadedImage = Uploads.findOne({_id: this.fileId});
		return uploadedImage;
	},

	title:function(){
		return this.title;
	},

	tags:function(){
		return this.tags;
	},

	creator:function(user_id){
		var user = Meteor.users.findOne({_id:user_id});
      	if (user){
        	return user.username;
      	}
      	else {
        	return "Anonymous";
      	}
	}

});

/*****************************************************************************/
/* IdeasFeed: Lifecycle Hooks */
/*****************************************************************************/
Template.IdeasFeed.onCreated(function () {
});

Template.IdeasFeed.onRendered(function () {
});

Template.IdeasFeed.onDestroyed(function () {
});
