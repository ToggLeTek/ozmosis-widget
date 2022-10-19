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
    - [Semantic Versioning Specification](#semantic-versioning-specification)
  - [Git Flow](#git-flow)
  
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

> If using Gitmoji, the commit types you will see will be restricted to the kind above. This does not stop you from committing anything though. Just use them as a guide.

#### Issues

#### Code Style Guide

Code should satisfy the following:

- Variable names in `snake_case`.
- Function and file names in `camelCase`.
- Have no `lint` issues.
  - There is recommended VSCode Extensions in the repository.
- Have meaningful file names, directory names, and directory structure. We have provided a baseline.
- Have a scope for any refactoring, scaling, or general fixes.

### Semantic Versioning Specification

Ozmosis Widget will be adhering to a [Semantic Versioning](https://semver.org/spec/v2.0.0.html). Follow the below guide:

- `<major>.<minor>.<patch>`
- If needing to use an `alpha`, `beta`, or `rc` build, please add the following after `<patch>`
  - *Alpha:* `-alpha+<YYYYMMDD>.<HHMM>`
    - `HHMM` should be UTC
  - *Beta:* `-beta+<YYYYMMDD>.<HHMM>`
    - `HHMM` should be UTC
  - *RC (Release Candidate):* -`rc.<build_number>`

> *Note:*
>
> - `Alpha` is generally more unstable than `beta` which is more unstable than a `rc`
> - Traditionally with software there is a `v` in front of the semver, such as: `v0.1.0`
>
> [`Git Flow`](#git-flow) handles this for creation of tags and is **not** needed by a user.
>
> The versioning should go `X.X.0-alpha` THEN `X.X.0-beta` THEN `X.X.0-rc` THEN `X.X.0`.
>
> The initial release of this project will be: `0.1.0`.

Examples:

```md
- Alpha Build:  0.1.0-alpha+20221019.1931
- Beta Build:   0.1.0-beta+20221019.1945
- RC Build:     0.1.0-rc.1
- Release:      0.1.0
```

## Git Flow

We will be utilizing [`Git Flow`](https://git.logikum.hu/graph/) in order to work as efficiently as possible. *`Git Flow` automatically prepends the version number with a v in this repository.* Here is a helpful guide in expectations:

- When starting a new feature creation process use:
  - `git flow feature start <feature_name>`
    - Starts a branch named: `feat/<feature_name>`
    - This branch is based on the `/dev` branch.
- When providing a bug fix to a feature use:
  - `git flow bugfix start <bug_name> feat/<feature_name>`
- Or, if directly fixing from the `/dev` branch:
  - `git flow bugfix start <bug_name>`
    - Starts a branch named: `feat/bugfix/<bug_name>` or `bugfix/<bug_name>` respectively
  - If a feature is not referenced, the branch is based on `/dev`.
- If needing to provide a hotfix for a release:
  - `git flow hotfix start <version>`
    - Starts a branch named: `hotfix/<version>`
    - Based on `/main` branch.
    - Once `git flow hotfix finish <version>` is run, a copy is also pushed to `/dev`
    - **Note: Generally used after a release for quick fixes.**
- When it is appropriate use the below to indicate final linting and checks:
  - `git flow release start <version>`
    - Starts a new release branch under `release/<version>`
    - Based on `/dev` branch by default but can be based on a different base.
- Sometimes we need to do support work on *previous* versions:
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
