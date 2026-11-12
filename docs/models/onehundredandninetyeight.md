# OneHundredAndNinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyEight } from "@vercel/sdk/models/onehundredandfiftyeight.js";

let value: OneHundredAndNinetyEight = {
  environment: "<value>",
  expiresIn: 1920.87,
  flags: [],
  projectId: "<id>",
  projectIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `environment`                                                         | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `expiresIn`                                                           | *number*                                                              | :heavy_check_mark:                                                    | Seconds until the overrides expire.                                   |
| `flags`                                                               | *string*[]                                                            | :heavy_check_mark:                                                    | The keys of the overridden flags, never their values.                 |
| `projectId`                                                           | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   |
| `projectIds`                                                          | *string*[]                                                            | :heavy_check_mark:                                                    | The projects that accept the overrides: a whole microfrontends group. |
| `projectName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |