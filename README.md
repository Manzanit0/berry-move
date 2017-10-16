## Berry Move
Quick Node app to deploy metadata between salesforce orgs.

#### Example Header
The header may contain all the options that `jsforce-metadata-tools` with the same parameter names. For more info check their repository [here](https://github.com/jsforce/jsforce-metadata-tools).

```
{
	"username": "javier.garcia@berrymove.dev",
	"password": "<password><SecurityToken>",
	"loginUrl": "http://login.salesforce.com"
}
```

#### Example Body [WIP]
This example will retrieve the classes `ClassOne.cls`, `ClassTwo.cls` and `ClassThree.cls` as well as all the Visualforce pages in the organization:

```
{
    "ApexClass":[ClassOne, ClassTwo, ClassThree],
    "ApexPage": [*]
}
```

#### Availiable Endpoints
Metadata retrieval endpoint: `http://localhost:3000/metadata/retrieve`