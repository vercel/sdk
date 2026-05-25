# TwoHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyEight } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndSeventyEight = {
  projectId: "<id>",
  projectName: "<value>",
  enabled: true,
  environment: "preview",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `projectId`                                    | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `projectName`                                  | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `enabled`                                      | *boolean*                                      | :heavy_check_mark:                             | N/A                                            |
| `environment`                                  | [models.Environment](../models/environment.md) | :heavy_check_mark:                             | N/A                                            |