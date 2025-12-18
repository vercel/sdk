# StageRedirectsRequestBody

## Example Usage

```typescript
import { StageRedirectsRequestBody } from "@vercel/sdk/models/stageredirectsop.js";

let value: StageRedirectsRequestBody = {
  projectId: "<id>",
  teamId: "<id>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `projectId`                                  | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `teamId`                                     | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `overwrite`                                  | *boolean*                                    | :heavy_minus_sign:                           | N/A                                          |
| `name`                                       | *string*                                     | :heavy_minus_sign:                           | N/A                                          |
| `redirects`                                  | [models.Redirects](../models/redirects.md)[] | :heavy_minus_sign:                           | N/A                                          |