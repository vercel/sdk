# OneHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyFive } from "@vercel/sdk/models/edgemiddlewareinvocations.js";

let value: OneHundredAndSixtyFive = {
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