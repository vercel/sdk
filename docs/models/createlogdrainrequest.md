# CreateLogDrainRequest

## Example Usage

```typescript
import { CreateLogDrainRequest } from "@vercel/sdk/models/createlogdrainop.js";

let value: CreateLogDrainRequest = {
  requestBody: {
    name: "My first log drain",
    secret: "a1Xsfd325fXcs",
    deliveryFormat: "json",
    url: "https://example.com/log-drain",
  },
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `teamId`                                                                   | *string*                                                                   | :heavy_minus_sign:                                                         | The Team identifier to perform the request on behalf of.                   |
| `slug`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | The Team slug to perform the request on behalf of.                         |
| `requestBody`                                                              | [models.CreateLogDrainRequestBody](../models/createlogdrainrequestbody.md) | :heavy_check_mark:                                                         | N/A                                                                        |