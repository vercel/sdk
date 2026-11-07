# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/rule.js";

let value: FiftyNine = {
  alias: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `alias`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `name`                                 | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `newTeam`                              | [models.NewTeam](../models/newteam.md) | :heavy_minus_sign:                     | N/A                                    |
| `oldTeam`                              | [models.OldTeam](../models/oldteam.md) | :heavy_minus_sign:                     | N/A                                    |