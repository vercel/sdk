# PatchTeamBuildMachine

Build machine configuration.

## Example Usage

```typescript
import { PatchTeamBuildMachine } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamBuildMachine = {
  default: "standard",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `default`                                                                | [models.PatchTeamDefault](../models/patchteamdefault.md)                 | :heavy_minus_sign:                                                       | Default build machine type for new builds: standard, enhanced, or turbo. | standard                                                                 |