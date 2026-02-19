# CreateSDKKeyRequestBody

## Example Usage

```typescript
import { CreateSDKKeyRequestBody } from "@vercel/sdk/models/createsdkkeyop.js";

let value: CreateSDKKeyRequestBody = {
  sdkKeyType: "server",
  environment: "<value>",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `sdkKeyType`                                 | [models.SDKKeyType](../models/sdkkeytype.md) | :heavy_check_mark:                           | N/A                                          |
| `environment`                                | *string*                                     | :heavy_check_mark:                           | N/A                                          |
| `label`                                      | *string*                                     | :heavy_minus_sign:                           | N/A                                          |