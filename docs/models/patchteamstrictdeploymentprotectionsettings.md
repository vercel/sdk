# PatchTeamStrictDeploymentProtectionSettings

When enabled, deployment protection settings require stricter permissions (owner-only).

## Example Usage

```typescript
import { PatchTeamStrictDeploymentProtectionSettings } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamStrictDeploymentProtectionSettings = {
  enabled: true,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `enabled`                                                | *boolean*                                                | :heavy_check_mark:                                       | Enable or disable strict deployment protection settings. | true                                                     |