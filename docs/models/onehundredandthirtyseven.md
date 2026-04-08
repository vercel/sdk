# OneHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtySeven } from "@vercel/sdk/models/resourcelimits.js";

let value: OneHundredAndThirtySeven = {
  privateLinkEndpoint: {
    id: "<id>",
    name: "<value>",
  },
  projectId: "<id>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `privateLinkEndpoint`                                          | [models.PrivateLinkEndpoint](../models/privatelinkendpoint.md) | :heavy_check_mark:                                             | N/A                                                            |
| `projectId`                                                    | *string*                                                       | :heavy_check_mark:                                             | N/A                                                            |