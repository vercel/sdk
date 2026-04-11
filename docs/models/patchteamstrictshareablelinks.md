# PatchTeamStrictShareableLinks

When enabled, creating shareable links requires Owner role.

## Example Usage

```typescript
import { PatchTeamStrictShareableLinks } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamStrictShareableLinks = {
  enabled: true,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `enabled`                                                         | *boolean*                                                         | :heavy_check_mark:                                                | Enable or disable requiring Owner role to create shareable links. | true                                                              |