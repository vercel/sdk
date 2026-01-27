# NsnbConfig1

NSNB configuration for the team.

## Example Usage

```typescript
import { NsnbConfig1 } from "@vercel/sdk/models/patchteamop.js";

let value: NsnbConfig1 = {
  preference: "block",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `preference`                                                     | [models.NsnbConfigPreference](../models/nsnbconfigpreference.md) | :heavy_check_mark:                                               | The NSNB preference for the team.                                |