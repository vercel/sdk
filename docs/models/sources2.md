# Sources2

## Example Usage

```typescript
import { Sources2 } from "@vercel/sdk/models/team.js";

let value: Sources2 = {
  provider: "gitlab",
  org: "<value>",
  repo: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `provider`                                                     | [models.TeamSourcesProvider](../models/teamsourcesprovider.md) | :heavy_check_mark:                                             | N/A                                                            |
| `org`                                                          | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |
| `repo`                                                         | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |