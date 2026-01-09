# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  elasticConcurrencyEnabled: true,
  oldElasticConcurrencyEnabled: false,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `projectId`                    | *string*                       | :heavy_check_mark:             | N/A                            |
| `projectName`                  | *string*                       | :heavy_check_mark:             | N/A                            |
| `elasticConcurrencyEnabled`    | *boolean*                      | :heavy_check_mark:             | N/A                            |
| `oldElasticConcurrencyEnabled` | *boolean*                      | :heavy_check_mark:             | N/A                            |