# FortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyFour } from "@vercel/sdk/models/thirtythree.js";

let value: FortyFour = {
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