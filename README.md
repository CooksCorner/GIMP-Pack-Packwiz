# G.I.M.P Pack

A Minecraft 1.21.1 modpack managed with [Packwiz](https://packwiz.infra.link/).

## Versions

- Minecraft 1.21.1
- NeoForge 21.1.235
- Pack version 1.0.0

## Repository layout

- `pack.toml` and `index.toml` contain the Packwiz manifest and index.
- `mods/` contains Packwiz metadata for the mod downloads.
- `config/`, `defaultconfigs/`, and `kubejs/` contain the pack overrides.
- `resourcepacks/` and `moonlight-global-datapacks/` contain bundled pack resources.

## Development

Download Packwiz into the repository root, then refresh the index after changing any override:

```text
packwiz refresh
```

To check the managed mod list:

```text
packwiz list
```

To update all managed files:

```text
packwiz update --all
```

Review and test updates in a separate Minecraft instance before committing them.

