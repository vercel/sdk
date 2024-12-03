# CreateConfigurableLogDrainRequest

## Example Usage

```typescript
import { CreateConfigurableLogDrainRequest } from "@vercel/sdk/models/operations/createconfigurablelogdrain.js";

let value: CreateConfigurableLogDrainRequest = {
  requestBody: {
    deliveryFormat: "json",
    url: "https://sentimental-descent.org/",
    sources: [
      "external",
    ],
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `teamId`                                                                                                             | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The Team identifier to perform the request on behalf of.                                                             |
| `slug`                                                                                                               | *string*                                                                                                             | :heavy_minus_sign:                                                                                                   | The Team slug to perform the request on behalf of.                                                                   |
| `requestBody`                                                                                                        | [operations.CreateConfigurableLogDrainRequestBody](../../models/operations/createconfigurablelogdrainrequestbody.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |