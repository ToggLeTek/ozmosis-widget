# Ozmosis Widget

A swap widget created by OzMage Validation. Bootstrapped with [`create-cosmos-app`](https://github.com/cosmology-tech/create-cosmos-app). This widget should be self contained and able to be ported onto any `React-Based` site.

- [Ozmosis Widget](#ozmosis-widget)
  - [Getting Started](#getting-started)
    - [Local/Dev Environment](#localdev-environment)
  - [Contributions](#contributions)
  - [Learn More](#learn-more)
    - [Cosmology Information](#cosmology-information)
      - [Videos](#videos)
      - [Cosmos Kit](#cosmos-kit)
      - [Telescope](#telescope)
      - [CosmWasm TS Codegen](#cosmwasm-ts-codegen)
    - [Learn More about Next.js](#learn-more-about-nextjs)
  - [Credits](#credits)

## Getting Started

### Local/Dev Environment

You'll need to install the packages and run a development server. This assumes you already have Node.js/Git installed on your computer. If you do not, please visit: [Node.js](https://nodejs.org/) and download the latest version.

```bash
yarn && yarn dev
```

The repositories will install. Most errors should be ignorable. Then, Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

We have attempted to keep everything organized and documented as well as possible, but if you see places for improvement, please don't hesitate to [contribute](.github/CONTRIBUTING.md)!

## Contributions

We are never going to say no to help! Check out the [Issues](https://github.com/OzMage-Validation/ozmosis-widget/issues) and the [Contribution Guide](.github/CONTRIBUTING.md) to get started!

---

## Learn More

OzMage has stripped some items out of the original `create-cosmos-app` and tooled it for greater decentralization, we've done our best to document as much as we can to ensure you aren't lost.

### Cosmology Information

#### Videos

Checkout more videos for how to use various frontend tooling in the Cosmos!

- https://cosmology.tech/learn

#### Cosmos Kit

A wallet connector for the Cosmos ⚛️

- https://github.com/cosmology-tech/cosmos-kit

#### Telescope

A "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains. Simply point to your protobuffer files and create developer-friendly Typescript libraries for teams to build on your blockchain.

- https://github.com/osmosis-labs/telescope
- 🎥 [Checkout the Telescope video playlist](https://www.youtube.com/watch?v=n82MsLe82mk&list=PL-lMkVv7GZwyQaK6bp6kMdOS5mzosxytC) to learn how to use `telescope`!

#### CosmWasm TS Codegen

The quickest and easiest way to interact with CosmWasm Contracts. @cosmwasm/ts-codegen converts your CosmWasm smart contracts into dev-friendly TypeScript classes so you can focus on shipping code.

- https://github.com/CosmWasm/ts-codegen
- 🎥 [Checkout the CosmWasm/ts-codegne video playlist](https://www.youtube.com/watch?v=D_A5V2PfNLA&list=PL-lMkVv7GZwz1KO3jANwr5W4MoziruXwK) to learn how to use `ts-codegen`!

### Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Credits

🛠 Built with Cosmology

Code built with the help of these related projects:

* [@cosmwasm/ts-codegen](https://github.com/CosmWasm/ts-codegen) for generated CosmWasm contract Typescript classes
* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.
* [chain-registry](https://github.com/cosmology-tech/chain-registry) Cosmos chain registry and chain info.
* [cosmos-kit](https://github.com/cosmology-tech/cosmos-kit) A wallet connector for the Cosmos.
