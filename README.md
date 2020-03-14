<div align="center">
  <a href="https://www.pokt.network">
    <img src="https://pokt.network/wp-content/uploads/2018/12/Logo-488x228-px.png" alt="Pocket Network logo" width="340"/>
  </a>
</div>

# Project Title

Lambda implementation for generating [Application Authentication Tokens](https://github.com/pokt-network/pocket-aat-js) for the Pocket Network.
<div align="lef">
  <a  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference">
    <img src="https://img.shields.io/badge/js-reference-yellow.svg"/>
  </a>
  <a href="https://nodejs.org/"><img  src="https://img.shields.io/badge/node-%3E%3D%2011.6.0-brightgreen"/></a>
</div>

## Overview
<div align="left">
  <a  href="https://github.com/pokt-network/pocket-aat-lambda/releases">
    <img src="https://img.shields.io/github/release-pre/pokt-network/pocket-aat-lambda.svg"/>
  </a>
  <a  href="https://github.com/pokt-network/pocket-aat-lambda/pulse">
    <img src="https://img.shields.io/github/contributors/pokt-network/pocket-aat-lambda.svg"/>
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg"/>
  </a>
  <a href="https://github.com/pokt-network/pocket-aat-lambda/pulse">
    <img src="https://img.shields.io/github/last-commit/pokt-network/pocket-aat-lambda.svg"/>
  </a>
  <a href="https://github.com/pokt-network/pocket-aat-lambda/pulls">
    <img src="https://img.shields.io/github/issues-pr/pokt-network/pocket-aat-lambda.svg"/>
  </a>
  <a href="https://github.com/pokt-network/pocket-aat-lambda/issues">
    <img src="https://img.shields.io/github/issues-closed/pokt-network/pocket-aat-lambda.svg"/>
  </a>
</div>

This example is a starting point for building an AAT server on AWS Lambda and API Gateway.

### Installation

Clone the repo locally. 

Your local environment should be running node 12.15.0 to match the version available on Lambda and the version requirements of the associated libraries. For an easy way to install and switch between multiple node versions, see [the easy node version switcher, N](https://github.com/tj/n).

After cloning, change directory to the repo and run:

```
npm install
```
**If you are not running node 12.15.0 and you attempt to build, you may run into version incompatibility errors once you deploy to Lambda.**

Once installed, zip it for preparation to move to Lambda:

```
zip -q -r /tmp/generator.zip .
```

### Deployment

Open the AWS Console and [create a new Lambda function](https://console.aws.amazon.com/lambda/home?region=us-east-1#/create/function).

Name it aatGenerator running under Node 12.x:

<img src="https://user-images.githubusercontent.com/16605170/76672242-77396900-6558-11ea-8516-d7640ca627ad.png" alt="Create Lambda function" />

After the function and associated resources are created, upload the function and change the handler name on the next screen:

<img src="https://user-images.githubusercontent.com/16605170/76672350-3ee65a80-6559-11ea-9f83-508bd33b7682.png" alt="Function editing" />

Once the function is saved and uploaded you can create a simple test and add a trigger with the API Gateway:

<img src="https://user-images.githubusercontent.com/16605170/76672396-a3091e80-6559-11ea-9c4d-c7342a45c6a8.png" alt="API Gateway" />

**Note that at this point your AAT Generator is open to the world.**


### Security

There are multiple methods of securing the API Gateway depending on your application architecture. First, see the overview of [HTTP APIs at AWS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api.html).

- [Securing API Gateway using custom authorizers](https://auth0.com/docs/integrations/aws-api-gateway/custom-authorizers)
- [Securing APIS with JSON Web Tokens (JWT)](https://hackernoon.com/securing-apis-with-json-web-tokens-and-an-api-gateway-b9b589149616)
- [Okta offers a commercial solution to API Authorization](https://www.okta.com/products/api-access-management/)


## Documentation

For more on AATs, see the [Pocket-AAT-JS repository](https://github.com/pokt-network/pocket-aat-js), and the [Pocket Network documentation](https://docs.pokt.network/docs).

## Contributing

Please read [CONTRIBUTING.md](https://github.com/pokt-network/repo-template/blob/master/CONTRIBUTING.md) for details on contributions and the process of submitting pull requests.

## Support & Contact

<div>
  <a href="https://twitter.com/poktnetwork" ><img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"></a>
  <a href="https://t.me/POKTnetwork"><img src="https://img.shields.io/badge/Telegram-blue.svg"></a>
  <a href="https://www.facebook.com/POKTnetwork" ><img src="https://img.shields.io/badge/Facebook-red.svg"></a>
  <a href="https://research.pokt.network"><img src="https://img.shields.io/discourse/https/research.pokt.network/posts.svg"></a>
</div>


## License

This project is licensed under the MIT License; see the [LICENSE.md](LICENSE.md) file for details.
