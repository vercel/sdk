# PatchTeamStrictPasswordProtectionSettings

When enabled, adding, changing, or removing project password protection requires Owner role.

## Example Usage

```typescript
import { PatchTeamStrictPasswordProtectionSettings } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamStrictPasswordProtectionSettings = {
  enabled: true,
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   | Example                                                                       |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `enabled`                                                                     | *boolean*                                                                     | :heavy_check_mark:                                                            | Enable or disable requiring Owner role to change project password protection. | true                                                                          |