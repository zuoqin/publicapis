import React from 'react';
import ReactDOM from 'react-dom';
import APITable from './APITable';


const items = 
	[{"API":"Dogs","Description":"Based on the Stanford Dogs Dataset","Auth":"","HTTPS":true,"Cors":"Unknown","Link":"https://dog.ceo/dog-api/","Category":"Animals"},
	{"API":"HTTPCat","Description":"Cat for every HTTP Status","Auth":"","HTTPS":true,"Cors":"Unknown","Link":"https://http.cat/","Category":"Animals"},
	{"API":"IUCN","Description":"IUCN Red List of Threatened Species","Auth":"apiKey","HTTPS":false,"Cors":"Unknown","Link":"http://apiv3.iucnredlist.org/api/v3/docs","Category":"Animals"},
	{"API":"Movebank","Description":"Movement and Migration data of animals","Auth":"","HTTPS":true,"Cors":"Unknown","Link":"https://github.com/movebank/movebank-api-doc","Category":"Animals"},
	{"API":"Petfinder","Description":"Adoption","Auth":"apiKey","HTTPS":true,"Cors":"Unknown","Link":"https://www.petfinder.com/developers/api-docs/","Category":"Animals"},
	{"API":"RescueGroups","Description":"Adoption","Auth":"","HTTPS":true,"Cors":"Unknown","Link":"https://userguide.rescuegroups.org/display/APIDG/API+Developers+Guide+Home","Category":"Animals"},
	{"API":"AniList","Description":"Anime discovery \u0026 tracking","Auth":"OAuth","HTTPS":true,"Cors":"Unknown","Link":"https://github.com/AniList/ApiV2-GraphQL-Docs","Category":"Anime"},
	{"API":"Jikan","Description":"Unofficial MyAnimeList API","Auth":"","HTTPS":true,"Cors":"Unknown","Link":"https://jikan.me","Category":"Anime"},
	{"API":"Kitsu","Description":"Anime discovery platform","Auth":"OAuth","HTTPS":true,"Cors":"Unknown","Link":"http://docs.kitsu.apiary.io/","Category":"Anime"},
	{"API":"Studio Ghibli","Description":"Resources from Studio Ghibli films","Auth":"","HTTPS":true,"Cors":"Unknown","Link":"https://ghibliapi.herokuapp.com","Category":"Anime"},
	{"API":"AlienVault Open Threat Exchange (OTX)","Description":"IP/domain/URL reputation","Auth":"apiKey","HTTPS":true,"Cors":"Unknown","Link":"https://otx.alienvault.com/api/","Category":"Anti-Malware"},
	{"API":"Certly","Description":"Certly Link/Domain Flagging","Auth":"apiKey","HTTPS":true,"Cors":"Unknown","Link":"https://guard.certly.io/","Category":"Anti-Malware"}
	]


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<APITable items= {items}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<APITable items= {[]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
