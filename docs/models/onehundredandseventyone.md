# OneHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyOne } from "@vercel/sdk/models/artifacts.js";

let value: OneHundredAndSeventyOne = {
  integration: {
    id: "<id>",
    slug: "<value>",
    name: "<value>",
    configurationId: "<id>",
  },
  destinationTeamId: "<id>",
  destinationTeamName: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `integration`                                  | [models.Integration](../models/integration.md) | :heavy_check_mark:                             | N/A                                            |
| `destinationTeamId`                            | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `destinationTeamName`                          | *string*                                       | :heavy_check_mark:                             | N/A                                            |