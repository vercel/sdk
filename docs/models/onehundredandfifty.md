# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
  customerSupportCodeVisibility: true,
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `projectId`                     | *string*                        | :heavy_check_mark:              | N/A                             |
| `projectName`                   | *string*                        | :heavy_check_mark:              | N/A                             |
| `customerSupportCodeVisibility` | *boolean*                       | :heavy_check_mark:              | N/A                             |