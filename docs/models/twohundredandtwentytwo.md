# TwoHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyTwo } from "@vercel/sdk/models/onehundredandninetythree.js";

let value: TwoHundredAndTwentyTwo = {
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