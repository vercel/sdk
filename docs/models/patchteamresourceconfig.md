# PatchTeamResourceConfig

Resource configuration for the team.

## Example Usage

```typescript
import { PatchTeamResourceConfig } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamResourceConfig = {
  buildMachine: {
    default: "standard",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `buildMachine`                                                     | [models.PatchTeamBuildMachine](../models/patchteambuildmachine.md) | :heavy_minus_sign:                                                 | Build machine configuration.                                       |