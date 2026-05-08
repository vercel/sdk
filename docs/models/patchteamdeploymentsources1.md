# PatchTeamDeploymentSources1

## Example Usage

```typescript
import { PatchTeamDeploymentSources1 } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamDeploymentSources1 = {
  enabled: false,
  sources: [
    "git",
  ],
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `enabled`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `sources`                                                                                    | [models.PatchTeamDeploymentSourcesSources](../models/patchteamdeploymentsourcessources.md)[] | :heavy_check_mark:                                                                           | N/A                                                                                          |