# Apillon SDK demo

This is a node.js typescript project that showcases usage of Apillon SDK.
It provided code snippets of main functionalities. For detailed documentation go to [WIKI](https://wiki.apillon.io/build/5-apillon-sdk.html) and [SDK docs](https://sdk-docs.apillon.io/). You can also check SDK code on [GitHub](https://github.com/Apillon/sdk).

It can be run locally or in browser via [Codesandbox](https://codesandbox.io/).

## Environment

Create a `.env` file in root. Here you can add ENV variables. All variables are not needed to run examples.
Most only need API key and secret. Details of what each variable represent is written in the usage section.

List of all ENV variables:

```
APILLON_API_KEY=
APILLON_API_SECRET=
APILLON_BUCKET=
APILLON_IPNS=
APILLON_HOSTING=
APILLON_DEPLOYMENT=
APILLON_COLLECTION=
```

## Usage

To run examples you will need to create an [Apillon account](https://app.apillon.io/). Create a project and API key.
You will need to set API key and secret ENV variables. See the Environment section of this readme.

If you are running locally first install dependencies via: `npm install`.
If you are running on CodeSandbox this should be done automatically.

### Storage examples

> Examples of using Apillon storage functionalities via SDK.

`APILLON_API_KEY` and `APILLON_API_SECRET` env needed for all the examples.

#### List available buckets

Code in `./src/storage-buckets.ts`.

```sh
npm run storage:buckets
```

#### Get all files in a bucket

Code in `./src/storage-bucket-content.ts`.
`APILLON_BUCKET` env needs to be set with the bucket UUID from which we are getting files.

```sh
npm run storage:bucket-content
```

#### Upload files to bucket

Code in `./src/storage-bucket-upload.ts`.
`APILLON_BUCKET` env needs to be set with the bucket UUID to which we are uploading files.

```sh
npm run storage:bucket-upload
```

#### Create a new IPNS CID

Code in `./src/storage-bucket-ipns-create.ts`.
`APILLON_BUCKET` env needs to be set with the bucket UUID for which we are creating IPNS.

```sh
npm run storage:bucket-ipns-create
```

#### Update existing IPNS with a new IPFS CID

Code in `./src/storage-bucket-ipns-update.ts`.
`APILLON_BUCKET` env needs to be set with the bucket UUID for which we are creating IPNS.
`APILLON_IPNS` env needs to be set with the IPNS UUID which we are updating.

```sh
npm run storage:bucket-ipns-update
```

### Hosting examples

> Examples of using Apillon hosting functionalities via SDK.

`APILLON_API_KEY` and `APILLON_API_SECRET` env needed for all the examples.

#### List available websites

Code in `./src/hosting-websites.ts`.

```sh
npm run hosting:websites
```

#### Deploy a website

Code in `./src/hosting-website-deploy.ts`.
`APILLON_HOSTING` env needs to be set with the website UUID to which we are uploading new files.

```sh
npm run hosting:website-deploy
```

#### Get website deploy status

Code in `./src/hosting-website-deploy.ts`.
`APILLON_HOSTING` env needs to be set with the website UUID to which we are getting status.
`APILLON_DEPLOYMENT` env needs to be set with the deployment UUID of which we are getting status.

```sh
npm run hosting:website-deploy-status
```

### Identity examples

> Examples of using Apillon identity functionalities via SDK.

Identity consist of 2 parts first is validating a user via wallet signature. This is standard web3
authentication and does not need any ENVs. You can do this for `substrate` or `EVM` wallets.

Second part is getting onchain identity information for wallet. This is currently only supported for substrate addresses
and pools information directly from polkadot and sub socials chains.

#### User authentication

Code in `./src/identity-generate-message.ts` and `./src/identity-validate-signature.ts`.

Authenticating user is a 2 step process. First the user signs a message with their private key(wallet) like metamask, talisman etc. The message he is signing can be generated via SDK which adds a timestamp to the message:

```sh
npm run identity:generate-message
```

The signature is generated via third party wallet and is not in the scope of user authentication in the SDK.

The signature along side the message and the wallet that signed it can then be validated:

```sh
- npm run identity:validate-signature
```

#### Get wallet on chain identity

Code in `./src/identity.ts`.

`APILLON_API_KEY` and `APILLON_API_SECRET` env needed for this example.

```sh
npm run identity
```

## NFT examples

> Examples of using Apillon NFT functionalities via SDK.

`APILLON_API_KEY` and `APILLON_API_SECRET` env needed for all the examples.

#### List NFT collections

Code in `./src/nft-collections.ts`.

```sh
npm run nft:collections
```

#### Create a new NFT collection

Code in `./src/nft-collection-create.ts`.

```sh
npm run nft:collection-create
```

#### Get collection status

Code in `./src/nft-collection.ts`.

`APILLON_COLLECTION` env needs to be set with the collection UUID of which we are getting the status of.

```sh
npm run nft:collection
```

#### Mint NFT in collection

Code in `./src/nft-collection-mint.ts`.

`APILLON_COLLECTION` env needs to be set with the collection UUID to which we are minting a new NFT.

```sh
npm run nft:collection-mint
```
