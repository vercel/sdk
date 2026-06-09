# PatchTeamSources1

## Example Usage

```typescript
import { PatchTeamSources1 } from "@vercel/sdk/models/patchteamop.js";

let value: PatchTeamSources1 = {
  provider: "github",
  org: "<value>",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `provider`                                                               | [models.PatchTeamSourcesProvider](../models/patchteamsourcesprovider.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `org`                                                                    | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `repo`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |