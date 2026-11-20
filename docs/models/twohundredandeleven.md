# TwoHundredAndEleven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEleven } from "@vercel/sdk/models/newprojects.js";

let value: TwoHundredAndEleven = {
  integration: {
    configurationId: "<id>",
    id: "<id>",
    name: "<value>",
    slug: "<value>",
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