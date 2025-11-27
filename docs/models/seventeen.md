# Seventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventeen } from "@vercel/sdk/models/userevent.js";

let value: Seventeen = {
  alias: "<value>",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `name`                                 | *string*                               | :heavy_minus_sign:                     | N/A                                    |
| `alias`                                | *string*                               | :heavy_check_mark:                     | N/A                                    |
| `oldTeam`                              | [models.OldTeam](../models/oldteam.md) | :heavy_minus_sign:                     | N/A                                    |
| `newTeam`                              | [models.NewTeam](../models/newteam.md) | :heavy_minus_sign:                     | N/A                                    |