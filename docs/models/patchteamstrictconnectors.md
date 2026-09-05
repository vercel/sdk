# PatchTeamStrictConnectors

When enabled, creating and managing connectors requires Owner role.

## Example Usage

```typescript
import { PatchTeamStrictConnectors } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamStrictConnectors = {
  enabled: true,
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `enabled`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | Enable or disable requiring Owner role to manage connectors. | true                                                         |