# Ozmosis Widget Contribution

The following is a set of guidelines for those who wish to contribute. This guide is editable if you feel there are better standard operating procedures you think contributors should follow.

## Table of Contents

- [Ozmosis Widget Contribution](#ozmosis-widget-contribution)
  - [Table of Contents](#table-of-contents)
  - [IDE Setup](#ide-setup)
    - [Preferred IDEs](#preferred-ides)
    - [Extensions](#extensions)
      - [Helpful/Needed](#helpfulneeded)
      - [Suggested](#suggested)
  - [Guidelines](#guidelines)
    - [Style Guides](#style-guides)
      - [Commit Messages](#commit-messages)
      - [Issues](#issues)
      - [Code Style Guide](#code-style-guide)
  - [Semver spec](#semver-spec)
  - [Git Flow and Ozmosis Widgeting](#git-flow-and-ozmosis-widgeting)
  
## IDE Setup

### Preferred IDEs

- [VSCode](https://code.visualstudio.com/)
- [VSCodium](https://vscodium.com/)

### Extensions

Within the [extensions.json](/.vscode/extensions.json) file, there is list of recommendations which will be repeated here.

#### Helpful/Needed

- *Style/Lint Related:*
  - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- *NPM Related:*
  - [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)

#### Suggested

- [Gitmoji](https://marketplace.visualstudio.com/items?itemName=seatonjiang.gitmoji-vscode)
- [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji)
- [:emojisense:](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense)

## Guidelines

These are the follow guidelines. We request you follow as closely as possible.

### Style Guides

#### Commit Messages

We are recommending that commit messages should be done in the following manner. If not using Gitmoji please leave the emojis off. They are there merely for visual purposes.

```ts
✨ feat: short_description /** if a new feature is added */
🐛 bugfix: short_description /** if a bug is fixed */
⚠️ hotfix: short_description /** if a hotfix is committed */
🚩 release: short_description /** if a release is committed */
⚡️ support: short_description /** if a working with general support of a version */
📝 lint: short_description /** if linting is done on a file */
📚 docs: short_description /** if documentation is added */
↪️ refactor: short_description /** if files/docs are refactored to be smarter TM */
```

#### Issues

#### Code Style Guide

Code should satisfy the following:

- Variable names in `snake_case`.
- Function names in `camelCase`.
- Have no `lint` issues.
  - There is a recommended VSCode Extension in the repository.
- Have meaningful file names, directory names, and directory structure. We have provided a baseline.
- Have a scope for any refactoring, scaling, or general fixes.

## Semver spec

Utilization of the below schema for semantic versioning should be followed:

- `<major>.<minor>.<patch>`
- If needing to use an `alpha`, `beta`, or `rc` build, please add the following after `<patch>`
  - *Alpha:* `-alpha+<YYYYMMDD>.<HHMM>`
  - *Beta:* `-beta+<YYYYMMDD>.<HHMM>`
  - *RC (Release Candidate):* -`rc.<number>`

---

## Git Flow and Ozmosis Widgeting

We will be utilizing `Git Flow` in order to work as efficiently as possible. Here is a helpful guide in expectations:

- `git flow feature start <feature_name>`
  - Starts a branch named: `feat/<feature_name>`
  - This branch is based on the `/dev` branch.
- `git flow bugfix start <bug_name>`
  - Starts a branch named: `bugfix/<bug_name>`
  - Based on the `/dev` branch.
- `git flow hotfix start <hotfix_name>`
  - Starts a branch named: `hotfix/<hotfix_name>`
  - Based on `/main` branch.
  - **Note: Generally used after a release for quick fixes.**
- `git flow release start <version>`
  - Starts a new release branch under `release/<version>`
  - Based on `/dev` branch by default but can be based on a different base.
- `git flow support start <version> <base>`
  - Starts a support branch for a particular version of the `/main` branch.
  - Should only be used when needing to affect the `/main` branch. Ideal example flow would be:

```sh
git flow support start 0.1.0 main
git flow hotfix start fix_denoms support/0.1.0
git flow hotfix finish fix_denoms

# If adding features
  git flow feature start create_nirvana support/0.1.0
  git flow feature finish create_nirvana

git flow release start 0.1.1 support/0.1.0
git flow release finish 0.1.1
```
