## Berry Move
Quick Node app to deploy metadata between salesforce orgs.

This branch has been created to contain the code referenced in the article [`The origin of berry-move`](http://manzanos-tech-blog.ghost.io/the-origin-of-berry-move/).

#### Example Header
The header may contain all the options that `jsforce-metadata-tools` with the same parameter names. For more info check their repository [here](https://github.com/jsforce/jsforce-metadata-tools).

```
{
	"username": "javier.garcia@berrymove.dev",
	"password": "<password><SecurityToken>",
	"loginUrl": "http://login.salesforce.com",
	"metadata": "ApexClass:AccountHandler"
}
```

#### Availiable Endpoints
Metadata retrieval endpoint: `http://localhost:3000/metadata/retrieve`
Metadata deployment endpoint: `http://localhost:3000/metadata/deploy`