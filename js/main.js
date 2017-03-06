$(document).ready(function(){


$("#searchUser").on('keyup',function(e){

  let username = e.target.value;

  //make request to Github..


$.ajax({

url:'https://api.github.com/users/'+username,
data:{
	client_id:'9449e77f9fa5ed76721d',
	client_secret:'6a7dd0840714dfb97c8764d6a430160ffc1b3283'
}

}).done(function(user){

	$.ajax({

		url:'https://api.github.com/users/'+username+'/repos',
		data:{
	client_id:'9449e77f9fa5ed76721d',
	client_secret:'6a7dd0840714dfb97c8764d6a430160ffc1b3283',
	sort:'created: asc',
	
}

	}).done(function(repos){
         

         $.each(repos, function(index, repo){

           $("#repos").append(`

            <div class="well">

             <div class="row">
              
              <div class="col-md-7">
              <strong>${repo.name}</strong>: ${repo.description}
              </div>


              <div class="col-md-3">
                <span class="label label-default">Forks: ${repo.forks_count}</span>
 			    <span class="label label-primary">Watchers: ${repo.Watchers_count}</span>
			    <span class="label label-success">Stars: ${repo.stargazers_count}</span>
              </div>

              <div class="col-md-2">
                <a href="${repo.html_url}" target="_blank" class="btn btn-default">Repo Page</a>
              </div>


             </div>

            </div>

           	`);

         }); 


	});

  $("#profile").html(`

   <div class="panel panel-default">
           <div class="panel-heading">
               <h3 class="panel-title"><strong> ${user.name} </strong> </h3>
              </div>
           <div class="panel-body">
          <div class="row">

          <div class="col-md-3">

          <img class="thumbnail avatar" src="${user.avatar_url}">

          <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>

          </div>

          <div class="col-md-9">

            <span class="label label-default">Public Repos: ${user.public_repos}</span>
 			<span class="label label-primary">Public Gists: ${user.public_gits}</span>
			<span class="label label-success">Followers: ${user.followers}</span>
			<span class="label label-info">Following: ${user.following}</span>

			<br/><br/>

			<ul class="list-group">
			<li class="list-group-item">UserName: ${user.login}</li>
			<li class="list-group-item">Email: ${user.email}</li>
			<li class="list-group-item">Company: ${user.company}</li>
			<li class="list-group-item">Website/blog: ${user.blog}</li>
			<li class="list-group-item">Location: ${user.location}</li>
			<li class="list-group-item">Member since: ${user.created_at}</li>
			<li class="list-group-item">Last Update: ${user.updated_at}</li>


			</ul>

          </div>

        
          </div>
          </div>
        </div>

        <h3 class="page-header">Latest Repos</h3>
        <div id="repos">
        


        </div>

  	  `);
    });

  });

 });